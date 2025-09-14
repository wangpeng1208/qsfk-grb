<?php

namespace app\service\home;

use app\common\model\GoodsCard;
use app\common\model\Order;
use app\common\model\Goods;
use app\service\goods\GoodsService;
use app\common\exception\HttpResponseException;
use app\common\model\Channel;
use app\common\model\GoodsCoupon;
use app\common\model\OrderMaster;
use support\Cache;

class OrderService
{
    /**
     * 查询订单是否需要查询密码
     * @param Order $order 订单模型
     */
    public function orderQueryNeedPwd($order)
    {
        return $order->take_card_password ? true : false;
    }

    /**
     * 查询密码是否正常
     * @param Order $order 订单模型
     * @param $pwd 查询密码
     */
    public function orderQueryPwdIsNormal($order, $pwd)
    {
        if ($order->take_card_password != $pwd) {
            throw new \Exception("查询密码错误");
        }
    }

    /**
     * 判断卡密是否包含卡前缀
     * @param $card_id 卡密id
     */
    public function orderCardPrefix($card_id)
    {
        $card = GoodsCard::find($card_id);
        return $card->is_pre ? true : false;
    }

    /**
     * 订单查询
     */
    public function orderQuery()
    {
        $trade_no  = inputs("orderid/s", "");
        $pwd       = inputs("pwd/s", "");
        $limit     = inputs("limit/s", "");
        $orderList = $this->orderListsQuery($trade_no, $limit);
        if ($orderList->total() == 0) {
            throw new \exception("没有查询到订单信息");
        } else if ($orderList->total() == 1) {
            $pageType = 'detail';
            $order    = $orderList->items()[0];
            if ($this->orderIsFreeze($order)) {
                throw new \Exception("订单已被冻结，请联系客服处理！");
            }
            if ($this->orderQueryNeedPwd($order)) {
                if (empty($pwd)) {
                    throw new HttpResponseException(200, [
                        'code' => 1001,
                        'msg'  => '请输入查询密码',
                    ]);
                }
            }
            $this->orderQueryPwdIsNormal($order, $pwd);
            // 卡密打印
            (new GoodsService())->sendOut($order['trade_no']);

            if ($order && $order->first_query == 0) {
                $order->first_query = 1;
                $order->save();
            }

            // 卡密数据
            $outCards = $this->orderCardFormat($order);

            $goods = $order->goods;
            if ($goods === null) {
                $goods          = new \stdClass();
                $goods->content = '商品已下架或删除，不支持查看详情';
                $goods->remark  = '商品已下架或删除，不支持查看详情备注';
                $goods->name    = '商品已下架或删除，不支持查看商品名';
            } else {
                $goods = $goods->visible(['content', 'remark', 'name']);
            }

            $data = [
                'pageType' => $pageType,
                'order'    => $order->visible(['trade_no', 'create_at', 'total_price', 'quantity', 'status']),
                'goods'    => $goods,
                'paytype'  => get_paytype($order->paytype)->name,
                'outCards' => $outCards,
            ];
        } else {
            $pageType = 'list';
            $data     = [
                'pageType' => $pageType,
                'list'     => $orderList->visible(['trade_no', 'create_at', 'total_price', 'quantity', 'goods_name', 'status'])->items(),
                'total'    => $orderList->total(),
            ];
        }

        return $data;
    }

