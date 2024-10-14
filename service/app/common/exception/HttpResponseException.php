<?php

namespace app\common\exception;

use Exception;

class HttpResponseException extends Exception
{
    public $respone = [];
    public $statusCode = 200;

    public function __construct($statusCode = 200, $respone = [])
    {
        parent::__construct();
        $this->statusCode = $statusCode;
        $this->respone    = $respone;
    }


}
