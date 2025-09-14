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
    return $this->goods()->where('status',1)->count();
  }

  public static function onAfterInsert(\think\Model $model): void
  {
    if (empty($model->getData('sort'))) {
      $model->where('id', $model->id)->update(['sort' => $model->id]);
    }
  }

}
