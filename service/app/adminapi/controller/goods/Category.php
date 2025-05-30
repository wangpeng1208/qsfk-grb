<?php

namespace app\adminapi\controller\goods;

use app\adminapi\controller\Base;
use app\common\model\GoodsCategory as GoodsCategoryModel;

class category extends Base
{
    /**
     * 分类列表
     * @auth true
     */
    public function list()
    {
        $with_search = $this->request->params([
            ['name/s', ''],
        ]);

        $list = GoodsCategoryModel::withSearch($with_search[0], $with_search[1])->order('sort desc, id desc')->paginate($this->limit)->each(function ($item) {
            $item->goods_count = $item->goods()->count();
        });
        $this->success('获取成功', [
            'list'  => $list->items(),
            'total' => $list->total()
        ]);
    }

    /**
     * 分类数据筛选 - 简短
     * @auth false
     */
    public function listSimple()
    {
        $list = GoodsCategoryModel::field('id as value,name as label')->select();
        $this->success('获取成功', ['list' => $list]);
    }

    private function post()
    {
        $data = [
            'id'        => inputs('id/d', 0),
            'name'      => inputs('name/s', ''),
            'image'     => inputs('image/s', ''),
            'sort'      => inputs('sort/d', 0),
            'status'    => inputs('status/d', 1),
            'create_at' => time()
        ];
        // 数据校验
        $validate = new \app\adminapi\validate\goods\CategoryValidate;
        if ($data['id'] > 0) {
            $validate->scene('edit')->failException(true)->check($data);
        } else {
            unset($data['id']);
            $validate->scene('add')->failException(true)->check($data);
        }
        return $data;
    }

    /**
     * @notes 添加商品分类
     * @auth true
     */
    public function add()
    {
        $data = $this->post();
        $res  = GoodsCategoryModel::create($data);
        empty($res->sort) && GoodsCategoryModel::update(['sort' => $res->id], ['id' => $res->id]);
        $this->success("添加成功！");
    }

    /**
     * @notes 编辑商品分类
     * @auth true
     */
    public function edit()
    {
        $data = $this->post();
        $res  = $this->getCategory($data['id'])->save($data);
        return $res ? $this->success("保存成功！") : $this->error("保存失败！");
    }

    public function del()
    {
        $ids = inputs('ids/a', []);
        empty($ids) && $this->error("请选择要删除的商品栏目！");
        foreach ($ids as $id) {
            $data = $this->getCategory($id);
            $data->goods()->count() && $this->error("该分类下存在商品，暂时不能删除！");
            $data->delete();
        }
        $this->success("删除成功！");
    }

    public function status()
    {
        $cate  = $this->getCategory(inputs('id/d', 0));
        $field = inputs("field/s");
        $value = inputs("value/d");
        $res   = $cate->allowField(['status', 'sort', 'is_show'])->save([$field => $value]);
        return $res ? $this->success("操作成功！") : $this->error("操作失败！");
    }

    // 获取分类
    private function getCategory($id)
    {
        return GoodsCategoryModel::find($id) ?: $this->error("分类不存在！");
    }

}
