import '@/style/index.less';
import 'tdesign-vue-next/es/style/index.css';
// import '@/style/theme.css';
import './permission';

import { createApp } from 'vue';

import App from './App.vue';
import install from './install';

// 在 window 的 beforeunload 事件中清除标记
window.addEventListener('beforeunload', () => {
  sessionStorage.removeItem('hasFetchedSiteInfo');
});

const app = createApp(App);
app.use(install);
app.mount('#app');

console.log(' %c '.concat('骑士发卡个人版 v1.0.3', ' %c ' +  'www.qqss.net '), 'background: #269AFF; color: #FFFFFF; padding: 4px 0; border-radius: 4px 0px 0px 4px; ', 'background: #FFFFFF; color: #269AFF; padding: 2px 0; border-radius: 0px 4px 4px 0px;  border: 2px solid #269AFF;');