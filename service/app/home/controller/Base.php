<?php

namespace app\home\controller;

use app\service\common\Api;


class Base extends Api
{
    public $limit = 18;

    public function __construct()
    {
        parent::__construct();
        $this->setList();
    }

    /**
     * 列表分页设置
     */
    protected function setList()
    {
        $this->limit = $this->request->post('limit', 18);
    }

}