    /**
     * 订单列表查询
     * @param $trade_no 订单号 | 联系方式
     * @param $limit 查询数量
     */
    public function orderListsQuery($trade_no, $limit = 5)
    {
        // 订单前缀
        $order_trade_no_profix = conf('order_trade_no_profix');
        // 使用联系方式查询 3
        $querytype = 3;
        // 查询字符1️以订单前缀开头 则使用订单号查询 2
        if (strpos($trade_no, $order_trade_no_profix)) {
            $querytype = 2;
        }
        // 查询字符长度大于15 则使用订单号查询 2
        if (strlen($trade_no) > 15) {
            $querytype = 2;
        }
        switch ($querytype) {
            case "2":
                $orderList = Order::where(["trade_no" => $trade_no])->order("id desc")->paginate([
                    'page'      => 1,   // 重置第一页
                    'list_rows' => 1,   // 每页数量
                ]);
                break;
            case "3":
                // 查询订单限制天数
                $order_query_limitday = conf("order_query_limitday") ? conf("order_query_limitday") : 30;
                $orderList = Order::where(["contact" => $trade_no])
                    ->whereTime("create_at", ">", time() - 86400 * $order_query_limitday)
                    ->order("id desc")->paginate($limit);
                break;
            default:
                throw new \Exception("查询类型错误");
        }
        if (empty($orderList)) {
            throw new \Exception("没有查询到订单信息");
        }
        return $orderList;
    }

    /**
     * 订单是否冻结
     * @param Order $order
     */
    public function orderIsFreeze($order)
    {
        return $order->is_freeze == 1 ? true : false;
    }

    /**
     * 卡密格式化
     * @param Order $order
     */
    public function orderCardFormat($order)
    {
        $data  = [];
        $cards = $order->cards;
        foreach ($cards as $card) {
            if ($card->secret) {
                if ($this->orderCardPrefix($card->card_id)) {
                    $data[] = '卡号：' . $card->number . '    ' . '卡密：' . $card->secret;
                } else {
                    // 用4个tab键连接
                    $data[] = $card->number . '    ' . $card->secret;
                }
            } else {
                if ($this->orderCardPrefix($card->card_id)) {
                    $data[] = '卡号卡密：' . $card->number;
                } else {
                    $data[] = $card->number;
                }
            }
        }
        return implode(PHP_EOL, $data);
    }


    /**
     * 返回前端订单查询地址
     */
    public function orderQueryUrlName()
    {
        return 'order';
    }

    private function checkOrderFrequency($ip)
    {
        $md5_ip = md5($ip);
        if (Cache::get('order_create_' . $md5_ip)) {
            throw new \Exception("请勿频繁下单！");
        }
        $order_create_limit_time_by_ip = conf("order_create_limit_time_by_ip") ? conf("order_create_limit_time_by_ip") : 10;
        Cache::set('order_create_' . $md5_ip, 1, $order_create_limit_time_by_ip);
    }

