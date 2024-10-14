<?php

namespace app\common\model;

class ArticleCategory extends BaseModel
{
    public function articles()
    {
        return $this->hasMany('Article', 'cate_id');
    }
}
