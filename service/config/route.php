<?php
use Webman\Route;

// 微信支付（直连模式）回调
Route::post('/wxpay/notify/{id}', [app\home\controller\Pay::class, 'notify']);

// response
Route::options('[{path:.+}]', function () {
  return response('');
});

// 公共异常页面
Route::get('/exception', [app\home\controller\Index::class, 'exception']);

// 模板
Route::group('/', function () {
  Route::fallback(function () {
    $viewPath =  'public/html/index.html';
    return view($viewPath, [
      'title'       => conf('site_subtitle') . ' - ' . conf('site_name'),
      'keywords'    => conf('site_keywords'),
      'description' => conf('site_desc'),
    ]);
  });
});

