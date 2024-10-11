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

  public function channelStatus()
  {
    return $this->hasMany('UserChannel', 'channel_id');
  }

  public function userRates()
  {
    return $this->hasMany('UserRate', 'channel_id');
  }

  static function install($id)
  {
    return self::updateChannel($id, ['is_install' => 1]);
  }

  static function uninstall($id)
  {
    return self::updateChannel($id, ['status' => 0, 'is_install' => 0]);
  }

  private static function updateChannel($id, $data)
  {
    try {
      Channel::findOrFail($id)->update($data);
      return ['status' => true];
    } catch (Exception $e) {
      return ['status' => false, 'msg' => $e->getMessage()];
    }
  }
}
