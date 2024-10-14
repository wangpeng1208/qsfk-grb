<?php

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
