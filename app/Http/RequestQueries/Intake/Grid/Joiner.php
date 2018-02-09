<?php
/**
 * Created by PhpStorm.
 * User: Beheerder
 * Date: 27-10-2017
 * Time: 11:15
 */

namespace App\Http\RequestQueries\Intake\Grid;


use App\Helpers\RequestQuery\RequestJoiner;

class Joiner extends RequestJoiner
{
    protected function applyContactJoin($query)
    {
        $query->join('addresses', 'intakes.address_id', '=', 'addresses.id');
        $query->join('contacts', 'intakes.contact_id', '=', 'contacts.id');
    }

    protected function applyAddressJoin($query)
    {
        $query->join('addresses', 'intakes.address_id', '=', 'addresses.id');
    }

    protected function applySourceJoin($query)
    {
        $query->join('intake_source', 'intakes.id', '=', 'intake_source.intake_id');
    }

    protected function applyMeasureRequestedJoin($query)
    {
        $query->join('intake_measure_requested', 'intake.id', '=', 'intake_measure_requested.intake');
    }


}