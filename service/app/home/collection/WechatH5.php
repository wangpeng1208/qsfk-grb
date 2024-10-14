<?php

namespace app\home\collection;

use Yansongda\Pay\Pay;
use app\service\pay\PayService;
use app\home\collection\interfaces\CollectionInterface;
use app\common\model\ChannelAccount;

/**
 * @note 微信H5支付 
 * @var $trade_no string 外部单号
 * @var  $order object 订单
 * @var $config array 配置
 * @field  params 应用ID:appid|商户号:mch_id|商户v3私钥:mch_secret_key|商户私钥证书:mch_secret_cert|商户公钥证书:mch_public_cert_path
 */
class WechatH5 extends PayService implements CollectionInterface
{
    private $trade_no = '';
    private $order;
    private $config = [];

    private function init($type, $value)
    {
        if ($type == 'trade_no') {
            $this->trade_no = $value;
            $this->order    = $this->loadOrder($value);

            $this->config['wechat']['default'] = [
                'mp_app_id'            => $this->order->channelAccount->params->appid,
                // 必填-商户号，服务商模式下为服务商商户号
                // 可在 https://pay.weixin.qq.com/ 账户中心->商户信息 查看
                'mch_id'               => $this->order->channelAccount->params->mch_id,
                /// 必填-v3 商户秘钥
                // 即 API v3 密钥(32字节，形如md5值)，可在 账户中心->API安全 中设置
                'mch_secret_key'       => $this->order->channelAccount->params->mch_secret_key,
                // 必填-商户私钥 字符串或路径
                // 即 API证书 PRIVATE KEY，可在 账户中心->API安全->申请API证书 里获得
                // 文件名形如：apiclient_key.pem
                'mch_secret_cert'      => $this->order->channelAccount->params->mch_secret_cert,
                // 必填-商户公钥证书路径
                // 即 API证书 CERTIFICATE，可在 账户中心->API安全->申请API证书 里获得
                // 文件名形如：apiclient_cert.pem
                'mch_public_cert_path' => $this->order->channelAccount->params->mch_public_cert_path,
                'notify_url'           => conf('site_domain') . '/wxpay/notify/' . $this->order->channel_account_id,
               
                // 'service_provider_id'  => '',
                // 'attach'               => $this->trade_no,
                // 选填-默认为正常模式。可选为： MODE_NORMAL, MODE_SANDBOX, MODE_SERVICE
                'mode'                 => Pay::MODE_NORMAL,
            ];

            // $this->config['logger'] = [
            //     'enable' => true,
            //     'file' => runtime_path() . '/logs/hhpay.log', // 请注意权限
            //     'level' => 'info', // 建议生产环境等级调整为 info，开发环境为 debug
            //     'type' => 'single', // optional, 可选 daily， daily 时将按时间自动划分文件.
            //     'max_file' => 30, // optional, 当 type 为 daily 时有效，默认 30 天
            // ];
        }
        if ($type == 'account_id') {
            $channelAccount = ChannelAccount::where('status', 1)->findOrFail($value);

            $this->config['wechat']['default'] = [
                'mp_app_id'            => $channelAccount->params->appid,
                'mch_id'               => $channelAccount->params->mch_id,
                'mch_secret_key'       => $channelAccount->params->mch_secret_key,
                'mch_secret_cert'      => $channelAccount->params->mch_secret_cert,
                'mch_public_cert_path' => $channelAccount->params->mch_public_cert_path,
                'notify_url'           => conf('site_domain') . '/home/pay/notify?account_id=' . $channelAccount->id,
                'mode'                 => Pay::MODE_NORMAL,
            ];
        }
    }

    /**
     * h5支付
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
            $data   = [
                'out_trade_no' => $trade_no,
                'amount'       => [
                    'total' => intval($totalAmount* 100), //单位 分
                ],
                'description'  => $subject, //订单标题
                'scene_info' => [
                    'payer_client_ip' => request()->ip(),
                    'h5_info' => [
                        'type' => 'Wap',
                    ]
                ],
            ];
            $result = Pay::wechat()->h5($data);
            return redirect($result->h5_url);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    /**
     * 回调
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