    /**
     * 创建订单
     * @param array $post
     */
    public function createOrder(array $post)
    {
        $goods = Goods::where('status', 1)->find($post['goods_id']);
        $ip    = request()->ip();
        // IP下单频率限制
        $this->checkOrderFrequency($ip);
        $validate = new \app\home\validate\OrderValidate;
        $validate->scene('create')->failException(true)->check($post);
        $post["create_at"]        = time();
        $post["create_ip"]        = request()->ip();
        $post["goods_id"]         = $goods->id;
        $post["goods_name"]       = $goods->name;
        $post["goods_price"]      = $goods->price;
        $post["goods_cost_price"] = $goods->cost_price;

        // 取卡密码逻辑
        if ($goods->take_card_type == 2) {
            $post["take_card_password"] = $post['card_password'];
            $post["take_card_type"]     = 2;
        }

        // 批发优惠
        $post["goods_price_old"] = $post["goods_price"];
        if ($goods->wholesale_discount_list != null) {
            $post["goods_price"] = $this->discountPrice($goods, $post["quantity"]);
        }

        // 是否可以使用优惠券 且输入了优惠券 且点击了优惠券按钮 且优惠券存在
        if (inputs('is_coupon/d', '') && $post['coupon_code'] && $goods->coupon_type) {
            $coupon = GoodsCoupon::where('code', $post['coupon_code'])->find();
            if (empty($coupon)) {
                throw new \Exception("优惠券不存在！");
            }
            if ($coupon->use_times == 0) {
                throw new \Exception("优惠券使用次数已用尽！");
            }
            // 更新优惠券状态--变更为使用次数减1；use_times -1;第一版为status 0 是标识占用
            $coupon->use_times -= 1; // 使用中，不可再次使用；当订单完成后，状态改为2已使用
            $coupon->save();
            // 计算优惠券价格金额
            // 优惠券 折扣
            $post['coupon_price'] = $coupon->type == 100 ? $post["goods_price"] * $post['quantity'] * $coupon->amount / 100 : $coupon->amount;
            $post['coupon_id']    = $coupon->id;
        } else {
            $post['coupon_price'] = 0;
        }
        
        $post["total_product_price"] = round($post["goods_price"] * $post["quantity"] - $post["coupon_price"], 2);

        $post["total_price"] = $post["total_product_price"];
        // 成本价
        $post["total_cost_price"] = round($post["goods_cost_price"] * $post["quantity"], 2);

        $channel = Channel::where(['id' => inputs("pid/d", 0), "status" => 1])->findOrEmpty();
        if ($channel->isEmpty()) {
            throw new \Exception("支付接口不存在！");
        }


        // 官方支付通道下的所有账号 accounts
        $accounts = $channel->accounts()->where(['status' => 1])->select();

        if (empty(count($accounts))) {
            throw new \Exception("当前支付接口没有可用的账号！");
        }


        // 通道账号 随机取一个
        $account                    = $accounts[array_rand($accounts->toArray())];
        $post["paytype"]            = $channel->paytype;
        $post["channel_id"]         = $channel->id;
        $post["channel_account_id"] = $account->id;

        if ($post["total_product_price"] <= 0) {
            throw new \Exception("商家优惠设置有误，总价格不能小于等于0，请联系商家！");
        }
        if ($post["total_product_price"] < round($post["goods_cost_price"] * $post["quantity"], 2)) {
            throw new \Exception("商家优惠设置有误，低于成本价，请联系商家！");
        }

        $post["status"] = 0;

        // 订单资金结算方式
        $post["settlement_type"] = 1;

        // 如果购买赠送
        if ($goods->event_give != null) {
            foreach ($goods->event_give as $k => $v) {
                if ($post["quantity"] >= $v['num']) {
                    // 每买n张赠送m张 ，倍数关系
                    $ratio            = floor($post["quantity"] / $v['num']);
                    $post['quantity'] = $v['give_num'] * $ratio + $post["quantity"];
                }
            }
        }
        $post['trade_no'] = generate_trade_no("T");
        // 单号入库数据
        $result = Order::create($post);
        if (empty($result)) {
            throw new \Exception("订单创建失败，请稍后再试！");
        }
        // 统一订单库标识
        OrderMaster::create(["trade_no" => $post["trade_no"], "model" => 'Order']);
        return [
            // 订单号
            "trade_no"              => $post["trade_no"],
            // 商品名称
            "goods_name"            => $post["goods_name"],
            // 优惠券价格 存在优惠券价格则使用优惠券
            "coupon_price"          => $post['coupon_price'],
            // 购买数量
            'quantity'              => $post['quantity'],
            // 原始单价
            'goods_price_old'       => $post["goods_price_old"],
            // 最终单价
            'goods_price'           => $post["goods_price"],
            // 不包含短信费用的总价
            'total_product_price'   => $post["total_product_price"],
            // 最总价格
            "total_price"           => $post["total_price"],
            // 支付方式
            "paytype"               => [
                'title' => $channel->show_name
            ],
            "create_time"           => $post["create_at"],
            // 订单自动关闭时间
            "order_auto_close_time" => conf("order_auto_close_time") * 60,
            // 购卡协议链接
            "purchase_agreement"    => conf("purchase_agreement"),
        ];
    }

    // 批发优惠后单价
    private function discountPrice($goods, $quantity)
    {
        $price = $goods->price;
        $list  = $goods->wholesale_discount_list;
        $sort  = array_column($list, 'num');
        array_multisort($sort, SORT_DESC, $list);
        foreach ($list as $v) {
            if ($quantity >= $v['num']) {
                $price = $v['price'];
                break;
            }
        }
        return $price;
    }

}