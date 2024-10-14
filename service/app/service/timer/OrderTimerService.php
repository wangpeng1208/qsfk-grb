<?php

namespace app\service\timer;

use Workerman\Lib\Timer;
use app\service\order\OrderService;

class OrderTimerService
{
    /**
     * 订单定时关闭
     * @param string $trade_no 外部单号
     * @param int $time 延迟时间
     */
    public function closeOrder($trade_no)
    {
        $order_service    = new OrderService();
        $order_close_time = conf("order_auto_close_time") * 60;
        Timer::add($order_close_time, function () use ($order_service, $trade_no) {
            // 检查订单是否已经付款
            if (!$order_service->orderStatus($trade_no)) {
                // 如果没有付款，关闭订单
                $order_service->closeOrder($trade_no);
            }
        }, [], false);
    }
}
