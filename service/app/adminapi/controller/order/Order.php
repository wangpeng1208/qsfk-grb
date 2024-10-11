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

namespace app\adminapi\controller\order;

use app\adminapi\controller\Base;
use app\common\model\Order as OrderModel;
use app\service\order\OrderService;
use app\common\model\OrderCard as OrderCardModel;
use app\service\goods\GoodsService;

class Order extends Base
{
    /**
     * @notes 订单列表
     * @auth true
     */
    public function list(OrderModel $model)
    {
        $where = $this->request->params([
            ['date_type', ''],
            ['contact', ''],
            ['trade_no', ''],
            ['transaction_id', ''],
            ['channel_id', ''],
            ['paytype', ''],
            ['status', ''],
            ['is_freeze', ''],
            ['date_range', ''],
            ['card', ''],
            ['goods_id', ''],
        ]);
        $res   = $model->with(['channel'])->withSearch($where[0], $where[1])->order("id desc")->paginate($this->limit)->each(function ($item) {
            $item->cards_count = $item->cards()->count();
        });
        $this->success('获取成功', [
            'list'  => $res->items(),
            'total' => $res->total(),
        ]);
    }

    /**
     * @notes 一键清空无效订单
     */
    public function clear()
    {
        OrderModel::where(["status" => 2])->delete();
        $this->success("清空已关闭订单成功！");
    }

    /**
     * @notes 订单删除
     * @auth true
     */
    public function del()
    {
        $id  = inputs('id/d', 0);
        $res = OrderModel::where(["id" => $id])->delete();
        return $res ? $this->success("删除成功！") : $this->error("删除失败！");
    }

    /**
     * @notes 批量删除
     * @auth false
     */
    public function delBatch()
    {
        $ids = inputs("ids/a", []);
        if (empty($ids)) {
            $this->error("请选择要删除的订单！");
        }
        $res = OrderModel::whereIn("id", $ids)->delete();
        return $res ? $this->success("删除成功！") : $this->error("删除失败！");
    }

    /**
     * 查看卡密
     * @auth true
     */
    public function card()
    {
        $id    = inputs("id/d", 0) ?: $this->error("参数错误！");
        $order = OrderModel::where(['id' => $id])->findOrFail();
        (new GoodsService())->sendOut($order->trade_no);

        $card = OrderCardModel::where(["order_id" => $order->id])->selectOrFail();
        $data = [
            "trade_no" => $order->trade_no,
            "card"     => $card,
        ];
        $this->success('获取成功', $data);
    }

    /**
     * @notes 后台补单
     * @auth true
     */
    public function notify()
    {
        $id    = inputs("id/d", 0);
        $order = OrderModel::findOrFail($id);
        if ($order->status != 0) {
            $this->error("该订单不是未支付状态！");
        }
        $order = (new OrderService())->complete($order);
        $this->success("补单成功", $order);
    }

    /**
     * @notes 订单冻结
     * @auth true
     */
    public function freeze()
    {
        $id    = inputs("id/d", 0);
        $order = OrderModel::where(["id" => $id, "status" => 1])->findOrFail();

        $order->is_freeze = $order->is_freeze == 1 ? 0 : 1;
        $order->save();
        $this->success("更新成功！", $order);
    }
}
