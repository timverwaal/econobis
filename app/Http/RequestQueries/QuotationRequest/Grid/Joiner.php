<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 27-10-2017
 * Time: 11:15
 */

namespace App\Http\RequestQueries\QuotationRequest\Grid;


use App\Helpers\RequestQuery\RequestJoiner;

class Joiner extends RequestJoiner
{

    protected function applyOrganisationJoin($query)
    {
        $query->join('organisations', 'quotation_requests.organisation_id', '=', 'organisations.id');
    }

    protected function applyContactJoin($query)
    {
        $query->join('opportunities', 'quotation_requests.opportunity_id', '=', 'opportunities.id');
        $query->join('contacts', 'opportunities.contact_id', '=', 'contacts.id');
    }

    protected function applyAddressJoin($query)
    {
        $query->join('opportunities AS opportunities1', 'quotation_requests.opportunity_id', '=', 'opportunities1.id');
        $query->join('intakes',  'opportunities1.intake_id', '=', 'intakes.id');
        $query->join('addresses',  'intakes.address_id', '=', 'addresses.id');
    }

    protected function applyMeasureJoin($query)
    {
        $query->join('opportunities AS opportunities2', 'quotation_requests.opportunity_id', '=', 'opportunities2.id');
        $query->join('measures', 'opportunities2.measure_id', '=', 'measures.id');
    }
}