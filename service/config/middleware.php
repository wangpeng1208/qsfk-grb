<?php

return [
  ''         => [
    app\middleware\CorsMiddleware::class, // 跨域中间件
  ],

  'adminapi'    => [
    app\middleware\AdminLogMiddleware::class,  // 日志
  ],

];