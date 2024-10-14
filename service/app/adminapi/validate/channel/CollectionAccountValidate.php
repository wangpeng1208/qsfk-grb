<?php

namespace app\adminapi\validate\channel;

use taoser\Validate;

class CollectionAccountValidate extends Validate
{
    protected $rule = [
        'name'  => 'require',
        'params' => 'require',
    ];
    protected $message = [
        'title.require' => '接口名称不能为空',
        'params.unique' => '账号资料不能为空',

    ];
}