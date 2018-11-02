<?php

namespace App\Eco\Order;

use App\Eco\Product\Product;
use Illuminate\Database\Eloquent\Model;
use Venturecraft\Revisionable\RevisionableTrait;

class OrderProduct extends Model
{
    use RevisionableTrait;

    protected $table = 'order_product';
    /**
     * The attributes that are not mass assignable.
     *
     * @var array
     */
    protected $guarded
        = [
            'id'
        ];

    protected $appends
        = [
            'total_price_incl_vat_and_reduction',
            'total_price_ex_vat_incl_reduction',
            'total_price_incl_vat_and_reduction_per_year',
            'total_price_incl_vat_and_reduction_for_period',
            'is_one_time_and_paid_product',
        ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class)->withoutGlobalScope('is_not_one_time');
    }

    public function getTotalPriceInclVatAndReductionAttribute()
    {
        $price = 0;

        $price += ($this->amount
            * $this->product->price_incl_vat);

        if ($this->percentage_reduction) {
            if ($this->percentage_reduction >= 100) {
                return 0;
            }
            $price = ($price * ((100 - $this->percentage_reduction)
                    / 100));
        }

        if ($this->amount_reduction) {
            $price -= $this->amount_reduction;
        }

        return $price;

    }

    public function getTotalPriceExVatInclReductionAttribute()
    {
        $price = 0;

        if(!$this->product->current_price) return 0;

        $price += ($this->amount
            * $this->product->current_price->price);

        if ($this->percentage_reduction) {
            if ($this->percentage_reduction >= 100) {
                return 0;
            }
            $price = ($price * ((100 - $this->percentage_reduction)
                    / 100));
        }

        if ($this->amount_reduction) {
            $price -= $this->amount_reduction;
        }

        return $price;

    }

    public function getTotalPriceInclVatAndReductionPerYearAttribute()
    {
        switch ($this->product->invoice_frequency_id){
            case 'monthly':
                return ($this->total_price_incl_vat_and_reduction * 12);
            case 'quarterly':
                return ($this->total_price_incl_vat_and_reduction * 4);
            case 'half-year':
                return ($this->total_price_incl_vat_and_reduction * 2);
            default:
                return $this->total_price_incl_vat_and_reduction;
        }
    }

    public function getTotalPriceInclVatAndReductionForPeriodAttribute()
    {
        switch ($this->order->collection_frequency_id) {
            case 'monthly':
                return ($this->total_price_incl_vat_and_reduction_per_year / 12);
            case 'quarterly':
                return ($this->total_price_incl_vat_and_reduction_per_year / 4);
            case 'half-year':
                return ($this->total_price_incl_vat_and_reduction_per_year / 2);
            default:
                return $this->total_price_incl_vat_and_reduction_per_year;
        }
    }

    public function getIsOneTimeAndPaidProductAttribute(){
        if($this->product->duration_id === 'none' && $this->date_last_invoice){
            return true;
        }
        else{
            return false;
        }
    }
}
