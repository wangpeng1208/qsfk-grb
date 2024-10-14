<?php

namespace app\adminapi\validate\article;

use taoser\Validate;

class ArticleValidate extends Validate
{
	protected $rule = [
		'id'      => 'require',
		'title'   => 'require',
		'cate_id' => 'require',
	];

	protected $message = [
		'id.require'      => 'ID不能为空',
		'title.require'   => '文章名不能为空',
		'cate_id.require' => '请选择分类',
	];

	public function sceneAdd()
	{
		return $this->only(['title', 'cate_id']);
	}

	public function sceneEdit()
	{
		return $this->only(['id', 'title', 'cate_id']);
	}

}