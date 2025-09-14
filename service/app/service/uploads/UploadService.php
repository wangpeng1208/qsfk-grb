<?php

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
        switch ($type) {
            case 'image':
                $ext_yes = ['image/jpeg', 'image/gif', 'image/png', 'image/svg+xml', 'image/x-icon',];
                $allow_ext = ['jpg', 'jpeg', 'gif', 'png', 'svg', 'ico', 'webp'];
                $view_path = '/upload/' . $app . '/' . $user_id . '/image/' . date('Ymd');
                $real_path = public_path() . $view_path;
                break;
            case 'video':
                $ext_yes = ['video/mp4', 'video/avi', 'video/rmvb', 'video/rm', 'video/asf', 'video/divx', 'video/mpg', 'video/mpeg', 'video/mpe', 'video/wmv', 'video/mkv', 'video/vob'];
                $allow_ext = ['mp4', 'avi', 'rmvb', 'rm', 'asf', 'divx', 'mpg', 'mpeg', 'mpe', 'wmv', 'mkv', 'vob'];
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
                $allow_ext = ['pem', 'crt', 'cer', 'p12', 'pfx', 'der', 'csr'];
                $view_path = "/crt/{$app}/{$user_id}/" . date('Ymd');
                $real_path = runtime_path() . $view_path;
                break;
            default:
                throw new \Exception('文件格式错误');
        }

        $mime  = $file->getUploadMimeType();
        $ext  = strtolower($file->getUploadExtension());

        if (!in_array($mime, $ext_yes) || !in_array($ext, $allow_ext)) {
            throw new \Exception('文件类型不允许');
        }
        
        $this->mkdir($real_path);

        $name = bin2hex(pack('Nn', time(), random_int(1, 65535))) . '.' . $ext;
        $size = $file->getSize();
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
                'file_size'  => $size,
                'ext'        => pathinfo($file->getUploadName(), PATHINFO_EXTENSION),
                'storage'    => 'local',
                'created_at' => date('Y-m-d'),
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