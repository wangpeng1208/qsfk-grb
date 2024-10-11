<?php

// +----------------------------------------------------------------------
// | 骑士发卡 [ 平顶山若拉网络科技有限公司，并保留所有权利 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2022-2025 https://www.qqss.net All rights reserved.
// +----------------------------------------------------------------------
// | Licensed 骑士软件 并不是自由软件，商业用途务必到官方购买正版授权, 以免引起不必要的法律纠纷.
// +----------------------------------------------------------------------
// | Author: 契约
// +----------------------------------------------------------------------

namespace app\service\uploads;

use think\facade\Db;

class UploadService
{


    /**
     * 文件上传
     * @param $app 所属应用
     * @param \Webman\Http\UploadFile $file 文件
     * @param $type 文件类型
     * @param $user_id  用户id
     */
    public function upload($app, $file, $type, $user_id)
    {
        $engine = conf('upload_type');
        switch ($type) {
            case 'image':
                $ext_yes = ['image/jpeg', 'image/gif', 'image/png', 'image/svg+xml', 'image/x-icon',];
                $view_path = '/upload/' . $app . '/' . $user_id . '/image/' . date('Ymd');
                $real_path = public_path() . $view_path;
                break;
            case 'video':
                $ext_yes = ['video/mp4', 'video/avi', 'video/rmvb', 'video/rm', 'video/asf', 'video/divx', 'video/mpg', 'video/mpeg', 'video/mpe', 'video/wmv', 'video/mkv', 'video/vob'];
                $view_path = '/upload/' . $app . '/' . $user_id . '/video/' . date('Ymd');
                $real_path = public_path() . $view_path;
                break;
            case 'certificate':
                $ext_yes = ['application/x-pem-file',
                    'application/x-x509-ca-cert',
                    'application/pkix-cert',
                    'application/x-pkcs12',
                    'application/x-x509-ca-cert',
                    'application/octet-stream',
                    'text/plain'
                ];
                $engine = 'local';
                $view_path = "/crt/{$app}/{$user_id}/" . date('Ymd');
                $real_path = runtime_path() . $view_path;
                break;
            default:
                throw new \Exception('文件格式错误');
        }

        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mime  = finfo_file($finfo, $file->getPathname());
        finfo_close($finfo);
        if (!in_array($mime, $ext_yes)) {
            throw new \Exception('文件类型不允许');
        }

        $this->mkdir($real_path);
        // 获取文件后缀
        $ext  = strtolower($file->getUploadExtension());
        $name = bin2hex(pack('Nn', time(), random_int(1, 65535))) . '.' . $ext;
        $file->move($real_path . '/' . $name);
        // 如果是证书文件 返回本地绝对路径
        if ($type === 'certificate') {
            $file_url = $real_path . '/' . $name;
        }
        // 如果使用站内资源
        $file_url = conf('site_domain') . $view_path . '/' . $name;

        if ($type == 'image') {
            $cate_id = inputs('cate_id', 0);
            Db::name('system_uploads')->insert([
                'cate_id'    => $cate_id,
                'name'       => $file->getUploadName(),
                'url'        => $file_url,
                'file_size'  => $file->getSize(),
                'ext'        => pathinfo($file->getUploadName(), PATHINFO_EXTENSION),
                'storage'    => $engine,
                'created_at' => date('Y-m-d'),
                'user_id'    => $user_id,
                'user_type'  => $app,
                'file_type'  => 'image',
            ]);
        }
        return $file_url;
    }

    /**
     * 目录创建
     */
    public function mkdir($path)
    {
        if (!is_dir($path)) {
            try {
                mkdir($path, 0777, true);
            } catch (\Exception $e) {
                throw new \Exception('目录创建失败');
            }
        }

        // 检查目录是否可写
        if (!is_writable($path)) {
            try {
                chmod($path, 0777);
            } catch (\Exception $e) {
                throw new \Exception('目录不可写');
            }
        }
    }

}