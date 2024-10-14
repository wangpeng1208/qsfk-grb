<?php

namespace app\home\controller;

use app\common\model\GoodsCategory;
use app\common\model\Goods;
use app\common\model\GoodsCoupon;
use app\common\model\GoodsCard as GoodsCardModel;

class Index extends Base
{
    /**
     * 首页统计
     */
    public function indexCount()
    {
        $data = [
            // 'orderCount' => OrderModel::where('status', 1)->count(),
            'CardsSum'  => GoodsCardModel::where('status', 2)->count(),
            'startTime' => strtotime(conf('site_start_time')),
        ];
        $this->success("获取成功", $data);
    }

    /**
     * 获取网站配置
     */
    public function siteConfig()
    {
        $data = [
            'site_name'               => conf('site_name'),
            'site_subtitle'           => conf('site_subtitle'),
            'site_logo'               => conf('site_logo'),
            'site_domain'             => conf('site_domain'),
            'site_info_qq'            => conf('site_info_qq'),
            'site_info_email'         => conf('site_info_email'),
            'site_info_qq_desc'       => conf('site_info_qq_desc'),
            'site_info_copyright'     => conf('site_info_copyright'),
            'site_info_icp'           => conf('site_info_icp'),
            'merchant_logo'           => conf('merchant_logo'),
            'merchant_logo_sm'        => conf('merchant_logo_sm'),
            'goods_default_img'       => conf('goods_default_img'),
            'show_purchase_agreement' => conf('show_purchase_agreement'),
            'shop_buy_protocol'       => conf('shop_buy_protocol'),
        ];
        $this->success("获取成功", $data);
    }

    // exception
    public function exception()
    {
        $msg = inputs('msg');
        return view('exception', [
            'msg' => $msg
        ]);
    }

    /**
     * 分类数据筛选 - 简短
     */
    public function CateListSimple()
    {
        $list = GoodsCategory::field('id,name,pic')->select();
        $this->success('获取成功', ['list' => $list]);
    }

    /**
     * 按分类查找商品 带分页
     */
    public function goodsListByCate()
    {
        $cate_id         = inputs('id');
        $where           = [];
        $where['status'] = 1;
        if ($cate_id) {
            $where['cate_id'] = $cate_id;
        }
        $goods = Goods::where($where)->order('sort desc, id desc')->paginate($this->limit);
        $this->success('获取成功', ['list' => $goods->items(), 'total' => $goods->total()]);
    }

    /**
     * 商品详情
     */
    public function goodsDetail()
    {
        $id    = inputs('id');
        $goods = Goods::where([
            'status' => 1,
            'id'     => $id
        ])->find();
        if (count($goods->addtion_give) > 0) {
            // 向$goods->addtion_give的每个项目里添加商品名
            foreach ($goods->addtion_give as $key => $value) {
                $temp                     = $goods->addtion_give;
                $temp[$key]['goods_name'] = Goods::where('id', $value['good_id'])->value('name');
                $goods->addtion_give      = $temp;
            }
        }
        $goods->cate              = $goods->category;
        $goods->cards_stock_count = $goods->cardsStockCount;
        $goods->cards_sold_count  = $goods->cardsSoldCount;
        $this->success('获取成功', $goods);
    }

    /**
     * 获取优惠券信息
     */
    public function getCouponInfo()
    {
        $coupon_code = inputs("coupon_code");
        $cate_id     = inputs("cate_id/d", 0);
        $goods_id    = inputs("goods_id/d", 0);
        // 查找用户
        $coupon = GoodsCoupon::where(["code" => $coupon_code])->find();
        if (empty($coupon)) {
            return json([
                'code' => 0,
                'msg'  => '优惠券不存在！'
            ]);
        }
        if ($coupon->use_times == 0) {
            return json([
                'code' => 0,
                'msg'  => '优惠券使用次数已用尽！'
            ]);
        }

        if ($coupon->coupon_type == 2 && $coupon->cate_id != $cate_id) {
            return json([
                'code' => 0,
                'msg'  => '优惠券不适用于当前分类！'
            ]);
        }
        if ($coupon->coupon_type == 3 && $coupon->goods_id != $goods_id) {
            return json([
                'code' => 0,
                'msg'  => '优惠券不适用于当前商品！'
            ]);
        }
        if ($coupon->expire_at < time()) {
            return json([
                'code' => 0,
                'msg'  => '优惠券已过期！'
            ]);
        }
        if ($coupon->type == 100) {
            $coupon->type = 2;
        }
        return json([
            'code' => 1,
            'data' => $coupon
        ]);
    }


}
