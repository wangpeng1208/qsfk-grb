<?php

namespace app\adminapi\validate\permission;

use taoser\Validate;

class MenuValidate extends Validate
{
    protected $rule = [
        'title'     => 'require',
        'path'      => 'require',
        'component' => 'require',
        'icon'      => 'require',
        'orderNo'   => 'require',
        'perms'     => 'require',
        'type'      => 'require',
        'redirect'  => 'requireCallback:check_require',
    ];


    protected $message = [
        'title.require'            => '请输入菜单名称',
        'path.require'             => '请输入菜单路径',
        'component.require'        => '请输入菜单组件',
        'icon.require'             => '请输入菜单图标',
        'orderNo.require'          => '请输入菜单排序',
        'perms.require'            => '请输入菜单权限',
        'type.require'             => '请选择菜单类型',
        'redirect.requireCallback' => '顶级目录需要输入跳转路径',
    ];

    protected function check_require($value, $data)
    {
        if (empty($data['redirect']) && empty($data['pid'])) {
            return true;
        }
    }
   
    public function sceneMenu()
    {

        $this->only(['title', 'path', 'component', 'perms', 'type']);
    }

    public function sceneList()
    {
        $this->only(['title', 'path', 'icon', 'type', 'redirect']);
    }

    // Button
    public function sceneButton()
    {
        $this->only(['title', 'perms']);
    }
}