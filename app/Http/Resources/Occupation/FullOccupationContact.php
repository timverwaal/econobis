<?php

namespace App\Http\Resources\Occupation;

use App\Http\Resources\Contact\FullContact;
use Illuminate\Http\Resources\Json\Resource;

class FullOccupationContact extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->ocid,
            'primaryContact' => FullContact::make($this->whenLoaded('primaryContact')),
            'contact' => FullContact::make($this->whenLoaded('contact')),
            'occupation' => FullOccupation::make($this->whenLoaded('occupation')),
            'startDate' => $this->start_date,
            'endDate' => $this->end_date,
            'primary' => $this->primary,
        ];
    }
}
