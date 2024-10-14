<?php

namespace app\adminapi\validate\goods;

use taoser\Validate;

class CategoryValidate extends Validate
{
    protected $rule = [
        'id'   => 'require',
        'name' => 'require|checkWordfilter',
    ];

    protected $message = [
        'id.require'   => 'id不能为空',
        'name.require' => '分类名不能为空',
    ];

    protected function checkWordfilter($value, $rule, $data)
    {

        $check_name = check_wordfilter($value);
        if ($check_name) {
            return '包含违禁词' . $check_name;
        } else {
            return true;
        }
    }

    // edit
    public function sceneEdit()
    {
        return $this->only(['id', 'name']);
    }
    // add
    public function sceneAdd()
    {
        return $this->only(['name']);
    }

}