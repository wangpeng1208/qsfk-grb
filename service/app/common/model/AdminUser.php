<?php

namespace app\common\model;

class AdminUser extends BaseModel
{
    protected $autoWriteTimestamp = true;

    protected $createTime = 'created_at';
    public function role()
    {
        return $this->hasManyThrough('AdminRoles', 'AdminRole', 'admin_id', 'id', 'id', 'role_id');
    }

    public function roles()
    {
        return $this->hasMany('AdminRole', 'admin_id', 'id');
    }

    public function searchUsernameAttr($query, $value)
    {
        if ($value) {
            $query->where('username', 'like', "%{$value}%");
        }
    }

    public function searchNicknameAttr($query, $value)
    {
        if ($value) {
            $query->where('nickname', 'like', "%{$value}%");
        }
    }

    public function searchStatusAttr($query, $value)
    {
        if ($value) {
            $query->where('status', '=', $value);
        }
    }

    public function searchIdAttr($query, $value)
    {
        if ($value) {
            $query->where('id', '=', $value);
        }
    }

    public function getAvatarAttr($value, $data)
    {
        if(empty($value)){
            return conf('site_domain') . '/static/common/images/noavatar.svg';
        }
        return  $value;
    }


}
