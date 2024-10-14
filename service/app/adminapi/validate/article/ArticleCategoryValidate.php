<?php

namespace app\adminapi\validate\article;

use taoser\Validate;

class ArticleCategoryValidate extends Validate
{
    protected $rule = [
        'id'    => 'require',
        'name'  => 'require',
        'alias' => 'require|unique:article_category',
    ];

    protected $message = [
        'id.require'    => 'ID不能为空',
        'name.require'  => '分类名不能为空',
        'alias.require' => '别名不能为空',
        'alias.unique'  => '别名已存在'
    ];

    public function sceneAdd()
    {
        return $this->only(['name', 'alias']);
    }

    public function sceneEdit()
    {
        return $this->only(['id', 'name', 'alias']);
    }
}