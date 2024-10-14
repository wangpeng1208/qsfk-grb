<?php

namespace app\service\home;

use app\common\model\{Article as ArticleModel, ArticleCategory as ArticleCategoryModel};

class ArticleService
{
    public function articleType()
    {
        $category = ArticleCategoryModel::where(['status' => 1, 'type' => 1])->column('name,alias');
        return array_map(function ($value) {
            return [
                'alias' => $value['alias'],
                'label' => $value['name'],
            ];
        }, $category);
    }

    public function articleList()
    {
        $alias    = inputs('alias');
        $limit    = inputs('limit/d', 10);
        $category = ArticleCategoryModel::where(['alias' => $alias, 'status' => 1])->findOrEmpty();
        if ($category->isEmpty()) {
            throw new \Exception('分类不存在!');
        }
        $list = $category->articles()->where('status', 1)->order('top desc, id desc')->paginate($limit);
        return [
            'category' => $category,
            'list'     => $list->items(),
            'total'    => $list->total(),
        ];
    }

    public function articleDetail()
    {
        $id     = inputs('id', 0);
        $detail = ArticleModel::where(['status' => 1])->findOrEmpty($id);
        if ($detail->isEmpty()) {
            throw new \Exception('文章不存在!');
        }
        return [
            'category' => $detail->category,
            'detail'   => $detail
        ];
    }
}