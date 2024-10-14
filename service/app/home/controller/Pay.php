<?php

namespace app\home\controller;

use app\service\pay\PayService;
use app\service\home\OrderService;
use app\common\model\Channel;

class Pay extends Base
{
    // 获取支付方式 按pc还是h5
    public function payChannel()
    {
        $platform = Channel::where(["status" => 1])->field(['id', 'title', 'is_available', 'paytype', 'show_name'])->order("sort desc")->select()->filter(
            function ($item) {
                $item->channel_id   = $item->id;
                $item->product_name = get_paytype($item->paytype)->name ?? ''; // 支付类型名
                $item->type_text = $item->type_text;
                $item->ico  = get_paytype($item->paytype)->ico ?? '';
                $item->logo = get_paytype($item->paytype)->logo ?? '';
                unset($item->id);
                return true;
            }
        );
        $res      = $platform->toArray();
        $result   = [];

        // 创建一个数组来存储已经存在的 channel_id
        $channel_ids = [];

        // 遍历 $res 数组
        foreach ($res as $item) {
            // 如果这个 channel_id 还没有出现过
            if (!in_array($item['channel_id'], $channel_ids)) {
                // 将这个 channel_id 添加到 $channel_ids 数组中
                $channel_ids[] = $item['channel_id'];
                // 将这个 item 添加到结果数组中
                $result[] = $item;
            }
        }
        // 电脑Or手机
        foreach ($result as $key => $item) {
            if ($this->request->isMobile()) {
                if ($item["is_available"] == 2) {
                    unset($result[$key]);
                }
            } else {
                if (!$this->request->isMobile() && $item["is_available"] == 1) {
                    unset($result[$key]);
                }
            }
        }
        return $this->success("获取成功", $result);
    }

    // 订单生成
    public function payOrder(OrderService $orderService)
    {
        $data = $orderService->createOrder([
            'goods_id'      => inputs('goods_id/s', ''),
            'contact'       => inputs('contact/s', ''),
            'quantity'      => inputs('quantity/d', 0),
            'coupon_code'   => inputs('coupon_code/s', ''),
            'card_password' => inputs('pwdforsearch/s', ''),
            'pid'           => inputs('pid/s', ''),
        ]);
        $this->success("订单创建成功！请及时支付！", $data);
    }

    // 发起支付
    public function pay(PayService $payService)
    {
        $trade_no = inputs("trade_no/s", "");
        try {
            $order = $payService->loadOrder($trade_no);
            switch ($order->status) {
                case 1:
                    return view("pay/pay", [
                        'msg' => "订单已支付，请勿重复支付！",
                    ]);

                case 2:
                    return view("pay/pay", [
                        'msg' => "订单已超时关闭，请重新下单！",
                    ]);

                case 3:
                    return view("pay/pay", [
                        'msg' => "订单已退款！",
                    ]);
            }
        } catch (\Exception $e) {
            return view("pay/pay", [
                'msg' => $e->getMessage(),
            ]);
        }


        $total_price = round($order->total_price, 2);

        return $payService->pay($order, $trade_no, $total_price);
    }

    /**
     * 支付回调方法
     * @return void
     */
    public function notify($requests, $id = '')
    {
        $payService = new PayService();
        $request    = request()->all();
        return $payService->notify($request, $id);
    }
}
