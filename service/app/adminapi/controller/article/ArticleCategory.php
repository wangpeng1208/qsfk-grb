<?php

namespace app\adminapi\controller\article;

use app\adminapi\controller\Base;
use app\common\model\ArticleCategory as CategoryModel;

class ArticleCategory extends Base
{

  /**
   * @notes文章分类列表
   * @auth true
   */
  public function list()
  {
    $res = CategoryModel::paginate($this->limit);
    $this->success('获取成功', [
      'list'  => $res->items(),
      'total' => $res->total(),
    ]);
  }

  /**
   * label文章分类
   * @auth false
   */
  public function listSimple()
  {
    $res = CategoryModel::field('id as value,name as label')->order('id asc')->select()->toArray();
    $this->success('获取成功', $res);
  }


  public function listSimpleByAlias()
  {
    $res = CategoryModel::field('alias as value,name as label')->order('id asc')->select()->toArray();
    $this->success('获取成功', $res);
  }

  private function post()
  {
    $data     = [
      'id'        => inputs('id/d', 0),
      'pid'       => inputs('pid/d', 0),
      'name'      => inputs('name/s', ''),
      'alias'     => inputs('alias/s', ''),
      'remark'    => inputs('remark/s', ''),
      'status'    => inputs('status/d', 1),
      'create_at' => time(),
    ];
    $validate = new \app\adminapi\validate\article\ArticleCategoryValidate;
    if ($data['id'] > 0) {
      $validate->scene('edit')->failException(true)->check($data);
    } else {
      $validate->scene('add')->failException(true)->check($data);
    }
    return $data;
  }

  /**
   * @notes 添加文章分类
   * @auth true
   */
  public function add()
  {
    $data = $this->post();
    unset($data['id']);
    $res = CategoryModel::create($data);
    return $res ? $this->success('添加成功') : $this->error('添加失败');
  }

  /**
   * @notes 编辑文章分类
   * @auth true
   */
  public function edit()
  {
    $data = $this->post();
    $res  = CategoryModel::update($data);
    return $res ? $this->success('编辑成功') : $this->error('编辑失败');
  }

  /**
   * @notes 删除文章分类
   * @auth true
   */
  public function del()
  {
    $id = inputs('id/d', 0);
    CategoryModel::destroy($id);
    $this->success('删除成功');
  }

}
