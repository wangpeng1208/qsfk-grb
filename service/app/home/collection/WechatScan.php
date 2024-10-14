<?php

namespace app\home\collection;

use Yansongda\Pay\Pay;
use app\service\pay\PayService;
use app\home\collection\interfaces\CollectionInterface;

use app\common\model\ChannelAccount;

/**
 * @note 微信扫码支付 即NAIVE支付 
 * @var $trade_no string 外部单号
 * @var  $order object 订单
 * @var $config array 配置
 * @field  params 应用ID(appid):appid|商户号:mch_id|v3 商户私钥:mch_secret_key|商户私钥证书(apiclient_key):mch_secret_cert|商户公钥证书(apiclient_cert):mch_public_cert_path
 */
// 该模式适用于PC网站、实体店单品或订单、媒体广告支付等场景。
class WechatScan extends PayService implements CollectionInterface
{
    // 订单号
    private $trade_no = '';
    // 支付通道账号id
    private $channel_account_id = '';
    private $order;
    private $config = [];

    private function init($type, $value)
    {
        if ($type == 'trade_no') {
            $this->trade_no = $value;
            $this->order    = $this->loadOrder($value);

            $this->config['wechat']['default'] = [
                'mp_app_id'            => $this->order->channelAccount->params->appid,
                'mch_id'               => $this->order->channelAccount->params->mch_id,
                'mch_secret_key'       => $this->order->channelAccount->params->mch_secret_key,
                'mch_secret_cert'      => $this->order->channelAccount->params->mch_secret_cert,
                'mch_public_cert_path' => $this->order->channelAccount->params->mch_public_cert_path,
                'notify_url'           => conf('site_domain') . '/wxpay/notify/' . $this->order->channel_account_id,
                'mode'                 => Pay::MODE_NORMAL,
            ];
        }
        

        if ($type == 'account_id') {
            $channelAccount = ChannelAccount::where('status', 1)->findOrFail($value);

            $this->config['wechat']['default'] = [
                'mp_app_id'            => $channelAccount->params->appid,
                'mch_id'               => $channelAccount->params->mch_id,
                'mch_secret_key'       => $channelAccount->params->mch_secret_key,
                'mch_secret_cert'      => $channelAccount->params->mch_secret_cert,
                'mch_public_cert_path' => $channelAccount->params->mch_public_cert_path,
                'notify_url'           => conf('site_domain') . '/wxpay/notify/' . $channelAccount->id,
                'mode'                 => Pay::MODE_NORMAL,
            ];

        }
    }

    /**
     * Web支付
     * @param string $trade_no 外部单号
     * @param string $subject 标题
     * @param float $totalAmount 支付金额
     */
    public function pay($trade_no, $subject, $totalAmount)
    {
        $this->init('trade_no', $trade_no);

        try {
            // 跳过pay 的单例模式，强制更新配置
            Pay::config(array_merge($this->config, ['_force' => true]));

            $data = [
                'out_trade_no' => $trade_no,
                'amount'       => [
                    'total' => intval($totalAmount* 100), //单位 分
                ],
                'description'  => $subject . '如有售后请返回购买页咨询', //订单标题
            ];
            

            $result = Pay::wechat()->scan($data);

            return view('cashier', [
                'title'  => '使用微信扫码付款',
                'data'   => $data,
                'result' => $result,
                'amount' => $totalAmount,
                'url'    => $result->code_url,
            ]);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * 回调 v3
     */
    public function notify($request, $account_id)
    {
        if ($request['summary'] != '支付成功') {
            return false;
        }
        $this->init('account_id', $account_id);
        Pay::config(array_merge($this->config, ['_force' => true]));
        try {
            $result = Pay::wechat()->callback($request);
            // 根据微信支付回调接口返回的参数进行处理
            if ($result['resource']['ciphertext']['trade_state'] == 'SUCCESS') {
                // 通过自定义数据查询订单
                $this->order = $this->loadOrder($result['resource']['ciphertext']['out_trade_no']);
                // 保存微信返回的支付订单号
                $this->order->transaction_id = $result['resource']['ciphertext']['transaction_id'];
                $this->order->save();
                // 在订单模型中添加一个完成订单方法
                $this->order->completeOrder($this->order);
            } else {
                return false;
            }
        } catch (\Exception $e) {
            return false;
        }
        return true;
    }
}