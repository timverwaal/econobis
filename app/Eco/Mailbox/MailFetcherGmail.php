<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 03-01-2018
 * Time: 17:01
 */

namespace App\Eco\Mailbox;


use App\Eco\Email\Email;
use App\Eco\Email\EmailAttachment;
use App\Eco\EmailAddress\EmailAddress;
use Carbon\Carbon;
use Dacastro4\LaravelGmail\Facade\LaravelGmail;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;
use Storage;

class MailFetcherGmail
{

    /**
     * @var Mailbox
     */
//    private $mailbox;
    private $fetchedEmails = [];

    public function __construct(Mailbox $mailbox)
    {
        $this->mailbox = $mailbox;

        $this->initStorageDir();
        $this->initGmailConfig();
    }

    public function fetchNew()
    {
        echo "Nieuwe test 2! <br />";
        echo "Mailbox: " . $this->mailbox->id . "<br />";

        $emails = LaravelGmail::message()->unread()->preload()->all();
        $dateTime = Carbon::now();

        foreach ( $emails as $email ) {
            echo "Nieuwe email! <br />";
            $this->fetchEmail($email->getId());
//            $email->markAsRead();
        }

        $this->mailbox->date_last_fetched = $dateTime;
//        $this->mailbox->imap_id_last_fetched = $imapIdLastFetched;
        $this->mailbox->save();

    }

    private function initGmailConfig()
    {
    }

    private function initStorageDir()
    {
        $storageDir = $this->getStorageDir();

        if (!is_dir($storageDir)) {
            mkdir($storageDir, 0777, true);
        }
    }

    /**
     * @return string
     */
    private function getStorageDir()
    {
        return $this->getStorageRootDir() . DIRECTORY_SEPARATOR . 'mailbox_' . $this->mailbox->id . DIRECTORY_SEPARATOR . 'inbox' ;
    }

    /**
     * @return string
     */
    private function getAttachmentDBName()
    {
        return 'mailbox_' . $this->mailbox->id . DIRECTORY_SEPARATOR . 'inbox' . DIRECTORY_SEPARATOR;
    }

    /**
     * @return string
     */
    private function getStorageRootDir()
    {
        return Storage::disk('mail_attachments')->getDriver()->getAdapter()->getPathPrefix();
    }

