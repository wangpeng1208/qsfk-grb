<?php

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

}
