<?php

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
