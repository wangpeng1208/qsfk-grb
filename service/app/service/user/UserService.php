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

namespace app\service\user;

use app\common\util\TokenAuth;

/**
 * 公共用户服务层
 * class UserService
 * @package app\service\user
 */
class UserService
{

    /**
     * 创建token
     * @param $user
     * @return array
     */
    public function createToken($user, $type = 'merchant')
    {
        switch ($type) {
            case 'admin':
                $expire = 48;
                break;
            default:
                $expire = 24 * 365;
        }
        return [
            'access_token' => TokenAuth::createToken($user['id'], $type, $user, 3600 * $expire)['token']
        ];
    }
}
