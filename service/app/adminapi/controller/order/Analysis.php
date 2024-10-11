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

class Analysis extends Base
{

    /**
     * 通道分析
     */
    public function channel(OrderModel $model)
    {

        $where  = $this->request->params([
            ['username', ''],
            ['channel_id', ''],
            ['paytype', ''],
            ['status', ''],
            ['date_range', ''],
        ]);
        $statis = [];
        $model->withSearch($where[0], $where[1])
            ->order('id')
            ->chunk(500, function ($orders) use (&$statis) {
                foreach ($orders as $item) {
                    if (!isset($statis[$item->channel_id])) {
                        $statis[$item->channel_id]["channel_id"]         = $item->channel_id;
                        $statis[$item->channel_id]["title"]              = $item->channel->title;
                        $statis[$item->channel_id]["count"]              = 0;
                        $statis[$item->channel_id]["paid"]               = 0;
                        $statis[$item->channel_id]["unpaid"]             = 0;
                        $statis[$item->channel_id]["sum_money"]          = 0;
                        $statis[$item->channel_id]["sum_platform_money"] = 0;
                    }
                    $statis[$item->channel_id]["count"]++;
                    if ($item->status == 1) {
                        $statis[$item->channel_id]["paid"]++;
                        $statis[$item->channel_id]["sum_money"] = bcadd($statis[$item->channel_id]["sum_money"], $item->total_price, 3);

                    } else {
                        $statis[$item->channel_id]["unpaid"]++;
                        $statis[$item->channel_id]["sum_money"] += $item->total_price;
                    }

                }
            });

        $counts["channel_id"] = "合计";
        $counts["title"]      = "共" . count($statis) . "个渠道";
        $counts["count"]      = array_sum(array_column($statis, "count"));
        $counts["paid"]       = array_sum(array_column($statis, "paid"));
        $counts["unpaid"]     = array_sum(array_column($statis, "unpaid"));
        $counts["sum_money"]  = array_reduce(array_column($statis, "sum_money"), [$this, 'bcadd_array'], 0);

        array_unshift($statis, $counts);
        $this->success("获取成功", [
            "list"  => $statis,
            "total" => count($statis) - 1,
        ]);
    }

    private function bcadd_array($carry, $item)
    {
        return bcadd($carry, $item, 2);
    }
}
