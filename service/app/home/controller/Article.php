<?php

namespace app\home\controller;

use app\service\home\ArticleService;

class Article extends Base
{
    /**
     * 文章分类
     * @return void
     */
    public function type(ArticleService $articleService)
    {
        $data = $articleService->articleType();
        $this->success('获取成功', $data);
    }

    /**
     * 文章列表
     * @return void
     */
    public function list(ArticleService $articleService)
    {
        $data = $articleService->articleList();
        $this->success('获取成功', $data);
    }

    /**
     * 文章详情
     * @return void
     */
    public function detail(ArticleService $articleService)
    {
        $data = $articleService->articleDetail();
        $this->success('获取成功', $data);
    }
}
