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

namespace app\adminapi\controller\goods;

use app\common\model\GoodsCoupon as GoodsCouponModel;
use app\adminapi\controller\Base;

class Coupon extends Base
{

    /**
     * 优惠券列表
     */
    public function index()
    {
        $params = [
            ['status', ''],
            ['coupon_type', ''],
            ['goods_id', ''],
        ];
        if (inputs('coupon_type') != '') {
            array_unshift($params, ['cate_id', '']);
        }
        ;
        $where = $this->request->params($params);
        $list  = GoodsCouponModel::with('category')  // 预加载 category
            ->withSearch($where[0], $where[1])
            ->order("id desc")
            ->paginate($this->limit)
            ->each(function ($item) {
                if ($item->coupon_type == 1) {
                    $item->coupon_name = '店铺通用';
                }
                if ($item->coupon_type == 2) {
                    $item->coupon_name = $item->category->name;
                }
                if ($item->coupon_type == 3) {
                    $item->coupon_name = $item->goods->name;
                }
                $item->status = $item->expire_day;
            });
        return $this->success('获取成功', [
            'list'  => $list->items(),
            'total' => $list->total(),
        ]);
    }

    /**
     * @notes 添加优惠券
     * @auth true
     */
    public function add()
    {
        $validate = new \app\adminapi\validate\goods\CouponValidate;
        $data     = $validate->data('add', []);
        $post     = array_fill(0, $data['quantity'], $data);
        $post     = array_map(function ($item) {
            $item['code']      = strtoupper(substr(md5(uniqid()), 0, 12) . get_random_string(4));
            $item['create_at'] = time();
            $item['expire_at'] = strtotime($item['expire_at']);
            $item['status'] = 1;
            return $item;
        }, $post);
        $model  = new GoodsCouponModel();
        $result = $model->saveAll($post);
        // 获取刚添加的数据
        $res = [];
        if ($result !== false) {
            $count = count($result);
            $this->success("成功添加" . $count . "张优惠券！", $res);
        } else {
            $this->error("添加失败！");
        }
    }

    /**
     * 批量删除
     *
     */
    public function batchDel()
    {
        $ids = inputs("ids/a", []);
        if (count($ids) == 0)
            $this->error("没有选中项！");
        $where[] = ["id", "in", $ids];


        $result = GoodsCouponModel::where($where)->delete();

        return $result ? $this->success("成功删除优惠券") : $this->error("删除失败");

    }

}
