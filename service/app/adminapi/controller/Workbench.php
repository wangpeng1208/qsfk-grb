<?php

namespace app\adminapi\controller;

use app\common\model\Order;
use app\common\model\Channel;

class Workbench extends Base
{
    /**
     * 工作台基础数据展示
     * @auth false
     */
    public function basic()
    {
        $data          = [];
        $data['price'] = array_merge(['title' => '今日销售额'], $this->calculateData(Order::class, 'sum', 'total_price', 1));
        $data['order'] = array_merge(['title' => '今日订单数'], $this->calculateData(Order::class, 'count', null, 1));

        $this->success('success', $data);
    }

    private function calculateData($model, $method, $field = null, $status = null)
    {
        $today     = $model::whereTime('create_at', 'today');
        $yesterday = $model::whereTime('create_at', 'yesterday');
        $total     = $model::query();

        if ($status !== null) {
            $today     = $today->where('status', $status);
            $yesterday = $yesterday->where('status', $status);
            $total     = $total->where('status', $status);
        }

        $today     = $field ? $today->$method($field) : $today->$method();
        $yesterday = $field ? $yesterday->$method($field) : $yesterday->$method();
        $total     = $field ? $total->$method($field) : $total->$method();

        if ($today != 0 && $yesterday == 0) {
            $ratio = 100;
        } elseif ($today == 0 && $yesterday != 0) {
            $ratio = -100;
        } elseif ($today == 0 && $yesterday == 0) {
            $ratio = 0;
        } else {
            $ratio = round(($today - $yesterday) / $yesterday, 4) * 100;
        }

        return [
            'today'     => $today,
            'yesterday' => $yesterday,
            'total'     => $total,
            'ratio'     => $ratio
        ];
    }

    /**
     * 收款渠道数据
     * @auth false
     */
    public function channelCollectionOrderPriceSum()
    {
        $channels = Channel::where(['status' => 1])
            ->withSum('activeOrders', 'total_price')
            ->select();

        $data = [];
        foreach (collect($channels) as $key => $channel) {
            $data[$key]['value'] = $channel->active_orders_sum ?? 0;
            $data[$key]['name']  = $channel->title;
        }
        $this->success('success', $data);
    }

    /**
     * 订单收款统计数据
     * @input period 期间时长
     * @input unit 单位 day week month year
     * @auth false
     */
    public function orderStatisData()
    {
        $period = inputs('period', 7);
        $unit   = inputs('unit', 'day');
        $data   = [];
        for ($i = 0; $i < $period; $i++) {
            if ($unit === 'month') {
                $start = (new \DateTime("first day of -$i month"))->format('Y-m-d');
                $end   = (new \DateTime("last day of -$i month"))->format('Y-m-d');
            } elseif ($unit === 'week') {
                $start = (new \DateTime("-$i week monday"))->format('Y-m-d');
                $end   = (new \DateTime("-$i week sunday"))->format('Y-m-d');
            } elseif ($unit === 'year') {
                $start = (new \DateTime("first day of january -$i year"))->format('Y-m-d');
                $end   = (new \DateTime("last day of december -$i year"))->format('Y-m-d');
            } else {
                $start = (new \DateTime("-$i day"))->format('Y-m-d');
                $end   = $start;
            }
            $dateFormat = $unit === 'month' ? 'Y-m' : ($unit === 'year' ? 'Y' : 'Y-m-d');
            $data[]     = [
                $unit   => date($dateFormat, strtotime($start)),
            ];
        }
        $data = array_reverse($data); // 反转数组，使其按时间升序排列.
        // data组成echarts需要的数据格式
        $result = [
            'xAxis'  => array_column($data, $unit),
            'series' => array_column($data, 'value')
        ];
        $this->success('success', $result);
    }

    /**
     * 软件系统版本信息
     * @auth false
     */
    public function systemVersion()
    {
        $data      = [
            'authorize' => [
                'status'   => true,
                'end_time' => 0
            ],
            'version'   => config('site.version'),
            'framework' => [
                'backend'  => 'Webman + MYSQL8',
                'frontend' => 'VUE3 +'
            ],
            'author'    => [
                'name'  => '平顶山若拉网络科技有限公司',
                'email' => '作者QQ: 990504246'
            ],
            'license'   => config('site.api_license'),
        ];
        $this->success('success', $data);
    }

}