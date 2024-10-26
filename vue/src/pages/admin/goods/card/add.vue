<template>
  <t-card class="basic-container" :bordered="false">
    <template #title>
      <t-space align="center">
        添加库存
        <t-button theme="primary" variant="text" @click="openGenerator"> 卡密生成器 </t-button>
        <template #separator>
          <t-divider layout="vertical" />
        </template>
      </t-space>
    </template>
    <template #actions>
      <t-button variant="text" theme="default" @click="router.push('/admin/goods/card')">
        <template #icon><t-icon name="rollback" /></template>
        返回列表
      </t-button>
    </template>
    <!-- 表单内容 -->
    <t-form ref="form" class="base-form" :data="formData" :rules="FORM_RULES" label-align="left" :label-width="100" @submit="onSubmit">
      <t-form-item label="选择商品" name="goods_id" tips="点击选择商品栏目后，继续点击选中商品">
        <t-cascader v-model="formData.goods_id" placeholder="请选择商品" clearable :options="goodsList" trigger="hover" :show-all-levels="false" valueMode="onlyLeaf" />
      </t-form-item>

      <t-form-item label="插入方式" name="order_type" help="">
        <wp-check-tag v-model="formData.order_type" :items="orderType" />
      </t-form-item>

      <t-form-item label="导入方式" name="import_type" help="">
        <wp-check-tag v-model="formData.import_type" :items="importType" />
      </t-form-item>

      <t-form-item label="导入格式" name="split_type">
        <wp-check-tag v-model="formData.split_type" :items="splitType" @actions="changeSplitType" />
      </t-form-item>

      <t-form-item v-if="formData.import_type === 1" label="虚拟卡内容" name="content" help="除了卡号和卡密之间有空格 其他地方不允许有空格 一次最多添加5000张">
        <t-textarea v-model="formData.content" :placeholder="textareaPlaceholder" :style="{ height: '400px' }" />
      </t-form-item>

      <t-form-item v-if="formData.import_type === 2" label="TXT文件" name="file" help="txt文件每行一个，每行除了卡号和卡密之间有空格 其他地方不允许有空格 一次最多添加5000行">
        <t-upload v-model="formData.files" accept="text/plain" theme="custom" :auto-upload="false" :abridge-name="[10, 8]" draggable @progress="onProgress">
          <template #dragContent="params">
            <ul v-if="formData.files && formData.files.length" style="padding: 0">
              <li v-for="file in formData.files" :key="file.name" style="list-style-type: none">{{ file.name }}</li>
            </ul>
            <template v-else>
              <p v-if="params && params.dragActive">释放鼠标</p>
              <t-link v-else-if="progress < 1">拖拽文件至此或点击上传文件</t-link>
            </template>
            <t-button v-if="formData.files && formData.files.length" size="small" style="margin-top: 36px">更换文件</t-button>
            <!-- <span>数据状态：{{params}}</span> -->
          </template>
        </t-upload>
      </t-form-item>

      <t-form-item label="卡密前缀" name="is_pre" help="开启后，取卡时会自动显示为（卡号：xxx 卡密：xxx）">
        <wp-check-tag v-model="formData.is_pre" :items="statusType" />
      </t-form-item>

      <t-form-item label="检查重复" name="check_card" help="">
        <wp-check-tag v-model="formData.check_card" :items="statusType" />
      </t-form-item>

      <t-form-item>
        <t-button size="large" theme="primary" class="form-submit-confirm" type="submit" :loading="saveLoading"> 提交 </t-button>
      </t-form-item>
    </t-form>
    <GenratorDrawer ref="generatorRef" />
  </t-card>
</template>
<script lang="ts">
export default {
  name: 'GoodsCardAdd',
};
</script>

<script setup lang="ts">
import { AddIcon } from 'tdesign-icons-vue-next';
import { FormRule, MessagePlugin } from 'tdesign-vue-next';
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

import { add } from '@/api/admin/goods/card';
import { structure } from '@/api/admin/goods/good';
import { debounce } from '@/utils/common';
import GenratorDrawer from './generator.vue';

const generatorRef = ref<InstanceType<typeof GenratorDrawer> | null>(null);
const openGenerator = () => {
  generatorRef.value?.init();
};

