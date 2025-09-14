<?php
return [
    // 当前版本号
    'version'     => getenv('APP_VERSION') ?: 'v1.1.3',
    // 使用协议官方网址
    'api_license' => [
        [
            'name' => '官网链接',
            'url'  => getenv('API_LICENSE') ?: 'https://www.qqss.net',
        ],
    ],
];
