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
        'title.require'     => '请输入菜单名称',
        'path.require'      => '请输入菜单路径',
        'component.require' => '请输入菜单组件',
        'icon.require'      => '请输入菜单图标',
        'orderNo.require'   => '请输入菜单排序',
        'perms.require'     => '请输入菜单权限',
        'type.require'      => '请选择菜单类型',
        'redirect.requireCallback'  => '顶级目录需要输入跳转路径',
    ];

    protected function check_require($value,  $data)
    {
        if(empty($data['redirect']) && empty($data['pid'])){
           return true;
        }
    }
/* 
    // 验证权限方法是否存在
    private function checkPermsMethodExists($perms)
    {
        $parts   = explode('/', $perms);
        $method  = array_pop($parts);
        $project = array_shift($parts);
        $class   = 'app\\' . $project . '\\controller\\' . implode('\\', $parts);
        // $method _下滑线后面的字母转大写
        $method = preg_replace_callback('/_([a-zA-Z])/', function ($match) {
            return strtoupper($match[1]);
        }, $method);
        return method_exists($class, $method) ? true : false;
    }

    // 验证权限方法是否存在
    protected function checkPerms($value, $rule, $data)
    {
        // $perms 驼峰转 /,例如 adminChannelPayAdd 转换成 admin/channel/pay/add
        $perms = strtolower(preg_replace_callback('/([A-Z])/', function ($match) {
            return '/' . strtolower($match[1]);
        }, $value));
        //  验证perms方法是否存在 如admin/channel/pay/add是否存在
        if (empty($this->checkPermsMethodExists($perms))) {
            throw new HttpResponseException(200, ['msg' => '方法不存在。请确保控制器和方法存在，并按照规范填写权限字符']);
        } else {
            return true;
        }
    }
 */
    public function sceneMenu()
    {

        $this->only(['title', 'path', 'component', 'perms', 'type']);
    }

    public function sceneList()
    {
        $this->only([ 'title', 'path', 'icon', 'type', 'redirect']);
    }

    // Button
    public function sceneButton()
    {
        $this->only(['title', 'perms']);
    }
}