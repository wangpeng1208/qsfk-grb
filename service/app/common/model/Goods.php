<?php

namespace app\common\model;

class Goods extends BaseModel
{
	protected $autoWriteTimestamp = true;
	protected $createTime = 'create_at';
	// update_time 不需要
	protected $updateTime = false;

	// 设置json类型字段
	protected function getOptions(): array
	{
		return [
			'type'      => [
				'wholesale_discount_list' => 'json',
				'event_give'              => 'json',
				'addtion_give'            => 'json',
				'slider_image'            => 'json',
			],
			'jsonAssoc' => true,
		];
	}

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
		if ($value != "") {
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
