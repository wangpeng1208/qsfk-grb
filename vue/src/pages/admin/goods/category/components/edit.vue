<template>
  <t-dialog v-model:visible="visible" :loading="loading" :destroy-on-close="true" :close-on-overlay-click="false"
    :header="popupTitle" draggable :confirm-btn="saveBtn" :on-confirm="onSubmit" width="500px">
    <t-form ref="form" :data="categoryForm" :rules="rules" label-width="150" label-align="left">
      <t-form-item label="分类名称" name="name" tips="输入分类名称">
        <t-input v-model="categoryForm.name" placeholder="请输入分类名称" show-limit-number :minlength="2" />
      </t-form-item>
      <t-form-item label="分类图标" name="pic" tips="建议180*180">
        <uploadImage :url="categoryForm.pic" title="分类图标" :style="{
    maxWidth: '100px',
    width: '100px',
    height: '100px',
  }" :maxlength="1" @setPic="setPic" />
      </t-form-item>
      <t-form-item label="分类大图" name="bg_pic" tips="建议468*340">
        <uploadImage :url="categoryForm.bg_pic" title="分类大图" :style="{
    maxWidth: '100px',
    width: '100px',
    height: '100px',
  }" :maxlength="1" @setPic="setBgPic" opt />
      </t-form-item>
      <t-form-item label="栏目状态" name="status" tips="">
        <span>
          <wp-check-tag v-model="categoryForm.status" :items="[
    { label: '上架', value: 1 },
    { label: '隐藏', value: 0 },
  ]" />
        </span>
      </t-form-item>

      <t-form-item label="分类排序" name="sort" tips="填写数字越大，显示越靠前。">
        <t-input-number v-model="categoryForm.sort" theme="column" :min="0" />
      </t-form-item>
    </t-form>
  </t-dialog>
</template>
<script lang="ts">
export default {
  name: 'CategoryEditPopup',
};
</script>
<script setup lang="ts">
import { FormRule, MessagePlugin } from 'tdesign-vue-next';
import { computed, reactive, ref } from 'vue';
import uploadImage from '@/components/uploadPictures/image.vue';
import { add, edit } from '@/api/admin/goods/category';

const formData = {
  id: '',
  name: '',
  pic: '',
  bg_pic: '',
  status: 1,
  is_show: 1,
  sort: '',
};
const categoryForm = reactive({ ...formData });

const mode = ref('add');
const popupTitle = computed(() => {
  return mode.value === 'edit' ? '编辑分类' : '新增分类';
});

const loading = ref(false);
const visible = ref(false);

const open = (type = 'add') => {
  mode.value = type;
  visible.value = true;
  if (type === 'add') {
    // 重置
    for (const key in categoryForm) {
      // @ts-ignore
      categoryForm[key] = formData[key];
    }
  }
};

// 数据
const getDetail = async (data: any) => {
  mode.value = 'edit';
  for (const key in categoryForm) {
    if (data[key] != null && data[key] !== undefined) {
      // @ts-ignore
      categoryForm[key] = data[key];
    }
  }
  console.log(categoryForm);
};

const saveBtn = reactive({
  content: '保存',
  loading: false,
});

const emit = defineEmits(['success', 'close']);
const form = ref(null);
const rules: Record<string, FormRule[]> = {
  name: [{ required: true, message: '请输入分类名称', type: 'error' }],
};
const onSubmit = async () => {
  const result = await form.value.validate();
  if (typeof result !== 'object' && result) {
    saveBtn.content = '保存中...';
    saveBtn.loading = true;
    try {
      const res = mode.value === 'add' ? await add(categoryForm) : await edit(categoryForm);
      if (res.code === 1) {
        MessagePlugin.success('操作成功');
        visible.value = false;
        emit('success');
      } else {
        MessagePlugin.error(`操作失败：${res.msg}`);
      }
    } catch (error) {
      MessagePlugin.error('操作失败');
    } finally {
      saveBtn.content = '保存';
      saveBtn.loading = false;
    }
  }
};

defineExpose({
  open,
  getDetail,
});

const setPic = async (url: any) => {
  categoryForm.pic = url;
};
const setBgPic = async (url: any) => {
  categoryForm.bg_pic = url;
};
</script>
<style lang="less" scoped></style>
