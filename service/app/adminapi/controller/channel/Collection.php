<?php

namespace app\adminapi\controller\channel;

use app\common\model\Channel as ChannelModel;
use app\adminapi\controller\Base;

class Collection extends Base
{
    /**
     * @notes 收款通道列表
     * @auth true
     */
    public function list(ChannelModel $channelModel)
    {
        $res       = $channelModel::paginate($this->limit);
        $this->success('获取成功', [
            'list'  => $res->items(),
            'total' => $res->total(),
        ]);
    }

    /**
     * @notes 调用代码接口列表
     */
    private function codeList($type)
    {
        $path        = app_path() . '/home/' . $type . '/';
        $directories = new \RecursiveDirectoryIterator($path);
        $iterator    = new \RecursiveIteratorIterator($directories);
        $phpFiles    = new \RegexIterator($iterator, '/\w+\.php$/', \RecursiveRegexIterator::GET_MATCH);
        $data        = [];
        foreach ($phpFiles as $phpFile) {
            // 如果文件路径中包含 'interfaces'，则跳过
            if (strpos($phpFile[0], 'Interface') !== false) {
                continue;
            }
            $content = file_get_contents($path . $phpFile[0]);
            // 获取内容里的remark
            preg_match('/@note\s(.*)/', $content, $remark);
            preg_match('/@field  params\s(.*)/', $content, $fields);
            $fileName = str_replace('.php', '', $phpFile[0]);
            $data[]   = [
                'label'  => $fileName . ' ( ' . $remark[1] . ' ) ',
                'value'  => $fileName,
                'remark' => $remark[1] ?? '',
                'fields' => $fields[1] ?? '',
            ];
        }
        return $data;
    }

    /**
     * 所有接口代码名称
     * @auth false
     */
    public function code()
    {
        $type = inputs('type', 'collection');
        $data = $this->codeList($type);
        $this->success('获取成功', $data);
    }

    /**
     * 收款通道 label value
     * @auth false
     */
    public function listSimple()
    {
        $res        = ChannelModel::field('id as value,title as label')->order('sort asc')->select()->toArray();
        $this->success('获取成功', $res);
    }

    /**
     * @notes 通道详情
     * @auth false
     */
    public function detail()
    {
        $id   = inputs('id/d', 0);
        $data = ChannelModel::where(['id' => $id])->find();
        $this->success('success', $data);
    }

    /**
     * @notes 删除通道
     * @auth true
     */
    public function del()
    {
        $id  = inputs('id/d', 0);
        $res = ChannelModel::destroy($id);
        return $res ? $this->success('操作成功') : $this->error('操作失败');
    }

    /**
     * post数据验证
     */
    private function postData()
    {
        $data     = [
            'id'             => inputs('id/d', ''),
            'title'          => inputs('title'),
            'status'         => inputs('status'),
            'show_name'      => inputs('show_name'),
            'is_available'   => inputs('is_available'),
            'sort'           => inputs('sort'),
            'type'           => inputs('type'),
            'code'           => inputs('code'),
            'account_fields' => inputs('account_fields'),
            'paytype'        => inputs('paytype'),
        ];
        $validate = new \app\adminapi\validate\channel\CollectionValidate;
        $validate->scene('collection')->failException(true)->check($data);
        $codeType = inputs('codeType', 'collection');
        $codeList = array_column($this->codeList($codeType), 'value');
        !in_array($data['code'], $codeList) && throw new \Exception('代码接口文件不存在');
        return $data;
    }

    /**
     * @notes 添加通道
     * @auth true
     */
    public function add()
    {
        $data      = array_diff_key($this->postData(), ['id']);
        $res       = ChannelModel::create($data);
        $res->sort = $res->id;
        $res->save();
        return $res ? $this->success('操作成功') : $this->error('操作失败');
    }

    /**
     * @notes 编辑通道
     * @auth true
     */
    public function edit()
    {
        $data = $this->postData();
        $res  = ChannelModel::update($data);
        return $res ? $this->success('操作成功') : $this->error('操作失败');
    }
}