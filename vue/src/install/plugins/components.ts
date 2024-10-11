import { App, defineAsyncComponent } from 'vue';

// 异步加载组件
const WpEditor = defineAsyncComponent(() => import('@/components/editor/index.vue'));
const WpImage = defineAsyncComponent(() => import('@/components/image/index.vue'));
const WpResult = defineAsyncComponent(() => import('@/components/result/index.vue'));
const WpCheckTag = defineAsyncComponent(() => import('@/components/tag/checkTag.vue'));
const WpUpload = defineAsyncComponent(() => import('@/components/upload/index.vue'));

// 组件注册
export default (app: App<Element>) => {
  app.component('WpImage', WpImage);
  app.component('WpEditor', WpEditor);
  app.component('WpCheckTag', WpCheckTag);
  app.component('WpUpload', WpUpload);
  app.component('WpResult', WpResult);
};
