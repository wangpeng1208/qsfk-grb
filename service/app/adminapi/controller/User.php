<?php

namespace app\adminapi\controller;

use think\facade\Db;
use app\common\util\RoleAuth;
use app\common\model\SystemMenu;

class User extends Base
{

    /**
     * 用户资料及权限
     * @auth false
     */
    public function getAdminUserInfo(RoleAuth $roleAuth)
    {
        $perms = $roleAuth->getUserPerms($this->user);

        $this->success('success', [
            'user'  => $this->user,
            'perms' => $perms,
        ]);
    }

    /**
     * 路由菜单
     * @auth false
     */
    public function getAdminUserMenu(RoleAuth $roleAuth)
    {
        $menu = $roleAuth->getUserMenu($this->user);
        $this->success('success', $menu);
    }

    /**
     * 用户自定义快捷菜单
     * @auth false
     */
    public function getAdminUserShortcutMenu(RoleAuth $roleAuth)
    {
        $menu_ids     = Db::name('admin_menu')->where('user_id', $this->user->id)->column('menu_id');
        $shortcutMenu = SystemMenu::where('id', 'in', $menu_ids)->select()->toArray();
        $this->success('success', $shortcutMenu);
    }

    /**
     * 用户自定义快捷菜单添加
     * @auth false
     */
    public function addAdminUserShortcutMenu()
    {
        $menuId = $this->request->post('menu_id');
        $menu   = Db::name('admin_menu')->where('user_id', $this->user->id)->where('menu_id', $menuId)->find();
        $menu && $this->error('已添加');
        $data = [
            'user_id' => $this->user->id,
            'menu_id' => $menuId,
        ];
        Db::name('admin_menu')->insert($data);
        $this->success('添加成功');
    }

    /**
     * 用户自定义快捷菜单删除
     * @auth false
     */
    public function deleteAdminUserShortcutMenu()
    {
        $menuId = $this->request->post('menu_id');
        $menu   = Db::name('admin_menu')->where('user_id', $this->user->id)->where('menu_id', $menuId)->find();
        !$menu && $this->error('未添加');
        Db::name('admin_menu')->where('user_id', $this->user->id)->where('menu_id', $menuId)->delete();
        $this->success('删除成功');
    }

    /**
     * 权限下所有菜单
     * @auth false
     */
    public function getAdminAllMenu(RoleAuth $roleAuth)
    {
        $allMenu = $roleAuth->getAllMenu($this->user);
        $this->success('success', $allMenu);
    }
}
