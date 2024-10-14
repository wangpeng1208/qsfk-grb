<?php
declare(strict_types=1);

namespace app\common\model;

use think\Model;

abstract class BaseModel extends Model
{
    // 演示模式禁止修改 新增 删除 更新数据
    public static function onBeforeWrite($model)
    {
        if (getenv('ISDEMO')) {
            throw new \Exception('演示环境不支持写入数据');
        }
    }

    public static function onBeforeUpdate($model)
    {
        if (getenv('ISDEMO')) {
            throw new \Exception('演示环境不支持修改数据');
        }
    }

    public static function onBeforeDelete($model)
    {
        if (getenv('ISDEMO')) {
            throw new \Exception('演示环境不支持删除数据');
        }
    }

    public static function onBeforeInsert($model)
    {
        if (getenv('ISDEMO')) {
            throw new \Exception('演示环境不支持新增数据');
        }
    }

}
