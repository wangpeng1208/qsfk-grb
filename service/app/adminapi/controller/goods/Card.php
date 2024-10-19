<?php

namespace app\adminapi\controller\goods;

use app\common\model\GoodsCard as GoodsCardModel;
use app\common\model\Goods as GoodsModel;
use think\facade\Db;
use app\adminapi\controller\Base;

class Card extends Base
{
    public function list()
    {
        $withSearch = $this->request->params([
            ['goods_id', ''],
            ['status', ''],
            ['number', ''],
            ['trade_no', ''],
            ['cate_id', ''],
        ]);

        $res = GoodsCardModel::with('goods')
            ->withSearch($withSearch[0], $withSearch[1])
            ->order("id desc")
            ->paginate($this->limit)
            ->each(function ($item) {
                $item->good_price    = $item->goods->price ?? 0;
                $item->good_name     = $item->goods->name ?? '商品已删除';
                $item->category_name = $item->goods->category->name ?? '栏目已删除';
                unset($item->goods);
            });
        $this->success('获取成功', [
            'list'  => $res->items(),
            'total' => $res->total(),
        ]);
    }


    // 文本是否是gb2312 转 utf-8
    private function gbk_to_utf($str)
    {
        if (mb_detect_encoding($str, 'UTF-8, GBK') == 'GBK') {
            return iconv('GBK', 'UTF-8', $str);
        }
        return $str;
    }

    public function add()
    {
        $goods_id = inputs("goods_id/d", 0);
        GoodsModel::where([
            "id" => $goods_id
        ])->find() ?: $this->error("商品不存在");
        $import_type = inputs("import_type/s", 1);
        $split_type  = inputs("split_type/s", "");
        $content     = inputs("content/s", "");
        $check_card  = inputs("check_card/d", 0);
        $is_pre      = inputs("is_pre/d");
        $file        = $this->request->file('files');
        if ($import_type == 2 && $file[0]['raw']->isValid() && $file[0]['raw']->getSize() / 1024 <= 20480) {
            $content = $this->gbk_to_utf(file_get_contents($file[0]['raw']));
        }
        //  \n  PHP_EOL的区别
        $content_arr       = explode("\n", trim($content));
        $content_arr_count = count($content_arr);
        // 如果是文本 导入
        if ($content_arr_count > 5000) {
            $this->error("一次最多添加5000张，建议您分割后依次添加");
        }
        $content_arr = array_map(function ($v) {
            return trim(
                str_replace(
                    chr(194) . chr(160),
                    " ",
                    $v
                )
            );
        }, $content_arr);
        if ($check_card == 1) {
            $content_arr = array_values(array_unique($content_arr));
        }
        if ($split_type == "auto") {
            if (strpos($content_arr[0], " ") !== false) {
                $split_type = " ";
            } elseif (strpos($content_arr[0], ",") !== false) {
                $split_type = ",";
            } elseif (strpos($content_arr[0], "|") !== false) {
                $split_type = "|";
            } elseif (strpos($content_arr[0], "----") !== false) {
                $split_type = "----";
            } else {
                $split_type = "";
            }
        }
        $cards = [];
        foreach ($content_arr as $value) {
            if (!empty($split_type)) {
                $val = array_values(array_filter(explode($split_type, $value)));
            } else {
                $val = [$value, ""];
            }
            if (isset($val[0])) {
                $val[0] = preg_replace('/(^\s+)|(\s+$)/u', '', html_entity_decode($val[0]));
            } else {
                continue;
            }
            if ($val[0] === "") {
                continue;
            }
            $number = $val[0];
            if (isset($val[1])) {
                $val[1] = preg_replace('/(^\s+)|(\s+$)/u', '', html_entity_decode($val[1]));
            } else {
                continue;
            }
            if ($val[1] !== "") {
                $secret = $val[1];
            } else {
                $secret = "";
            }
            if ($check_card == 1) {
                $card = GoodsCardModel::where(["number" => $number, "secret" => $secret])->find();
                if ($card) {
                    continue;
                }
            }
            $cards[] = [
                "goods_id"  => $goods_id,
                "number"    => $number,
                "secret"    => $secret,
                "status"    => 1,
                "create_at" => time(),
                "is_pre"    => $is_pre
            ];
        }
        if (empty($cards)) {
            $this->error("虚拟卡内容格式不正确, 或卡密已存在");
        }
        $order_type = inputs("order_type/d", 1);
        if ($order_type == 2) {
            shuffle($cards);
        }
        Db::startTrans();
        try {
            (new GoodsCardModel())->saveAll($cards);
            Db::commit();
        } catch (\Exception $e) {
            Db::rollback();
            $this->error("添加失败," . $e->getMessage());
        }

        $this->success("添加成功", "成功添加{$content_arr_count}张卡密！");
    }

    /**
     * 批量删除
     * @return void
     */
    public function del()
    {
        $ids = inputs("ids/a");
        if (empty(count($ids))) {
            $this->error("没有选中项！");
        }
        $res = GoodsCardModel::where("id", "in", $ids)->delete();
        return $res ? $this->success("删除成功！") : $this->error("删除失败！");
    }

    /**
     * 一键删除未售出库存
     */
    public function allDel()
    {
        GoodsCardModel::where('status', '<>', 2)->delete();
        $this->success("删除成功！");
    }

    public function first()
    {
        $id     = inputs("id/d", 0);
        $status = inputs("status/d", 0);
        $res    = GoodsCardModel::where(["id" => $id])->update(["is_first" => $status]);
        return $res ? $this->success("设置成功！") : $this->error("设置失败！");
    }

}
