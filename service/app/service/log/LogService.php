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

namespace app\service\log;

use app\common\model\AdminLog;

/**
 * 操作日志服务
 * Class LogService
 * @package service
 */
class LogService
{
    
    protected $sence;

    // 设置场景
    public function sence($sence)
    {
        $this->sence = $sence;
        return $this;
    }

    // 写入日志
    public  function write(){
        switch ($this->sence) {
            case 'admin':
                $this->adminLog(...func_get_args());
                break;
            default:
                # code...
                break;
        }
    }
    
    // 管理员操作日志
    public  function adminLog($user, $params, $action = '行为', $content = "内容描述")
    {
        $data = [
            'ip'       => request()->ip(),
            'params'   => $params ?? '',
            'username' => $user->username,
            'action'   => $action,
            'content'  => $content
        ];
        AdminLog::create($data);
    }
}
