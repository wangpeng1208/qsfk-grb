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

class Goods extends BaseModel
{
	protected $autoWriteTimestamp = true;
	protected $createTime = 'create_at';
	// update_time 不需要
	protected $updateTime = false;

	// 设置json类型字段
	protected $json = ['wholesale_discount_list', 'event_give', 'addtion_give', 'slider_image'];

	// 设置JSON数据返回数组
	protected $jsonAssoc = true;

	public function category()
	{
		return $this->belongsTo("GoodsCategory", "cate_id")->bind([
			"cate_name" => "name",
		]);
	}

	public function cards()
	{
		return $this->hasMany("GoodsCard", 'goods_id');
	}

	public function orders()
	{
		return $this->hasMany("Order", "goods_id");
	}

	public function link()
	{
		return $this->morphOne("Link", "relation", "goods")->order("id desc");
	}

	public function searchIdAttr($query, $value, $data)
	{
		$query->where('id', '=', $value);
	}


	public function searchNameAttr($query, $value, $data)
	{
		$query->where('name', 'like', '%' . $value . '%');
	}

	public function searchIsFreezeAttr($query, $value, $data)
	{
		if ($value !== "") {
			$query->where('is_freeze', '=', $value);
		}
	}

	public function searchCateIdAttr($query, $value, $data)
	{
		$query->where('cate_id', '=', $value);
	}

	public function searchDateRangeAttr($query, $value, $data)
	{
		if (empty(trim($value[0])) || empty(trim($value[1]))) {
			return;
		}

		if ($value[0] == $value[1]) {
			$query->whereTime('create_at', strtotime($value[0]));
			return;
		}
		$query->whereBetweenTime('create_at', strtotime($value[0]), strtotime($value[1]));
	}

	public function getCardsStockCountAttr($value, $data)
	{
		return $this->cards()->where("status", 1)->count();
	}

	protected function getCardsSoldCountAttr($value, $data)
	{
		return $this->cards()->where("status", 2)->count();
	}

	public function getContentAttr($value)
	{
		return paramFilter($value);
	}

	public function getRemarkAttr($value)
	{
		return paramFilter($value);
	}

}