    private function fetchEmail($mailId)
    {
        $emailData = LaravelGmail::message()->get( $mailId );
        echo "Id: " . $emailData->getId() . "<br />";
//        echo "Labels :" . implode( "<br / >", $emailData->getLabels() );
        try {
            $dateSent = Carbon::parse( $emailData->getDate() ) ;
        } catch(\Exception $ex) {
            Log::error("GMAIL - Failed to retrieve date sent (" . $emailData->getDate() . ") from email (" . $mailId . ") in mailbox (" . $this->mailbox->id . "). Error: " . $ex->getMessage());
            echo "GMAIL - Failed to retrieve date sent from email: " . $ex->getMessage();
            die();
        }

        echo "So far so good! <br />";

        $textHtml = $emailData->getHtmlBody();
        $textHtml = $textHtml?: '';

        // when encoding isn't UTF-8 encode texthtml to utf8.
        $currentEncodingTextHtml= mb_detect_encoding( $textHtml, 'UTF-8', true);
        if(false === $currentEncodingTextHtml){
            $textHtml = utf8_encode($textHtml);
        }

        if(strlen($textHtml) > 250000){
            $textHtml = substr($emailData->textHtml, 0, 250000);
            $textHtml .= '<p>Deze mail is langer dan 250.000 karakters en hierdoor ingekort.</p>';
        }

        $subject = $emailData->getSubject() ? $emailData->getSubject() : '';

        if(strlen($subject) > 250){
            $subject = substr($emailData->textHtml, 0, 249);
        }

//echo "DeliveredTo : " . $emailData->getDeliveredTo() . "<br / >";
//echo "To : <br / >";
//$emails = implode(", ", Arr::pluck($emailData->getTo(), 'email') );
//print_r($emails);
//echo "<br / >";
//echo "Cc : <br / >";
//$cc = implode(", ", Arr::pluck($emailData->getCc(), 'email') );
//print_r($cc);
//echo "<br / >";
//die();

        $email = new Email([
            'mailbox_id' => $this->mailbox->id,
            'from' => $emailData->getFromEmail(),
            'to' => Arr::pluck($emailData->getTo(), 'email'),
            'cc' => Arr::pluck($emailData->getCc(), 'email'),
            'bcc' => Arr::pluck($emailData->getBcc(), 'email'),
            'subject' => $subject,
            'html_body' => $textHtml,
            'date_sent' => $dateSent,
            'folder' => 'inbox',
            'imap_id' => 0,
            'message_id' => $mailId,
            'status' => 'unread'
        ]);
//        print_r($email); die();
        $email->save();

        //if from email exists in any of the email addresses make a pivot record.

        $this->addRelationToContacts($email);

        echo "Heeft bijlage(n): " . $emailData->hasAttachments() . "<br />";
        if($emailData->hasAttachments()){
            foreach ($emailData->getAttachments() as $attachment){
                echo "Email id: " . $email->id . "<br / >";
                echo "Storagename : " . $this->getStorageDir() . "<br / >";
                echo "Filename : " . $attachment->getFileName() . "<br / >";
//echo "Prefix name : " . $this->getAttachmentDBName() . "<br / >";
                $attachment->saveAttachmentTo($path = DIRECTORY_SEPARATOR . $this->getAttachmentDBName(), $filename = null, $disk = 'mail_attachments');
                $name = substr($attachment->getFileName(), strrpos($attachment->getFileName(), DIRECTORY_SEPARATOR) + 1);
                echo "Name: " . $name . "<br / >";
                $filename = $this->getAttachmentDBName() . $name;
                echo "Filename 2: " . $filename . "<br / >";
//echo $attachment;
                echo "Filename eigen: " . $filename . "<br / >";
                echo "Filename gmail: " . $attachment->getFileName() . "<br / >";

                $emailAttachment = new EmailAttachment([
                    'filename' => $filename,
                    'name' => $attachment->getFileName(),
                    'email_id' => $email->id,
                ]);
                $emailAttachment->save();

            }
        }

//
//        foreach ($emailData->getAttachments() as $attachment){
//            $name = substr($attachment->filePath, strrpos($attachment->filePath, DIRECTORY_SEPARATOR) + 1);
//
//            $filename = $this->getAttachmentDBName() . $name;
//
//            $emailAttachment = new EmailAttachment([
//                'filename' => $filename,
//                'name' => $attachment->name,
//                'email_id' => $email->id,
//            ]);
//            $emailAttachment->save();
//        }
//
//        $this->fetchedEmails[] = $email;
    }

    public function addRelationToContacts(Email $email){

        //soms niet koppelen
        $mailboxIgnores = $email->mailbox->mailboxIgnores;

        foreach ($mailboxIgnores as $ignore){
            switch ($ignore->type_id) {
                case 'e-mail':
                    if($ignore->value === $email->from){
                        return false;
                    }
                    break;
                case 'domain':
                    $domain = preg_replace( '!^.+?([^@]+)$!', '$1', $email->from);
                    if ($ignore->value === $domain) {
                        return false;
                    }
                    break;
            }
        }

        // Link contact from email to address
        if($email->mailbox->link_contact_from_email_to_address) {
            $emailAddressesIds = EmailAddress::where('email', $email->to)->pluck('contact_id')->toArray();
            // Link contact from email from address
        } else {
            $emailAddressesIds = EmailAddress::where('email', $email->from)->pluck('contact_id')->toArray();
        }

        //If contact has twice same emailaddress
        $uniqueEmailAddressesIds = array_unique($emailAddressesIds);

        $email->contacts()->attach($uniqueEmailAddressesIds);
    }

    public function getFetchedEmails()
    {
        return $this->fetchedEmails;
    }


}