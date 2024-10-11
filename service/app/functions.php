<?php

use think\facade\Db;
use app\common\model\Config;

// 所有input都需要是post请求
if (!function_exists('inputs')) {
    /**
     * 获取输入参数 支持默认值和过滤
     * @param string $name 变量名
     * @param mixed  $default 默认值
     * @return mixed
     */
    function inputs(string $name, $default = null)
    {
        if (strpos($name, '/') !== false) {
            [$name, $type] = explode('/', $name);
            if ($type && in_array($type, ['d', 'a', 'f', 's'])) {
                switch ($type) {
                    case 'd':
                        $default = intval($default);
                        break;
                    case 'a':
                        $default = (array) $default;
                        break;
                    case 'f':
                        $default = floatval($default);
                        break;
                    case 's':
                        $default = strval($default);
                        break;
                    default:
                        $default = NULL;
                        break;
                }
            }
        }
        return request()->input($name, $default);
    }
}

/**
 * 设备或配置系统参数或者新增系统参数
 * @param string $name  参数名称
 * @param $value 默认是null为获取值，否则为更新
 * @return string|bool|array
 */
function conf($name, $value = null)
{
    // 判断是否有 Config表
    if (!Db::query("SHOW TABLES LIKE 'config'")) {
        return false;
    }
    if (is_null($value)) {
        // 模型查询 用于被BaseModel的onAfterRead事件拦截
        $res   = Config::where('name', $name)->find();
        $value = $res ? $res->value : '';
        // 如果是数字，转换成数字
        if (is_numeric($value)) {
            $value = $value + 0;
        }
        // 如果是 JSON
        $json = json_decode($value, true);
        if (json_last_error() == JSON_ERROR_NONE) {
            $value = $json;
        }
        return $value;
    } else {
        // 如果$value是数组或者对象，转换成json
        if (is_array($value) || is_object($value)) {
            $value = json_encode($value, JSON_UNESCAPED_UNICODE);
        }
        return Config::where('name', $name)->find() ? Config::update(['value' => $value], ['name' => $name]) : Config::insert(['name' => $name, 'value' => $value]);
    }
}

/**
 * 获取支付类型名称
 * @param int $paytype 支付类型
 */
function get_paytype($paytype)
{
    $payType = new \app\common\model\PayType();
    return $payType->find($paytype);
}

/**
 * 生成随机字符串
 * @param int $length 长度
 * @return string
 */
function get_random_string($length = 32)
{
    $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $str   = '';
    for ($i = 0; $i < $length; $i++) {
        $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
}

/**
 * 全球唯一的识别码
 * @return string
 */
function generateProxyKey()
{
    $key = md5(uniqid(md5(microtime(true)), true));
    return substr($key, 0, 8) . '-' . substr($key, 8, 4) . '-' . substr($key, 12, 4) . '-' . substr($key, 16, 4) . '-' . substr($key, 20, 12);
}


/**
 * 生成订单号
 * @param string $flag 订单标识
 * @param int    $userid 用户id
 * @return string 订单号
 */
function generate_trade_no($flag = 'A')
{
    //订单自定义
    if (conf('order_trade_no_type') == 0) {
        $trade_no = conf('order_trade_no_profix') . date('ymdHis') . explode('-', generateProxyKey())[0];
    } else {
        $trade_no = date('ymdHis') . explode('-', generateProxyKey())[0];
    }
    // 打款订单号
    if ($flag == 'G') {
        $trade_no = $flag . date('ymdHis') . str_pad(10000, 4, 0) . str_pad(mt_rand(0, 99), 2, '0');
    }

    // 商户后台充值订单号
    if ($flag == 'M') {
        $trade_no = $flag . date('ymdHis') . str_pad(10000, 4, 0) . str_pad(mt_rand(0, 99), 2, '0');
    }

    //校验是否有重复订单号
    $res = \app\common\model\OrderMaster::where(['trade_no' => $trade_no])->find();
    if (!empty($res)) {
        //需要重新生成订单号
        $trade_no = generate_trade_no($flag);
    }

    return $trade_no;
}

/**
 * 违禁词检测
 * @param string $str 待检测字符串
 * @return bool|string FALSE/敏感词汇
 */
function check_wordfilter($str)
{
    if (conf('site_wordfilter_status') == 1) {
        $dangerWords = conf('site_wordfilter_danger');
        $words       = array_filter(explode('|', trim($dangerWords, '|')));
        foreach ($words as $item) {
            if (strpos($str, $item) !== false) {
                return $item;
            }
        }
    }
    return false;
}

/**
 * xxs过滤
 * @param mixed $param
 * @param bool $filter
 * @return mixed
 */
function paramFilter($param, bool $filter = true)
{
    if (!$param || !$filter || !is_string($param)) {
        return $param;
    }
    $param       = htmlspecialchars_decode($param);
    $filter_rule = [
        "/<(\\/?)(script|i?frame|style|html|body|title|link|meta|object|\\?|\\%)([^>]*?)>/isU",
        "/(<[^>]*)on[a-zA-Z]+\s*=([^>]*>)/isU",
        "/select|join|where|drop|like|modify|rename|insert|update|table|database|alter|truncate|\'|\/\*|\.\.\/|\.\/|union|into|load_file|outfile/is"
    ];
    return preg_replace($filter_rule, '', $param);
}