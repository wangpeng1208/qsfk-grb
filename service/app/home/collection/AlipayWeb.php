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

namespace app\home\collection;

use Yansongda\Pay\Pay;
use app\service\pay\PayService;
use app\home\collection\interfaces\CollectionInterface;

/**
 * @note 支付宝网页支付
 * @var $trade_no string 外部单号
 * @var  $order object 订单
 * @var $config array 配置
 * @field  params 支付宝app_id:app_id|应用秘钥:app_secret_cert|应用公钥证书:app_public_cert_path|支付宝公钥证书:alipay_public_cert_path|支付宝根证书:alipay_root_cert_path
 */
class AlipayWeb extends PayService implements CollectionInterface
{
  private $trade_no = '';
  private $order;
  private $config = [];

  private function init($trade_no)
  {
    $this->trade_no = $trade_no;
    $this->order    = $this->loadOrder($trade_no);
    $this->config();
  }
  private function config()
  {
    if ($this->order === false) {
      return;
    }
    $this->config['alipay']['default'] = [
      // 必填-支付宝分配的 app_id
      'app_id'                  => $this->order->channelAccount->params->app_id,
      // 必填-应用私钥 字符串或路径
      // 在 https://open.alipay.com/develop/manage 《应用详情->开发设置->接口加签方式》中设置
      // 'app_secret_cert' => $order->channelAccount->params->merchant_private_key,
      'app_secret_cert'         => $this->order->channelAccount->params->app_secret_cert,
      // 必填-应用公钥证书 路径
      // 设置应用私钥后，即可下载得到以下3个证书
      'app_public_cert_path'    => $this->order->channelAccount->params->app_public_cert_path,
      // 必填-支付宝公钥证书 路径
      'alipay_public_cert_path' => $this->order->channelAccount->params->alipay_public_cert_path,
      // 必填-支付宝根证书 路径
      'alipay_root_cert_path'   => $this->order->channelAccount->params->alipay_root_cert_path,
      'return_url'              => conf('site_domain') . '/callback',
      'notify_url'              => conf('site_domain') . '/home/pay/notify',
      // 选填-第三方应用授权token
      'app_auth_token'          => '',
      // 选填-服务商模式下的服务商 id，当 mode 为 Pay::MODE_SERVICE 时使用该参数
      'service_provider_id'     => '',
      // 选填-默认为正常模式。可选为： MODE_NORMAL, MODE_SANDBOX, MODE_SERVICE
      'mode'                    => Pay::MODE_NORMAL,
    ];
  }

  /**
   * Web支付
   * @param string $trade_no 外部单号
   * @param string $subject 标题
   * @param float $totalAmount 支付金额
   */
  public function pay($trade_no, $subject, $totalAmount)
  {
    $this->init($trade_no);
    try {
      // 跳过pay 的单例模式，强制更新配置
      Pay::config(array_merge($this->config, ['_force' => true]));

      $data = [
        'out_trade_no' => $trade_no,
        'total_amount' => $totalAmount, //单位 元
        'subject'      => $subject . '如有售后请返回购买页咨询', //订单标题
      ];
      return Pay::alipay()->web($data)->getBody()->getContents();
    } catch (\Exception $e) {
      return $e->getMessage();
    }
  }

  /**
   * 支付宝回调 v3
   */
  public function notify($request, $account_id)
  {
    $this->init($request['out_trade_no']);
    Pay::config(array_merge($this->config, ['_force' => true]));
    try {
      $result = Pay::alipay()->callback($request);
      if ($result['trade_status'] == 'TRADE_SUCCESS') {
        // 在订单模型中添加一个完成订单方法
        $this->order->completeOrder($this->order);
      } else {
        $result = json_encode($result);
      }
    } catch (\Exception $e) {
    }
    return true;
  }
}
