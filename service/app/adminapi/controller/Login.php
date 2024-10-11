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
use app\service\user\UserService;
use GuzzleHttp\Client;

class Login extends Base
{
    protected $noLoginAction = ['login', 'getBackgroundImage'];

    // 登录背景图
    public function getBackgroundImage()
    {
        $data['url'] = conf('admin_login_bg');
        $this->success('获取成功', $data);
    }

    public function login()
    {
        // 管理员登陆
        $data     = $this->request->post();
        $validate = new \app\adminapi\validate\LoginValidate;
        $validate->failException(true)->check($data);
        $user = AdminUser::where('username', $data['username'])->findOrEmpty();
        if ($user->isEmpty()) {
            throw new \Exception('账号不存在');
        }
        if (!password_verify($data['password'], $user->password)) {
            throw new \Exception('密码错误');
        }

        $token = (new UserService())->createToken($user->toArray(), 'admin');
        $data  = array_merge($user->toArray(), $token);
        $this->success('登陆成功', $data);
    }

}