<?php

namespace app\adminapi\controller;

use app\common\model\AdminUser;
use app\service\user\UserService;

class Login extends Base
{
    protected array $noLoginAction = ['login', 'getBackgroundImage'];

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
        $user->isEmpty() && throw new \Exception('账号不存在');
        password_verify($data['password'], $user->password) || throw new \Exception('密码错误');

        $result = (new UserService())->createToken(['id' => $user->id], 'admin');
        $this->success('登陆成功', $result);
    }

}