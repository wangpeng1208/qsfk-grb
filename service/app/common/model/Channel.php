<?php

namespace app\common\model;

use think\Exception;

class Channel extends BaseModel
{

  public function orders()
  {
    return $this->hasMany('Order', 'channel_id');
  }
  public function activeOrders()
  {
    return $this->hasMany('Order', 'channel_id')->where('status', 1);
  }

  public function accounts()
  {
    return $this->hasMany('ChannelAccount', 'channel_id');
  }

  public function paytypes()
  {
    return $this->belongsTo('PayType', 'paytype');
  }

  public function getTypeTextAttr($value, $data)
  {
    $type = [0 => '通用', 1 => '手机', 2 => '电脑', 3 => '通用'];
    return $type[$data['is_available']];
  }

  public static function onAfterInsert(\think\Model $model): void
  {
    if (empty($model->getData('sort'))) {
      $model->where('id', $model->id)->update(['sort' => $model->id]);
    }
  }

}
