<?php

namespace app\adminapi\validate;

use taoser\Validate;

class LoginValidate extends Validate
{
    protected $rule = [
        'username' => 'require',
        'password' => 'require',
    ];

    protected $message = [
        'username.require' => '请输入账号',
        'password.require' => '请输入密码',
    ];

    protected $scene = [
        'login' => ['username', 'password'],
    ];
}