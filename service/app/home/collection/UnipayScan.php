<?php

namespace app\home\collection;

use Yansongda\Pay\Pay;
use app\service\pay\PayService;
use app\home\collection\interfaces\CollectionInterface;

/**
 * @note 银联扫码支付
 * @var $trade_no string 外部单号
 * @var  $order object 订单
 * @var $config array 配置
 * @field  params 商户号:mch_id|商户密钥:mch_secret_key|商户公私钥:mch_cert_path|商户公私钥密码:mch_cert_password|银联公钥证书路径:unipay_public_cert_path
 */
class UnipayScan extends PayService implements CollectionInterface
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
    $this->config['unipay']['default'] = [
      // 必填-支商户号
      'mch_id'                  => $this->order->channelAccount->params->mch_id,
      // 必填-商户公私钥
      'mch_cert_path'           => $this->order->channelAccount->params->mch_cert_path,
      // 必填-商户公私钥密码
      'mch_cert_password'       => $this->order->channelAccount->params->mch_cert_password,
      // 必填-银联公钥证书路径
      'unipay_public_cert_path' => $this->order->channelAccount->params->unipay_public_cert_path,
      'return_url'              => conf('site_domain') . '/callback',
      'notify_url'              => conf('site_domain') . '/home/pay/notify',
      // 选填-商户密钥：为银联条码支付综合前置平台配置：https://up.95516.com/open/openapi?code=unionpay
      'mch_secret_key'          => $this->order->channelAccount->params->mch_secret_key,
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
        'orderId' => $trade_no,
        'txnAmt'  => $totalAmount, //单位 元
        'txnTime' => date('YmdHis'),
      ];

      $result = Pay::unipay()->scan($data);

      // 二维码
      $encoded_url = urlencode($result->qrCode);

      $qr_url = 'https://api.qrserver.com/v1/create-qr-code/?data=' . $encoded_url . '&amp;size=200x200';
      // 获取二维码图片内容
      $qr_image_content = file_get_contents($qr_url);
      // 将图片内容转换为Base64格式
      $qr_image_base64 = base64_encode($qr_image_content);
      return '<img src="data:image/png;base64,' . $qr_image_base64 . '" />';
      // 返回二维码Url
      // return $result->qrCode;
    } catch (\Exception $e) {
      return $e->getMessage();
    }
  }
  
  /**
   * 银联回调
   */
  public function notify($request, $account_id)
  {
    $this->init($request['orderId']);
    Pay::config(array_merge($this->config, ['_force' => true]));
    try {
      $result = Pay::unipay()->callback($request);
      // 根据银联支付回调接口返回的参数进行处理
      if ($result['respCode'] == '00' || $result['respCode'] == 'A6') {
        $this->order->transaction_id = $result['queryId'];
        $this->order->status->save();
        // 在订单模型中添加一个完成订单方法
        $this->order->completeOrder($this->order);
      } else {
        $result = json_encode($result);
      }
    } catch (\Exception $e) {
      // 处理异常
    }
    return true;
  }
}
