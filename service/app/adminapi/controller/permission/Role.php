<?php

namespace app\adminapi\controller\permission;

use app\common\model\AdminRoles;
use app\adminapi\controller\Base;

class Role extends Base
{

    /**
     * @notes 管理员角色列表
     * @auth true
     * @param AdminRoles $role
     * @return void
     */
    public function list(AdminRoles $role)
    {
        $limit = inputs('limit/d', 20);
        $where = $this->request->params([
            ['name', ''],
        ]);
        $res   = $role->withSearch($where[0], $where[1])->order("id desc")->paginate($limit);
        $this->success('获取成功', [
            'list'  => $res->items(),
            'total' => $res->total(),
        ]);
    }

    /**
     * @notes 管理员角色详情
     * @auth false
     * @param AdminRoles $role
     * @return void
     */
    public function detail(AdminRoles $role)
    {
        $id   = inputs('id/d', 0);
        $data = $role->where(['id' => $id])->find();
        $this->success('获取成功', $data);
    }

    /**
     * 管理员角色label
     * @auth false
     */
    public function listSimple(AdminRoles $role)
    {
        $list = $role->field('id as value,name as label')->order('id asc')->select()->toArray();
        $this->success('获取成功', $list);
    }

    /**
     * 管理员角色tree
     * @auth false
     */
    public function listSimpleTree(AdminRoles $role)
    {
        $list = $role->field('id as value,name as label,pid')->order('id asc')->select()->toArray();
        $tree = [];
        foreach ($list as $item) {
            $tree[$item['value']] = $item;
        }
        foreach ($tree as $key => $item) {
            $tree[$item['pid']]['children'][] = &$tree[$key];
        }
        $tree = isset($tree[0]['children']) ? $tree[0]['children'] : [];
        $this->success('获取成功', [
            'list' => $tree
        ]);
    }

    /**
     * @notes 管理员角色添加/编辑
     * @auth true
     * @return void
     */
    public function edit()
    {

        $data = [
            'id'   => inputs('id/d', 0),
            'pid'  => inputs('pid/d', 0),
            'name' => inputs('name'),
        ];
        if ($data['id']) {
            if ($data['id'] == $data['pid']) {
                $this->error('上级角色不能是自己');
            }
            $res = AdminRoles::update($data);
        } else {
            unset($data['id']);
            $res = AdminRoles::create($data);
        }

        if ($res) {
            $this->success('操作成功');
        } else {
            $this->error('操作失败');
        }
    }

    /**
     * @notes 管理员角色授权
     * @auth true
     * @return void
     */
    public function auth()
    {
        $data['id']    = inputs('id/d', 0);
        $data['rules'] = implode(',', inputs('rules/a', []));
        $res           = AdminRoles::update($data);
        if ($res) {
            $this->success('操作成功');
        } else {
            $this->error('操作失败');
        }
    }

    /**
     * @notes 管理员角色删除
     * @auth true
     */
    public function delete()
    {
        $id  = inputs('id/d', 0);
        $res = AdminRoles::destroy($id);
        if ($res) {
            $this->success('操作成功');
        } else {
            $this->error('操作失败');
        }
    }
}