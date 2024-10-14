<?php

namespace app\adminapi\controller\config;

use app\adminapi\controller\Base;

class Config extends Base
{
    /**
     * notes 获取配置
     * @auth true
     */
    public function getConfig()
    {
        $field = inputs('field/a', []);
        $data  = [];
        foreach ($field as $value) {
            // 敏感信息 留空
            if($value == 'email_pass'){
                $data[$value] = '******';
                continue;
            }
            $data[$value] = conf($value);
        }
        return $this->success('获取成功', $data);
    }

    /**
     * @notes 编辑配置
     * @auth true
     */
    public function editConfig()
    {
        $data = inputs('data/a', []);
        foreach ($data as $key => $value) {
            conf($key, $value);
        }
        return $this->success('编辑成功');
    }

}