<template>
  <div class="border-br">
    <toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :default-config="toolbarConfig" :mode="mode" />
    <w-editor v-model="valueHtml" class="overflow-y-auto flex-1" :style="styles" :default-config="editorConfig" :mode="mode" @on-created="handleCreated" />
  </div>
</template>
<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css'; // 引入 css

import type { IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import { Editor as WEditor, Toolbar } from '@wangeditor/editor-for-vue';
import type { CSSProperties } from 'vue';
import { computed, onBeforeUnmount, shallowRef } from 'vue';

import { adminUpload, baseUrl } from '@/api/admin/config/config';

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    mode?: 'default' | 'simple';
    height?: string | number;
    width?: string | number;
    toolbarConfig?: Partial<IToolbarConfig>;
    userType?: string;
    path?: string;
  }>(),
  {
    modelValue: '',
    mode: 'default',
    height: '300px',
    width: '100%',
    toolbarConfig: () => ({}),
    userType: '',
    path: 'upload/res/',
  },
);

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();
const user = localStorage.getItem(props.userType);
const { accessToken: token } = JSON.parse(user);
// 上传接口及请求头
const uploadUrl = adminUpload;
const imgUploadUrl = ` ${baseUrl}${uploadUrl}`;
const imgUploadHeader = {
  Authorization: `Bearer ${token}`,
};
const uploadFn = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  // path
  formData.append('path', props.path);
  const res = await fetch(imgUploadUrl, {
    method: 'POST',
    body: formData,
    headers: imgUploadHeader,
  });
  const data = await res.json();
  return data.data.url;
};
type InsertFnType = (url: string, poster?: string) => void;

const editorConfig: Partial<IEditorConfig> = {
  MENU_CONF: {
    uploadImage: {
      // 自定义上传
      async customUpload(file: File, insertFn: InsertFnType) {
        const url = await uploadFn(file);
        insertFn(url);
      },
    },
  },
  autoFocus: false,
  placeholder: '请输入内容',
};
const addUnit = (value: string | number, unit = 'px') => {
  return !Object.is(Number(value), NaN) ? `${value}${unit}` : value;
};

const styles = computed<CSSProperties>(() => ({
  height: addUnit(props.height),
  width: addUnit(props.width),
}));
const valueHtml = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor: any) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};
</script>

<style scoped>
.w-e-full-screen-container {
  z-index: 999;
}
.w-e-text-container [data-slate-editor] ul {
  list-style: disc;
}
.w-e-text-container [data-slate-editor] ol {
  list-style: decimal;
}
h1 {
  font-size: 2em;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1.17em;
}
h4 {
  font-size: 1em;
}
h5 {
  font-size: 0.83em;
}
h1,
h2,
h3,
h4,
h5 {
  font-weight: bold;
}
.border-br {
  border: 1px solid var(--td-border-level-2-color);
}
:deep(.w-e-bar) {
  padding: 0;
}
</style>
