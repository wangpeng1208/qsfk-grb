<?php

namespace app\adminapi\controller\goods;

use app\common\model\Goods as GoodsModel;
use app\common\model\GoodsCard as CardModel;
use app\common\model\GoodsCategory as GoodsCategoryModel;
use app\adminapi\controller\Base;

class Good extends Base
{

    /**
     * 商品列表
     */
    public function list()
    {
        $where = $this->request->params([
            ['cate_id', ''],
            ['name', ''],
        ]);
        $list  = GoodsModel::with(['category'])
            ->withSearch($where[0], $where[1])
            ->order("sort desc,id desc")
            ->paginate($this->limit)
            ->each(function ($item) {
                $item->cate_name          = $item?->category?->name; // 分类名称
                $item->cards_stock_counts = $item->cardsStockCount; // 库存数量
                $item->cards_sold_counts = $item->cardsSoldCount; // 卖出数量
            });
        $this->success('获取成功', [
            'list'  => $list->items(),
            'total' => $list->total(),
        ]);
    }

    // 违禁词检测
    private function checkWordfilter($name): void
    {
        $check_name = check_wordfilter($name);
        if ($check_name) {
            $this->error("分类名包含违禁词汇“" . $check_name . "”！");
        }
    }

    private function check_post($id = '')
    {
        $post = [
            "cate_id"                 => inputs("cate_id/d", 0),
            "sort"                    => inputs("sort/d", 0),
            "name"                    => inputs("name/s", ""),
            "price"                   => inputs("price/f", 0),
            "wholesale_discount"      => inputs("wholesale_discount/d", 0),
            "wholesale_discount_list" => inputs("wholesale_discount_list/a", null),
            "cost_price"              => inputs("cost_price/f", 0),
            "limit_quantity"          => inputs("limit_quantity/d", 1),
            "limit_quantity_max"      => inputs("limit_quantity_max/d", 0),
            "inventory_notify"        => inputs("inventory_notify/d", 0),
            "inventory_notify_type"   => inputs("inventory_notify_type/d", 1),
            "coupon_type"             => inputs("coupon_type/d", 0),
            "take_card_type"          => inputs("take_card_type/d", 0),
            "visit_type"              => inputs("visit_type/d", 0),
            "visit_password"          => inputs("visit_password/s", ""),
            "contact_limit"           => inputs("contact_limit/s", ""),
            "content"                 => inputs("content/s", ""),
            "remark"                  => inputs("remark/s", ""),
            "card_order"              => inputs("card_order/d", 0),
            // 叠加赠送
            "event_give"              => inputs("event_give/a", null),
            // 额外赠送
            "addtion_give"            => inputs('addtion_give/a', null),
            "slider_image"            => inputs("slider_image/a", []),
        ];

        if ($post['price'] <= $post['cost_price']) {
            $this->error("商品价格必须大于成本价");
        }

        $this->checkWordfilter($post["name"]);
        $this->checkWordfilter($post["content"]);
        $this->checkWordfilter($post["remark"]);
        if (conf("goods_min_price") > 0 && $post["price"] < conf("goods_min_price")) {
            $this->error("商品价格不能少于" . conf("goods_min_price") . "元");
        }
        if (conf("goods_max_price") > 0 && conf("goods_max_price") < $post["price"]) {
            $this->error("商品价格不能超过" . conf("goods_max_price") . "元");
        }
        // 活动赠送
        if ($post['event_give']) {
            foreach ($post['event_give'] as $key => $value) {
                $post['event_give'][$key]['num']      = abs($value['num']);
                $post['event_give'][$key]['give_num'] = abs($value['give_num']);
                if (empty($value['num']) || empty($value['give_num'])) {
                    unset($post['event_give'][$key]);
                }
            }
        }

        // 附加赠送
        if ($post['addtion_give']) {
            $addtion_give_arr = array_column($post['addtion_give'], 'good_id');
            if (count($addtion_give_arr) != count(array_unique($addtion_give_arr))) {
                $this->error("附加赠送有重复的id！");
            }
            // bug_num、give_num 0过滤
            foreach ($post['addtion_give'] as $key => $value) {

                if ($id && $id == $value['good_id']) {
                    $this->error("不能赠送本身商品，否则与叠加赠送冲突！");
                }

                $post['addtion_give'][$key]['bug_num']  = abs($value['bug_num']);
                $post['addtion_give'][$key]['give_num'] = abs($value['give_num']);
                if (empty($value['bug_num']) || empty($value['give_num'])) {
                    unset($post['addtion_give'][$key]);
                }
            }
        }

        // 批发优惠
        if ($post['wholesale_discount_list']) {
            foreach ($post['wholesale_discount_list'] as $key => $value) {
                $post['wholesale_discount_list'][$key]['num']   = abs($value['num']);
                $post['wholesale_discount_list'][$key]['price'] = abs($value['price']);
                if (empty($value['num']) || empty($value['price'])) {
                    unset($post['wholesale_discount_list'][$key]);
                }
            }
        }
        // 查询数据放在最后
        GoodsCategoryModel::find($post["cate_id"]) ?: $this->error("不存在该分类！");
        return $post;
    }


