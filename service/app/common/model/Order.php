<?php

namespace app\common\model;

use app\service\order\OrderService;

class Order extends BaseModel
{

	public function channel()
	{
		return $this->belongsTo("Channel", "channel_id");
	}
	public function channelAccount()
	{
		return $this->belongsTo("ChannelAccount", "channel_account_id");
	}

	public function goods()
	{
		return $this->belongsTo("Goods", "goods_id");
	}

	public function cards()
	{
		return $this->hasMany("OrderCard", "order_id");
	}

	public function searchGoodsIdAttr($query, $value, $data)
	{
		$query->where("goods_id", $value);
	}
	
	public function searchPaytypeAttr($query, $value, $data)
	{
		$query->whereIn("paytype", $value);
	}
	public function searchStatusAttr($query, $value, $data)
	{
		$query->where("status", $value);
	}
	public function searchTradeNoAttr($query, $value, $data)
	{
		$query->where("trade_no", $value);
	}

	public function searchTransactionIdAttr($query, $value, $data)
	{
		$query->where("transaction_id", $value);
	}

	public function searchChannelIdAttr($query, $value, $data)
	{
		$query->where("channel_id", $value);
	}

	public function searchIsFreezeAttr($query, $value, $data)
	{
		$query->where("is_freeze", $value);
	}

	public function searchCardAttr($query, $value, $data)
	{
		$query->hasWhere('OrderCard', function ($query) use ($value) {
			$query->where('number|secret', 'like', '%' . $value . '%');
		});
	}

	public function searchContactAttr($query, $value, $data)
	{
		$query->where("contact", "like", "%" . $value . "%");
	}

	public function searchDateTypeAttr($query, $value, $data)
	{
		if ($value == 1) {
			$query->whereTime("create_at", "today");
		} elseif ($value == 2) {
			$query->whereTime("create_at", "yesterday");
		} elseif ($value == 3) {
			$query->whereTime("create_at", "week");
		} elseif ($value == 4) {
			$query->whereTime("create_at", "month");
		} elseif ($value == 5) {
			$query->whereTime("create_at", "year");
		}
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

	public function searchTypeAttr($query, $value, $data)
	{
		if (empty($data['keywords'])) {
			return;
		}
		if ($value == 'trade_no') {
			$query->where("trade_no", $data['keywords']);
		} elseif ($value == 'goods_name') {
			$query->where("goods_name", "like", "%" . $data['keywords'] . "%");
		} elseif ($value == 'contact') {
			$query->where("contact", "like", "%" . $data['keywords'] . "%");
		}
	}
	public function searchKeywordsAttr($query, $value, $data)
	{
	}

	public function searchCidAttr($query, $value, $data)
	{
		$query->hasWhere('goods', function ($query) use ($value) {
			$query->where('cate_id', $value);
		});
	}

	public function searchDateAttr($query, $value, $data)
	{
		// create_at 等于 $value当天时间段
		$query->whereTime("create_at", "between", [$value . " 00:00:00", $value . " 23:59:59"]);
	}


	public function getStatusTextAttr($value, $data)
	{
		$arr = ["0" => "未支付", "1" => "已支付", "2" => "已关闭", "3" => "已退款"];
		return $arr[$data["status"]];
	}

	public function getCardsCountAttr($value, $data)
	{
		return $this->cards()->count();
	}

	// 生成订单同步回调地址
	public function callbackUrl()
	{
		return 'order';
	}

	// 完成订单
	public function completeOrder($order)
	{
		(new OrderService())->complete($order);
	}
}
