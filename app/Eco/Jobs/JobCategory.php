<?php

namespace App\Eco\Jobs;

use JosKolenberg\Enum\EnumWithIdAndName;

class JobCategory extends EnumWithIdAndName
{
    static $all;

    protected static function seed()
    {
        return [
            new static('email', 'Email'),
            new static('participant', 'Deelnemer rapportage'),
            new static('revenue', 'Opbrengst rapportage'),
            new static('create-invoice', "Maken nota's"),
            new static('create-payment-invoice', 'Maken uitkeringsnota\'s'),
            new static('sent-invoice', 'Versturen nota'),
            new static('sent-invoice-reminder', 'Versturen herinnering nota'),
        ];

    }
}