    /**
     * @notes 新增商品
     * @auth true
     */
    public function add()
    {
        $post              = $this->check_post();
        $post['status']    = 1;
        $post['create_at'] = time();
        $res               = GoodsModel::create($post);
        return $res ? $this->success("添加成功") : $this->error("添加失败");
    }

    public function detail()
    {
        $id   = inputs("id/d", 0);
        $good = GoodsModel::where(["id" => $id])->findOrFail();
        return $this->success('获取成功', $good);
    }

    /**
     * @notes 编辑商品
     * @auth true
     */
    public function edit()
    {
        $id   = inputs("id/d", 0);
        $good = GoodsModel::where(["id" => $id])->find() ?: $this->error("商品不存在！");
        $post = $this->check_post($id);
        $res  = $good->save($post);

        return $res ? $this->success("编辑成功") : $this->error("编辑失败");
    }

    /**
     * @notes 删除商品
     * @auth false
     */
    public function del()
    {
        $id   = inputs("id/d", 0);
        $data = $this->getGoods($id);
        $res  = $data->delete();
        return $res ? $this->success("删除成功") : $this->error("删除失败");
    }

    // 获取商品信息
    private function getGoods($id)
    {
        return GoodsModel::find($id) ?: $this->error("不存在该商品！");
    }

    public function status()
    {
        $id           = inputs("id/d", 0);
        $good         = $this->getGoods($id);
        $status       = inputs("val/d", 0);
        $status       = $status ? 1 : 0;
        $status_text  = $status == 1 ? "上架" : "下架";
        $good->status = $status;
        $res          = $good->save();
        return $res ? $this->success($status_text . "成功") : $this->error($status_text . "失败");
    }

    // 	附加赠送用到的 获取商品列表id+name
    public function goodList()
    {
        $list = GoodsModel::field('id,name')->order("sort desc,id desc")->select();
        $this->success("获取成功", $list);
    }

    // 商品数结构
    public function structure()
    {
        $list    = GoodsCategoryModel::with(['goods' => function ($query) {
            $query->where('status', 1)->order("sort desc,id desc");
        }
        ])->order("sort desc,id desc")->select();
        $newList = [];
        foreach (collect($list) as $category) {
            $item = [
                'label'    => $category->name,
                'value'    => "list{$category->id}",
                'children' => []
            ];
            foreach ($category->goods as $good) {
                $item['children'][] = [
                    'label' => $good->name,
                    'value' => $good->id
                ];
            }
            // 如果没有商品，就跳过这个类别
            if (empty($item['children'])) {
                continue;
            }
            $newList[] = $item;
        }
        $this->success("获取成功", $newList);
    }

    // 	清空卡密
    public function emptiedCards(CardModel $card)
    {
        $id  = inputs("id/d", 0);
        $res = $card::where(["goods_id" => $id, "status" => 1])->delete();
        return $res ? $this->success("清空成功") : $this->error("清空失败！");
    }

}