const importType = [
  {
    label: '手动输入',
    value: 1,
  },
  {
    label: 'txt文件',
    value: 2,
  },
];

const splitType = [
  {
    label: '自动识别',
    value: 'auto',
  },
  {
    label: '卡号+逗号+卡密',
    value: ',',
  },
  {
    label: '卡号+“|”+卡密',
    value: '|',
  },
  {
    label: '卡号+“----”+卡密',
    value: '----',
  },
  {
    label: '卡号+____”+卡密',
    value: '_____',
  },
  {
    label: '仅卡密',
    value: '',
  },
];

const orderType = [
  {
    label: '顺序插入',
    value: 1,
  },
  {
    label: '随机插入',
    value: 2,
  },
];

const statusType = [
  {
    label: '关闭',
    value: 0,
  },
  {
    label: '开启',
    value: 1,
  },
];

const router = useRouter();

const formData = reactive({
  goods_id: null,
  order_type: 1,
  import_type: 1,
  split_type: 'auto',
  files: [],
  is_pre: 0,
  check_card: 0,
  content: '',
});

const { query } = router.currentRoute.value as any;
Object.keys(query).forEach((key) => {
  if ((formData as any)[key] !== undefined) {
    (formData as any)[key] = Number(query[key]);
  }
});

const goodsList = ref([]);
const initGoodsList = async () => {
  try {
    const { data } = await structure();
    goodsList.value = data;
  } catch (e) {
    console.log(e);
  }
};
const form = ref(null);
const FORM_RULES: Record<string, FormRule[]> = {
  goods_id: [{ required: true, message: '请选择商品', type: 'error' }],
  content: [{ required: true, message: '请输入虚拟卡内容', type: 'error' }],
  split_type: [{ required: false, message: '请选择导入格式', type: 'error' }],
};

const textareaPlaceholder = ref('请输入虚拟卡内容');
const changeSplitType = (e: any) => {
  if (e === ',') {
    textareaPlaceholder.value = `请输入虚拟卡内容，每行一个
    例如：
    卡号1111,卡密2222
    卡号3333,卡密4444`;
  } else if (e === '|') {
    textareaPlaceholder.value = `请输入虚拟卡内容，每行一个
    例如：
    卡号1111|卡密2222
    卡号3333|卡密4444`;
  } else if (e === '----') {
    textareaPlaceholder.value = `请输入虚拟卡内容，每行一个
    例如：
    卡号1111----卡密2222
    卡号3333----卡密4444`;
  } else if (e === '_____') {
    textareaPlaceholder.value = `请输入虚拟卡内容，每行一个
    例如：
    卡号1111_____卡密2222
    卡号3333_____卡密4444`;
  } else if (e === '') {
    textareaPlaceholder.value = `请输入虚拟卡内容，每行一个
    （卡号卡密是写在一起的形式，或者只有卡密、卡号）
    例如：
    卡号1111卡密2222
    卡号3333卡密4444
    卡密4444
    卡密5555555555`;
  }
};
onMounted(() => {
  initGoodsList();
});
const saveLoading = ref(false);
const onSubmit = debounce(async () => {
  const result = await form.value.validate();
  if (typeof result !== 'object' && result) {
    saveLoading.value = true;
    const submitForm = {
      ...formData,
    };
    try {
      const result = await add(submitForm);
      if (result.code === 1) {
        MessagePlugin.success('新增成功');
        router.push('/admin/goods/card');
      } else {
        MessagePlugin.error(`新增失败：${result.msg}`);
      }
    } catch (error) {
      MessagePlugin.error('新增失败');
    }
    saveLoading.value = false;
  }
});
const progress = ref(0);
const onProgress = (val: any) => {
  console.log('进度：', val);
  progress.value = val;
};
</script>

<style lang="less" scoped>
:deep(.t-upload__dragger) {
  width: 800px;
  height: 300px;
}

:deep(.t-input__help) {
  font-size: 11px;
  color: rgb(153, 153, 153);
  margin: 11px 0;
}

:deep(.t-textarea__inner) {
  height: 300px;
}

:deep(.t-cascader__menu) {
  width: 260px;
}
</style>
