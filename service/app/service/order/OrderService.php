<?php

namespace app\service\order;

use app\common\model\Order;
use app\service\goods\GoodsService;

/**
 * service 订单服务
 *
 */
class OrderService
{

    /**
     * 完成订单
     * @param Order $order
     * @return array
     */
    public function complete(&$order)
    {
        if (empty($order)) {
            throw new \Exception("订单不存在");
        }
        if ($order->status == 1) {
            throw new \Exception("订单已支付");
        }
        $order->finally_money = $order->total_product_price;
        $order->status        = 1;
        $order->success_at    = time();
        $order->save();
        // 自动发货
        (new GoodsService())->sendOut($order->trade_no);
        return $order->toArray();
    }

    /**
     * 查找
     */
    public function findOrder($trade_no)
    {
        $order = Order::where(['trade_no' => $trade_no])->find();
        if (!$order) {
            throw new \Exception("订单不存在");
        }
        return $order;
    }

    /**
     * 获取订单状态
     */
    public function orderStatus($trade_no)
    {
        $order = $this->findOrder($trade_no);
        return $order->status;
    }

    /**
     * 关闭订单
     * Timeer 计时关闭订单
     * @param $trade_no
     */
    public function closeOrder($trade_no)
    {
        $order = $this->findOrder($trade_no);
        if ($order->status == 0) {
            $order->status = 2;
            $order->save();
        }
    }
}
