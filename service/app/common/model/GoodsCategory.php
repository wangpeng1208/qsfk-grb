<?php

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
