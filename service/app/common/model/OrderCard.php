<?php

namespace app\common\model;

class OrderCard extends BaseModel
{
    public function order()
    {
        return $this->belongsTo('Order', 'order_id');
    }
}
