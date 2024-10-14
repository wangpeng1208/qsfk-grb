<?php

namespace app\adminapi\validate\goods;

use app\common\model\GoodsCategory;
use app\common\model\Goods;
use app\adminapi\validate\Base;

class CouponValidate extends Base
{
    protected $rule = [
        'coupon_type' => 'require|initCouponTypeValue',
        'cate_id'     => 'require',
        'goods_id'    => 'require',
        'type'        => 'require',
        'amount'      => 'require|checkAmount',
        'quantity'    => 'require|integer|checkQuantity',
        'expire_at'   => 'require',
        'use_times'   => 'require',
        'receive'     => 'require',
    ];

    protected $message = [
        'coupon_type.require'    => '请选择优惠券类型',
        'type.require'           => '请选择类型',
        'amount.require'         => '请输入折扣',
        'amount.checkAmount'     => '折扣不能小于0',
        'quantity.require'       => '请输入发放数量',
        'quantity.integer'       => '发放数量必须是整数',
        'quantity.checkQuantity' => '发放数量不能小于0',
        'expire_at.require'      => '请选择过期时间',
        'use_times.require'      => '请输入使用次数',
        'receive.require'        => '请选择领取方式',
    ];

    protected function initCouponTypeValue($value, $rule, $data)
    {
        if ($value == 2) {
            return $this->validateCategory($data);
        }
        if ($value == 3) {
            return $this->validateGoods($data);
        }
        return true;
    }

    private function validateCategory($data)
    {
        if (empty($data['cate_id'])) {
            return '请选择分类';
        }
        $category = GoodsCategory::where([
            'id'      => $data['cate_id'],
        ])->find();
        if (empty($category)) {
            return '选择了不存在的分类！';
        }
        return true;
    }

    private function validateGoods($data)
    {
        if (empty($data['goods_id'])) {
            return '请选择商品';
        }
        $goods = Goods::where([
            'id'      => $data['goods_id'],
        ])->find();
        if (empty($goods)) {
            return '选了了不存在的商品！';
        }
        return true;
    }

    protected function checkAmount($value, $rule, $data)
    {
        if ($value <= 0) {
            return '折扣不能小于0！';
        }
        if ($data['type'] == 100) {
            if ($value >= 100) {
                return '折扣不能大于等于100%！';
            }
        }

        return true;
    }

    protected function checkQuantity($value, $rule, $data)
    {
        if ($value <= 0) {
            return '发放数量不能小于0！';
        }
        if ($value > 1000) {
            return '发放数量不能大于1000！';
        }

        return true;
    }

    public function sceneAdd()
    {
        return $this->only(['coupon_type', 'cate_id',  'type', 'amount', 'quantity', 'expire_at']);
    }

}