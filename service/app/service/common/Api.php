<?php

namespace app\service\common;

use app\common\exception\HttpResponseException;

abstract class Api
{

    protected $request;

    public function __construct()
    {
        $this->request = request();
    }

    protected function response($code, $msg = '', $data = '')
    {
        $result = [
            'code' => $code,
            'msg'  => $msg ? $msg : ($code ? '操作成功' : '操作失败'),
            'data' => $data,
            'time' => time(),
        ];
        throw new HttpResponseException(200, $result);
    }

    protected function success($msg = '', $data = '')
    {
        $this->response(1, $msg, $data);
    }

    protected function error($msg = '', $data = '')
    {
        if (is_array($msg)) {
            $code = $msg['code'];
            $msg  = $msg['msg'];
        } else {
            $code = 0;
        }
        $this->response($code, $msg, $data);
    }

}
