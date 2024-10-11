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

namespace app\common\util;

use app\common\model\SystemMenu as SystemMenuModel;

class RoleAuth
{
    // 检查权限
    public function check($path, $user)
    {
        // $path 如果以 / 开头的路径 需要去掉 / 
        $path  = $path[0] === '/' ? substr($path, 1) : $path;
        $perms = $this->getUserPerms($user);
        return in_array($path, $perms);
    }

    public function getUserPerms($user)
    {
        $menuData  = $this->getUserMenuData($user);
        $permsData = $menuData['perms'];
        $roles     = $user->role->toArray();
        $rules     = array_unique(array_merge(...array_map(function ($item) {
            return explode(',', $item['rules']);
        }, $roles)));
        $perms     = array_reduce($permsData, function ($carry, $item) use ($rules) {
            if (in_array($item['id'], $rules)) {
                $carry[] = $item['perms'];
            }
            return $carry;
        }, []);
        return $perms;
    }

    public function cacheUserMenuData($user)
    {
        $where = [['status', '=', '1'], ['app', '=', 'admin'], ['type', 'in', ['M', 'L', 'B']]];
        if ($user->id === 1) {
            $data = SystemMenuModel::where($where)->select()->toArray();
        } else {
            $roles   = $user->role->toArray();
            $rules   = array_unique(array_merge(...array_map(function ($item) {
                return explode(',', $item['rules']);
            }, $roles)));
            $where[] = ['id', 'in', $rules];
            $data    = SystemMenuModel::where($where)->select()->toArray();
        }
        $menu  = array_filter($data, function ($item) {
            return in_array($item['type'], ['M', 'L']);
        });
        $perms = array_filter($data, function ($item) {
            return !empty($item['perms']);
        });
        $data  = ['menu' => $menu, 'perms' => $perms];
        return $data;
    }

    // 获取用户的权限
    public function getUserMenuData($user)
    {
        return $this->cacheUserMenuData($user);
    }

    public function getAllMenu($user)
    {
        $where = [['status', '=', '1'], ['app', '=', 'admin'], ['type', '=', 'M']];
        if ($user->id === 1) {
            $data = SystemMenuModel::where($where)->select()->toArray();
        } else {
            $roles   = $user->role->toArray();
            $rules   = array_unique(array_merge(...array_map(function ($item) {
                return explode(',', $item['rules']);
            }, $roles)));
            $where[] = ['id', 'in', $rules];
            $data    = SystemMenuModel::where($where)->select()->toArray();
        }
        $menu = array_filter($data, function ($item) {
            return in_array($item['type'], ['M']);
        });
        return $menu;
    }

    public function getUserMenu($user)
    {
        $menuData = $this->getUserMenuData($user);
        $data     = $menuData['menu'];
        foreach ($data as $key => $item) {
            try {
                if ($item['pid'] == 0) {
                    $data[$key]['path'] = '/admin/' . $item['path'];
                    // 一级目录跳转
                    if (strpos($item['redirect'], 'http') === 0) {
                        $data[$key]['meta']['frameSrc']   = $item['redirect'];
                        $data[$key]['meta']['frameBlank'] = 1;
                        unset($data[$key]['redirect']);
                    }
                } else if (strpos($item['redirect'], 'http') === 0) {
                    // 二级目录跳转
                    $data[$key]['meta']['frameSrc'] = $item['redirect'];
                    unset($data[$key]['redirect']);
                }
            } catch (\Exception $e) {
                print_r($data[$key]);
            }
            $data[$key]['meta']['title'] = $item['title'];
            if (!empty($item['icon'])) {
                $data[$key]['meta']['icon'] = $item['icon'];
            }
            if (!empty($item['hidden'])) {
                $data[$key]['meta']['hidden'] = true;
            }
            if (!empty($item['orderNo'])) {
                $data[$key]['meta']['orderNo'] = $item['orderNo'];
            }
            if (!empty($item['keep_alive'])) {
                $data[$key]['meta']['keepAlive'] = $item['keep_alive'];
            }
            if (empty($data[$key]['redirect'])) {
                unset($data[$key]['redirect']);
            }
            unset($data[$key]['title']);
            unset($data[$key]['icon']);
            unset($data[$key]['hidden']);
            unset($data[$key]['orderNo']);
            unset($data[$key]['perms']);
            unset($data[$key]['keep_alive']);
            unset($data[$key]['type']);
            unset($data[$key]['status']);
            unset($data[$key]['app']);
        }

        $tree = [];
        foreach ($data as $item) {
            $tree[$item['id']] = $item;
        }
        foreach ($tree as $key => $item) {
            $tree[$item['pid']]['children'][] = &$tree[$key];
        }

        $tree = isset($tree[0]['children']) ? $tree[0]['children'] : [];
        return $tree;
    }

}