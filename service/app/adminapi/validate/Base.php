<?php

namespace app\adminapi\validate;

use taoser\Validate;

class Base extends Validate
{
    public function data($scene = null, array $validateData = [])
    {
        $params = request()->post();
        $params = array_merge($params, $validateData);
        //场景
        if ($scene == null) {
            throw new \think\Exception('场景不能为空');
        } 
        $this->scene($scene)->failException(true)->check($params);
        return $params;
    }
}