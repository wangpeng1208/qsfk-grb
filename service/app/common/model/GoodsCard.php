<?php

// +----------------------------------------------------------------------
// | 骑士发卡 [ 平顶山若拉网络科技有限公司，并保留所有权利 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2022-2025 https://www.qqss.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed 骑士软件 并不是自由软件，商业用途务必到官方购买正版授权, 以免引起不必要的法律纠纷.
// +----------------------------------------------------------------------
// | Author: 契约
// +----------------------------------------------------------------------

namespace app\common\model;

class GoodsCard extends BaseModel
{

  public function goods()
  {
    return $this->belongsTo('Goods', 'goods_id');
  }

  public function order_card()
  {
    return $this->belongsTo('OrderCard', 'card_id');
  }

  public function searchCateIdAttr($query, $value, $data)
  {
    $goods_ids = Goods::where('cate_id', $value)->column('id');
    $query->whereIn('goods_id', $goods_ids);
  }

  public function searchGoodsIdAttr($query, $value, $data)
  {
    $query->where('goods_id', $value);
  }

  public function searchStatusAttr($query, $value, $data)
  {
    $query->where('status', $value);
  }

  public function searchTradeNoAttr($query, $value, $data)
  {
    $query->hasWhere('order_card', function ($query) use ($value) {
      $query->where('trade_no', $value);
    });
  }

  public function searchNumberAttr($query, $value, $data)
  {
    $query->where('number', 'like', '%' . $value . '%');
  }

  public function searchDateRangeAttr($query, $value, $data)
  {
    if (empty($value) || empty($value[0]) || empty($value[1])) {
      return;
    }
    if ($value[0] == $value[1]) {
      $query->whereTime('sell_time', strtotime($value[0]), strtotime($value[1]));
      return;
    }
    $query->whereBetweenTime('sell_time', strtotime($value[0]), strtotime($value[1]));
  }

  protected function getStatusTextAttr($value, $data)
  {
    $status = [
      1 => '未售出',
      2 => '已售出',
    ];
    return $status[$data['status']];
  }

}
