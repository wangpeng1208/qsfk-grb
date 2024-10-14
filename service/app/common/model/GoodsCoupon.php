<?php

namespace app\common\model;

class GoodsCoupon extends BaseModel
{

  public function category()
  {
    return $this->belongsTo('GoodsCategory', 'cate_id');
  }

  public function goods()
  {
    return $this->belongsTo('Goods', 'goods_id');
  }

  public function searchCateIdAttr($query, $value, $data)
  {
    $query->where('cate_id', $value);
  }

  public function searchStatusAttr($query, $value, $data)
  {
    $query->where('status', $value);
  }

  protected function getStatusTextAttr($value, $data)
  {
    if ($data['status'] == 1 && $data['expire_at'] <= time()) {
      return '已过期';
    }
    $status = [
      0 => '使用中',
      1 => '未使用',
      2 => '已使用',
    ];
    return $status[$data['status']];
  }

  // 获取有效期
  protected function getExpireDayAttr($value, $data)
  {
    if ($data['status'] == 1) {
      if ($data['expire_at'] <= time()) {
        return '已过期';
      } else {
        return date('Y-m-d H:i:s', $data['expire_at']);
      }
    }
    if ($data['status'] == 2) {
      return '已使用';
    }
    if ($data['status'] == 0) {
      return '使用中';
    }
  }
}
