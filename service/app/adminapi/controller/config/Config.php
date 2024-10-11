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