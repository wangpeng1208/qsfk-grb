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

namespace app\adminapi\controller;

use app\common\model\AdminUser;
use app\common\util\TokenAuth;
use app\service\common\Api;
use app\common\exception\HttpResponseException;

class Base extends Api
{
    // 用户信息
    protected $user;
    // 每页显示条数
    protected $limit;
    // 不需要登录的方法
    protected $noLoginAction = [];
    // 需要记录权限的方法
    protected $permissions = [];
    // 需要记录操作日志的方法
    protected $logs = [];

    public function __construct()
    {
        parent::__construct();
        $this->checkLogin();
        $this->setList();
    }

    /**
     * 检查登录
     */
    protected function checkLogin()
    {
        // 如果是不需要登录的方法，直接通过
        if (in_array(request()->action, $this->noLoginAction)) {
            return true;
        }
        // 检查token
        try {
            $user = TokenAuth::parseToken('admin');
        } catch (\Exception $e) {
            throw new HttpResponseException(401, ['msg' => $e->getMessage()]);
        }
        // 开始检测用户权限
        $this->user = AdminUser::find($user['id']);
        // 设置request的user , 用于日志记录
        request()->user = $this->user;
        // 检查节点权限
        $this->checkAuth();
    }

    /**
     * 检查权限
     */
    protected function checkAuth()
    {
        // 如果$this->user->roles包含id=1则是超级管理员，直接通过
        if ($this->user->roles->where('role_id', 1)->count()) {
            return true;
        }
        $action     = request()->action;
        $controller = request()->controller;
        $reflection = new \ReflectionMethod($controller, $action);
        $docComment = $reflection->getDocComment();
        // 注释@auth true则加入权限验证
        if (strpos($docComment, '@auth true')) {
            // if (in_array($action, $this->permissions)) {
            $path = request()->path();
            $auth = new \app\common\util\RoleAuth();
            if (!$auth->check($path, $this->user)) {
                throw new HttpResponseException(403, ['msg' => '没有权限！']);
            }
            // }
        }
    }

    /**
     * 列表分页设置
     */
    protected function setList()
    {
        $this->limit = $this->request->post('limit', 20);
    }

}
