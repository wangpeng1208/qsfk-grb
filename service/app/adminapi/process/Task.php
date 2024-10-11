<?php

namespace adminapi\process;

use Workerman\Crontab\Crontab;
use app\common\model\SystemCrontab;
use app\common\model\SystemCrontabLog;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

class Task
{
    public function onWorkerStart()
    {

        $taskList = SystemCrontab::where('status', 1)->select();
        foreach (collect($taskList) as $item) {
            new Crontab($item->rule, function () use ($item) {
                $this->run($item->id);
            });
        }
    }

    private function run($id)
    {
        $info = SystemCrontab::where('status', 1)->find($id);
        if ($info) {
            $data['crontab_id'] = $info->id;
            $data['name']       = $info->name;
            $data['target']     = $info->target;
            $data['parameter']  = $info->parameter;
            switch ($info->type) {
                case 1:
                    // URL任务GET
                    $httpClient = new Client([
                        'timeout' => 5,
                        'verify'  => false,
                    ]);
                    try {
                        $httpClient->request('GET', $info->target);
                        $data['status'] = 1;
                        SystemCrontabLog::create($data);
                        return true;
                    } catch (GuzzleException $e) {
                        $data['status']         = 2;
                        $data['exception_info'] = $e->getMessage();
                        SystemCrontabLog::create($data);
                        return false;
                    }
                case 2:
                    // URL任务POST
                    $httpClient = new Client([
                        'timeout' => 5,
                        'verify'  => false,
                    ]);
                    try {
                        $res = $httpClient->request('POST', $info->target, [
                            'form_params' => json_decode($info->parameter ?? '', true)
                        ]);

                        $data['status']         = 1;
                        $data['exception_info'] = $res->getBody();
                        SystemCrontabLog::create($data);
                        return true;
                    } catch (GuzzleException $e) {
                        $data['status']         = 2;
                        $data['exception_info'] = $e->getMessage();
                        SystemCrontabLog::create($data);
                        return false;
                    }
                case 3:
                    // 脚本任务
                    
                default:
                    return false;
            }
        }
    }
}