<?php
return [
    // 当前版本号
    'version'     => getenv('APP_VERSION') ?: 'v1.0.5',
    // 是否是演示模式
    'is_demo'     => false,
    // 远程api地址
    'api_url'     => [
        'https://www.qqss.net',
    ],
    // 使用协议官方网址
    'api_license' => [
        [
            'name' => '官网链接',
            'url'  => 'https://www.qqss.net',
        ],
    ],
];
