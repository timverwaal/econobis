<?php

namespace App\Http\Resources\Order;

use App\Http\Resources\Product\FullProduct;
use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Support\Carbon;

class FullOrderProduct extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     *
     * @return array
     */
    public function toArray($request)
    {
        $period = false;

        if($this->product->duration_id !== 'none') {
            if($this->date_last_invoice){
                $start = $this->date_last_invoice;
                $end = $this->order->addDurationToDate(Carbon::parse($this->date_last_invoice));
            }
            else{
                $start = $this->date_start;
                $end = $this->order->addDurationToDate(Carbon::parse($this->date_start));
            }
            $period = Carbon::parse($start)->formatLocalized('%e %B %Y') . ' t/m ' . Carbon::parse($end)->subDay()->formatLocalized('%e %B %Y');
        }

        return
            [
                'id' => $this->id,
                'description' => $this->description,
                'amount' => $this->amount,
                'amountReduction' => $this->amount_reduction,
                'percentageReduction' => $this->percentage_reduction,
                'dateStart' => $this->date_start,
                'dateEnd' => $this->date_end,

                'totalPriceInclVatAndReduction' => $this->total_price_incl_vat_and_reduction,
                'totalPriceInclVatAndReductionPerYear' => $this->total_price_incl_vat_and_reduction_per_year,

                'orderId' => $this->order_id,
                'order' => FullOrder::make($this->whenLoaded('order')),

                'productId' => $this->product_id,
                'product' => FullProduct::make($this->whenLoaded('product')),
                'isOneTimeAndPaidProduct' => $this->is_one_time_and_paid_product,
                'period' => $period,
                'dateLastInvoice' => $this->date_last_invoice
            ];
    }
}
