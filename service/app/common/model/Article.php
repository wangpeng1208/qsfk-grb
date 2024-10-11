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

namespace app\common\model;


class Article extends BaseModel
{

    public function category()
    {
        return $this->hasOne('ArticleCategory', 'id', 'cate_id');
    }

    public function searchTitleAttr($query, $value, $data)
    {
        $query->where('title', 'like', '%' . $value . '%');
    }

    public function searchCateIdAttr($query, $value, $data)
    {
        $query->where('cate_id', $value);
    }

    public function searchStatusAttr($query, $value, $data)
    {
        $query->where('status', $value);
    }

    public function searchDateRangeAttr($query, $value, $data)
    {
        if (empty($value) || empty(trim($value[0])) || empty(trim($value[1]))) {
            return;
        }
        if ($value[0] == $value[1]) {
            $query->whereTime('create_at', strtotime($value[0]));
            return;
        }
        $query->whereBetweenTime('create_at', strtotime($value[0]), strtotime($value[1]));
    }

    public function setCreateAtAttr($value)
    {
        return $value / 1000;
    }

    public function setUpdateAtAttr($value)
    {
        return $value / 1000;
    }

    public function getContentAttr($value)
    {
        return paramFilter(htmlspecialchars_decode($value));
    }

    public static function onAfterRead($article)
    {
        $article->inc('views')->save();
    }

}
