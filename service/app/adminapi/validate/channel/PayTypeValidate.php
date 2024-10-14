<?php

namespace app\adminapi\validate\channel;

use taoser\Validate;

class PayTypeValidate extends Validate
{
  protected $rule = [
    'name' => 'require',
    'ico' => 'require',
  ];

  protected $message = [
    'name.require' => '名称不能为空',
    'ico.require' => '图标不能为空',
  ];

}