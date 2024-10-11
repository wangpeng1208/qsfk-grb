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

namespace app\service\order;

use think\facade\Db;
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
        Db::startTrans();
        try {
            $order_total_cost_price = 0;
            // 总收益 自己商品的订单
            $total_product_price = $order->total_product_price;
            $this->updateOrderStatus($order, $total_product_price, $order_total_cost_price);
            Db::commit();
        } catch (\Exception $e) {
            Db::rollback();
            throw new \Exception($e->getMessage());
        }
        // 自动发货
        (new GoodsService())->sendOut($order->trade_no);
        return $order->toArray();
    }

    /**
     * 更新订单状态
     * @param [type] $order 订单实例
     * @param [type] $finally_money 最终结算金额
     * @param [type] $proxy_finally_money 代理最终结算金额
     */
    public function updateOrderStatus($order, $finally_money, $proxy_finally_money)
    {
        $order->finally_money       = $finally_money;
        $order->proxy_finally_money = $proxy_finally_money;
        $order->status              = 1;
        $order->success_at          = time();
        $order->save();
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
