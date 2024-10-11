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

namespace app\adminapi\validate\order;

use app\adminapi\validate\Base;

class OrderBlacklistValidate extends Base
{
    protected $rule = [
        'id'   => 'require',
        'type'  => 'require',
        'value' => 'require',
    ];

    protected $message = [
        'id.require'    => 'ID',
        'type.require'  => '类型',
        'value.require' => '屏蔽字段',
    ];

    protected $scene = [
        'add' => ['type', 'value'],
        'edit' => ['id', 'type', 'value'],
    ];
}