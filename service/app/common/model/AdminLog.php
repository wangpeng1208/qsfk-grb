<?php

namespace app\common\model;

use think\Model;


class AdminLog extends Model
{

  protected $createTime = 'create_at';
  protected $updateTime = false;

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