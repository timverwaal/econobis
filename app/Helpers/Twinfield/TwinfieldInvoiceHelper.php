<?php
/**
 * Created by PhpStorm.
 * User: StagiarSoftware
 * Date: 19-1-2018
 * Time: 11:55
 */

namespace App\Helpers\Twinfield;

use App\Eco\Administration\Administration;
use App\Eco\Invoice\InvoicePayment;
use Illuminate\Support\Facades\Log;
use PhpTwinfield\ApiConnectors\InvoiceApiConnector;
use PhpTwinfield\ApiConnectors\BrowseDataApiConnector;
use PhpTwinfield\BrowseColumn;
use PhpTwinfield\Exception as PhpTwinfieldException;
use PhpTwinfield\Office;
use PhpTwinfield\Secure\WebservicesAuthentication;

class TwinfieldInvoiceHelper
{
    private $connection;
    private $office;
    private $administration;
    private $invoiceApiConnector;

    /**
     * TwinfieldCustomerHelper constructor.
     *
     * @param Administration $administration
     */
    public function __construct(Administration $administration)
    {
        $this->connection = new WebservicesAuthentication($administration->twinfield_username, $administration->twinfield_password, $administration->twinfield_organization_code);
        $this->office = Office::fromCode($administration->twinfield_office_code);
        $this->administration = $administration;
        $this->invoiceApiConnector = new InvoiceApiConnector($this->connection);
    }

    public function processPaidInvoices(){
        set_time_limit(0);
        $browseDataApiConnector = new BrowseDataApiConnector($this->connection);

        //Deze function kan je gebruiken om te kijken wel browseDefinition fields er zijn voor een bepaald code
        //$this->readBrowseDefinition($browseDataApiConnector);

        $messages = [];

        foreach ($this->administration->invoices()->where('status_id', 'exported')->whereNotNull('twinfield_number')->get() as $invoiceToBeChecked)
        {
            if(!$invoiceToBeChecked->twinfield_number){
                Log::error('Factuur ' . $invoiceToBeChecked->id . ' met nummer ' . $invoiceToBeChecked->number . ' heeft status geexporteerd maar heeft geen Twinfield nummer.');
            }
            else {
                $columns[] = (new BrowseColumn())
                    ->setField('fin.trs.head.code')
                    ->setLabel('Transactie type')
                    ->setVisible(true)
                    ->setAsk(true);
//                    ->setOperator(BrowseColumnOperator::EQUAL())
//                    ->setFrom("VRK")
//                    ->setTo("");
                $columns[] = (new BrowseColumn())
                    ->setField('fin.trs.line.matchstatus')
                    ->setLabel('Betaalstatus')
                    ->setVisible(true)
                    ->setAsk(true);
//ToDo Testboeking eruit uiteraard!
                $columns[] = (new BrowseColumn())
                    ->setField('fin.trs.head.number')
                    ->setLabel('Twinfield number')
                    ->setVisible(true)
                    ->setAsk(true);
//                    ->setOperator(BrowseColumnOperator::EQUAL())
//                    ->setOperator(BrowseColumnOperator::BETWEEN())
//                    ->setFrom( "201900002" )
//                    ->setTo( "201900002" );
//                    ->setFrom( $invoiceToBeChecked->twinfield_number )
//                    ->setTo( $invoiceToBeChecked->twinfield_number );

//                $columns[] = (new BrowseColumn())
//                    ->setField('fin.trs.line.matchdate')
//                    ->setLabel('Betaaldatum')
//                    ->setVisible(true)
//                    ->setOperator(BrowseColumnOperator::BETWEEN())
//                    ->setFrom( '00000000' )
//                    ->setTo( '99991231' );
                $columns[] = (new BrowseColumn())
                    ->setField('fin.trs.line.basevaluesigned')
                    ->setLabel('Bedrag')
                    ->setVisible(true);
                $columns[] = (new BrowseColumn())
                    ->setField('fin.trs.line.openbasevaluesigned')
                    ->setLabel('Openstaand bedrag')
                    ->setVisible(true);
                $columns[] = (new BrowseColumn())
                    ->setField('fin.trs.line.matchnumber')
                    ->setLabel('Betaalnr.')
                    ->setVisible(true);

//                $sortFields[] = new BrowseSortField('fin.trs.head.number');

                $twinfieldInvoiceTransactions = $browseDataApiConnector->getBrowseData('100', $columns );
//                dd($twinfieldInvoiceTransactions); die();

                foreach($twinfieldInvoiceTransactions->getRows() as $row){
                    // 1e cell (0) bevat code
                    $type = ($row->getCells()[0]->getValue());
                    // 2e cell (1) bevat matchstatus
                    // 3e cell (2) bevat twinfieldnummer

                    //VRK is de verkoop factuur
                    if($type === 'VRK' ){
                        //4e cell (3) bevat betaaldatum
                        $dateInput = $row->getCells()[3]->getValue(); //datetime
                        $dateInput = date_format($dateInput, 'Y-m-d');

                        //5e cell (4) bevat bedrag (neem aan factuurbedrag en niet betaald bedrag ??)
                        $amount = $row->getCells()[4]->getValue();
                        //6e cell (5) bevat bedrag openstaand
                        $amountOpen = $row->getCells()[5]->getValue();

                        //-100 op debiteur is dus 100 betaald
                        $amount = $amount * -1;

                        if(!InvoicePayment::where('invoice_id', $invoiceToBeChecked->id)->where('amount', $amount)->where('date_paid', $dateInput)->exists()){
                            $invoicePayment = new InvoicePayment();
                            $invoicePayment->invoice_id = $invoiceToBeChecked->id;
                            $invoicePayment->amount = $amount;
                            $invoicePayment->type_id = $type;
                            $invoicePayment->date_paid = $dateInput;

                            $invoicePayment->save();

                            Log::info('Betaling van ' . $amount . ' toegevoegd via twinfield voor factuur ' . $invoiceToBeChecked->number);
                            array_push($messages, 'Betaling van €' . $amount . ' toegevoegd via Twinfield voor factuur ' . $invoiceToBeChecked->number . '.');
                        }
                    }
                };
            }
        }

        if(count($messages) == 0){
            array_push($messages, 'Geen betalingen gevonden.');
        }

        return implode(';', $messages);
    }

    public function readBrowseDefinition(BrowseDataApiConnector $browseDataApiConnector){

        // Code 020 = Transaction list
        // Code 100 = Customer transactionsPer
        try {
//            $browseDefinitions = $browseDataApiConnector->getBrowseDefinition('020');
//            $browseDefinitions = $browseDataApiConnector->getBrowseDefinition('100');
            $browseDefinitions = $browseDataApiConnector->getBrowseFields();
        } catch (PhpTwinfieldException $e) {
            Log::error($e->getMessage());
            return $e->getMessage() ? $e->getMessage() : 'Er is een fout opgetreden.';
        }
        dd($browseDefinitions); die();
    }

}