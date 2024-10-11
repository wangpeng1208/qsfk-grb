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

use think\Model;


class AdminLog extends Model
{

  protected $createTime = 'create_at';
  protected $updateTime = false;

  // username 
  public function searchUsernameAttr($query, $value, $data)
  {
    $query->where('username', '=', $value);
  }

  public function searchIpAttr($query, $value, $data)
  {
    $query->where('ip', '=', $value);
  }

  public function searchActionAttr($query, $value, $data)
  {
    $query->where('action', '=', $value);
  }

  public function searchDateRangeAttr($query, $value, $data)
  {
    if (empty(trim($value[0])) || empty(trim($value[1]))) {
      return;
    }
    if ($value[0] == $value[1]) {
      $query->whereTime('create_at', strtotime($value[0]));
      return;
    } 
    $query->whereBetweenTime('create_at', strtotime($value[0]), strtotime($value[1]));
  }
}