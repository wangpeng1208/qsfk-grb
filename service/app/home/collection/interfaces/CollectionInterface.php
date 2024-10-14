<?php

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