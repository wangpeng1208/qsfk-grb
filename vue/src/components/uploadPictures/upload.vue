<template>
  <t-upload v-bind="$attrs" v-model="files" :action="imgUploadUrl" theme="custom" @fail="handleFail" :headers="uploadHeader" :data="data" :format-response="formatResponse">
    <t-button theme="primary">上传图片</t-button>
  </t-upload>
</template>

<script setup lang="ts" name="imgUpload">
import { ref, toRefs } from 'vue';
import { MessagePlugin, UploadProps } from 'tdesign-vue-next';

import { adminUpload, baseUrl } from '@/api/admin/config/config';

const files = ref<UploadProps['value']>([]);
const handleFail: UploadProps['onFail'] = ({ file }) => {
  MessagePlugin.error(`文件 ${file.name} 上传失败`);
};

const props = defineProps({
  app: String,
  // 直付通专用标识  zft=true
  zft: String,
  // 上传的额外参数
  data: {
    type: Object,
    default: () => ({}),
  },
});
const { app, zft } = toRefs(props);
// const files = ref<UploadProps['value']>([]);

const emit = defineEmits(['update']);
const formatResponse = (res: any) => {
  if (res.code === 0) {
    MessagePlugin.error(res.msg);
    return null;
  }
  emit('update');
  return res.data;
};
// 上传接口及请求头
const imgUploadUrl = ref();
// todo上传类型
const initUploadUrl = () => {
  switch (app.value) {
    case 'admin':
      imgUploadUrl.value = `${baseUrl}${adminUpload}`;
      break;
  }
};
initUploadUrl();
const user = localStorage.getItem(app.value);
const { accessToken: token } = JSON.parse(user);
const uploadHeader = ref({});
if (app.value !== undefined) {
  uploadHeader.value = {
    Authorization: `Bearer ${token}`,
  };
}
</script>
