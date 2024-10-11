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

namespace app\service\pay;

use support\Container;
use support\Cache;
use app\common\model\OrderMaster;
use app\common\model\ChannelAccount;

class PayService
{
    // 实例化支付渠道
    public function invoke($code)
    {
        $class = "\\app\\home\\collection\\" . $code;
        return Container::get($class);
    }

    // 加载订单
    public function loadOrder($trade_no)
    {
        if (empty($trade_no)) {
            throw new \Exception("订单号不能为空");
        }
        $order_master = OrderMaster::where("trade_no", $trade_no)->find();
        if (!$order_master) {
            throw new \Exception("不存在该订单号！");
        }
        $order = $order_master->loadModel;
        if (!$order) {
            throw new \Exception("不存在该订单！");
        }
        $channel = $order->channel;
        if (!$channel) {
            throw new \Exception("不存在该支付渠道！");
        }
        $account = $order->channelAccount;
        if (!$account) {
            throw new \Exception("不存在支付渠道：" . $channel->title . "的账号！");
        }
        return $order;
    }

    // 订单标题
    public function orderTitle($order)
    {
        switch (conf("order_title_type")) {
            case 0:
                return $order->goods_name;
            case 1:
                return $order->trade_no;
            case 2:
                return conf("order_title_profix") . $order->trade_no;
            case 3:
                return conf("order_title_str");
            default:
                return $order->goods_name;
        }
    }

    // 支付
    public function pay($order, $trade_no, $total_price)
    {

        // 记录订单号缓存，方便回调时查询 ;15分钟;
        // todo 前台打开订单查询页面返回一条请求是否存在该订单号，有的话直接填入订单号
        Cache::set("order_" . $trade_no, request()->ip(), 60 * 15);
        $title = $this->orderTitle($order);

        if ($order->channelAccount->status !== 1) {
            return json('该支付渠道账号已关闭！');
        }
        $channel = $this->invoke($order->channel->code);
        // 对应的支付渠道的支付方法
        return $channel->pay($order->trade_no, $title, $total_price);
    }

    // 退款
    public function refund($order)
    {
        $channel = $this->invoke($order->channel->code);
        // 对应的支付渠道的支付方法
        return $channel->refund($order);
    }

    // 回调
    public function notify($request, $account_id)
    {
        if (isset($request['data'])) {
            $request = json_decode($request['data'], true);
        }
        try {
            if (isset($request['out_trade_no'])) {
                $order   = $this->loadOrder($request['out_trade_no']);
                $channel = $this->invoke($order->channel->code);
            } else if (!empty($account_id)) {
                // 通过渠道查找 通道码
                $account = ChannelAccount::where('status', 1)->findOrFail($account_id);
                $channel = $this->invoke($account->channel->code);
            } else {
                throw new \Exception("缺少参数!");
            }
            // 对应的支付渠道的支付方法
            return $channel->notify($request, $account_id);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

}
