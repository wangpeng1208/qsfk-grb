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

namespace app\home\collection\interfaces;

interface CollectionInterface
{

    /**
     * 订单支付
     * @param $trade_no 结算订单
     * @param $subject  商品名称
     * @param $totalAmount 金额
     * @return mixed
     */
    public function pay($trade_no, $subject, $totalAmount);

    /**
     * 支付异步回调通知
     * @param $request 请求参数
     * @param $account_id 支付账号通道ID
     * @return mixed
     */
    public function notify($request, $account_id);
}