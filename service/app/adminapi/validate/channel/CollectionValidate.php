<?php

namespace app\adminapi\validate\channel;

use taoser\Validate;

class CollectionValidate extends Validate
{

    protected $rule = [
        'title'          => 'require',
        'code'           => 'require',
        'show_name'      => 'require',
        'account_fields' => 'require',
    ];
    protected $message = [
        'title.require'          => '通道名称不能为空',
        'code.unique'            => '代码接口不能为空',
        'show_name.require'      => '显示名称不能为空',
        'account_fields.require' => '账号字段不能为空',
    ];
    public function sceneCollection()
    {
        return $this->only(['title', 'code', 'show_name', 'account_fields']);
    }

    public function sceneSettlement()
    {
        return $this->only(['title', 'code', 'account_fields']);
    }
}