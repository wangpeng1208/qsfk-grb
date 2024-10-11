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

class GoodsCategory extends BaseModel
{

  public function goods()
  {
    return $this->hasMany('Goods', 'cate_id');
  }

  public function coupons()
  {
    return $this->hasMany('GoodsCoupon', 'cate_id');
  }

  public function searchNameAttr($query, $value, $data)
  {
    $query->where('name', 'like', '%' . $value . '%');
  }
  public function searchStatusAttr($query, $value, $data)
  {
    if ($value != '') {
      $query->where('status', $value);
    }
  }

  public function getCountAttr()
  {
    $goods = $this->goods()->select();
    $i     = 0;
    foreach (collect($goods) as $good) {
      if ($good->status == 0) {
        continue;
      }
      $i++;
    }
    return $i;
  }

}
