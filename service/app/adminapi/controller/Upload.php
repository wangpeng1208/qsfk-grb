<?php

namespace app\adminapi\controller;

use app\service\uploads\UploadService;
use app\common\model\SystemUploads;
use think\facade\Db;

class Upload extends Base
{
    /**
     * 文件上传
     * @auth false
     */
    public function upload()
    {
        $app     = 'admin';
        $file    = request()->file('file');
        $type    = inputs('type', 'image');
        $user_id = $this->user->id;
        if ($file && $file->isValid()) {
            try {
                $url = (new UploadService())->upload($app, $file, $type, $user_id);
            } catch (\Exception $e) {
                $this->error($e->getMessage(), [
                    'error' => $e->getMessage(),
                ]);
            }
            $this->success('上传成功', ['url' => $url]);
        } else {
            $this->error('请选择文件');
        }
    }

    // 商户 图片分类
    public function getCategoryList()
    {
        $app  = inputs('app', 'admin');
        $list = Db::name('system_uploads_category')->where([
            'app'     => $app,
            'user_id' => $this->user->id
        ])->order('id desc')->select()->toArray();
        $tree = [];
        foreach ($list as $item) {
            $tree[$item['id']] = $item;
        }
        foreach ($tree as $key => $item) {
            $tree[$item['pid']]['children'][] = &$tree[$key];
        }

        $tree = isset($tree[0]['children']) ? $tree[0]['children'] : [];

        $this->success('获取成功', [
            'list' => $tree
        ]);
    }

    // 创建分类
    public function createCategory()
    {
        $app     = inputs('app', 'admin');
        $name    = inputs('name');
        $pid     = inputs('pid', 0);
        $user_id = $this->user->id;
        empty($name) && $this->error('分类名称不能为空');
        $data = [
            'app'     => $app,
            'name'    => $name,
            'pid'     => $pid,
            'user_id' => $user_id
        ];
        $res  = Db::name('system_uploads_category')->insert($data);
        return $res ? $this->success('创建成功') : $this->error('创建失败');
    }

    // 编辑分类
    public function editCategory()
    {
        $id   = inputs('id/d', 0);
        $name = inputs('name');
        empty($name) && $this->error('分类名称不能为空');
        $res = Db::name('system_uploads_category')->where([
            'id' => $id,
        ])->update([
                    'name' => $name
                ]);
        return $res ? $this->success('编辑成功') : $this->error('编辑失败');
    }

    // 删除分类
    public function deleteCategory()
    {
        $id  = inputs('ids/d', 0);
        $res = Db::name('system_uploads_category')->where([
            'id' => $id,
        ])->delete();
        $res && Db::name('system_uploads')->where([
            'cate_id' => $id,
        ])->update([
                    'cate_id' => 0
                ]);
        return $res ? $this->success('删除成功') : $this->error('删除失败');
    }

    // fileList
    public function fileList()
    {
        $limit   = inputs('limit', '12');
        $name    = inputs('name');
        $cate_id = inputs('cate_id', 0);

        $query = new SystemUploads();
        $name && $query = $query->where('name', 'like', "%$name%");
        $cate_id && $query = $query->where('cate_id', $cate_id);
        $res = $query->order('id desc')->paginate($limit);
        $this->success('获取成功', [
            'list'  => $res->items(),
            'total' => $res->total(),
        ]);
    }

    // 修改名字 fileUpdateApi
    public function fileUpdateApi()
    {
        $id   = inputs('id/d', 0);
        $name = inputs('name');
        empty($name) && $this->error('名称不能为空');
        mb_strlen($name) > 20 && $this->error('名称不能超过20个字符!');
        $res = SystemUploads::where([
            'id' => $id,
        ])->update([
                    'name'       => $name,
                    'updated_at' => date('Y-m-d')
                ]);
        return $res ? $this->success('修改成功') : $this->error('修改失败');
    }

    // 批量删除图片
    public function delete()
    {
        $ids = inputs('ids');
        empty($ids) && $this->error('请选择要删除的图片');
        $res = SystemUploads::where([
            'id' => explode(',', $ids),
        ])->delete();
        return $res ? $this->success('删除成功') : $this->error('删除失败');
    }

}