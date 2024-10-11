import { MessagePlugin } from 'tdesign-vue-next';
import { nextTick } from 'vue';
import useClipboard from 'vue-clipboard3';
import { baseUrl } from '@/api/base';
import { tableDelApi } from '@/api/base';
import { DialogPlugin } from 'tdesign-vue-next';

import router from '@/router/index';
/**
 * 复制
 * @param text
 */
export function copyText(text: string) {
  const { toClipboard } = useClipboard();
  toClipboard(String(text));
  MessagePlugin.success('复制成功');
}

const hexList: string[] = [];
for (let i = 0; i <= 15; i++) {
  hexList[i] = i.toString(16);
}

/**
 * 设置浏览器标题
 */
export async function setTitleFromRoute() {
  if (router.currentRoute.value.path === '/') {
    // 如果是首页
    const response = await fetch(window.location.origin);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const title = doc.querySelector('title')?.textContent || '';
    nextTick(() => {
      document.title = title;
    });
    return;
  }
  if (typeof router.currentRoute.value.meta.title !== 'string') {
    return;
  }
  nextTick(() => {
    const webTitle = router.currentRoute.value.meta.title as string;
    document.title = `${webTitle}`;
  });
}

// 金钱格式化 取2位小数
export function formatMoney(money: number) {
  return Number(money).toFixed(2);
}

// 加载更多 IntersectionObserver
export function loadMore(el: HTMLElement, callback: (entry: IntersectionObserverEntry) => void, options?: IntersectionObserverInit) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, options);

  observer.observe(el);
}

export function downloadFile(url: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = '';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// 通过url获取图片真实路径
export function getImgUrl(url: string) {
  // 如果url包含http则直接返回
  if (url.includes('http')) {
    return url;
  }
  return baseUrl + url;
}

/**
 * 防抖
 * @param fun 防抖函数
 * @param wait 防抖时间 默认300ms
 * @param immediate 是否立即执行
 * @returns
 */
export function debounce(func: Function, wait: number = 300, immediate: boolean = false) {
  let timer: any = null;
  return function (this: any, ...args: any) {
    if (timer) clearTimeout(timer);
    if (immediate) {
      const callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) func.apply(this, args);
    } else {
      timer = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    }
  };
}

/**
 * 节流
 * @param fun 节流函数
 * @param wait 节流时间
 * @param immediate 是否立即执行
 * @returns
 */
export function throttle(func: Function, wait: number, immediate: boolean = false) {
  let timer: any = null;
  let callNow = immediate;
  return function (this: any, ...args: any) {
    if (callNow) {
      func.apply(this, args);
      callNow = false;
    }
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args);
        timer = null;
      }, wait);
    }
  };
}
const openAnotherDialog = () => {
  const confirmDialog = DialogPlugin.confirm({
    header: '提交后不可再编辑会进入审批流程',
    body: '是否确认提交？',
    confirmBtn: {
      content: '提交',
      theme: 'primary',
      loading: false,
    },
    theme: 'warning',
    onConfirm: () => {
      confirmDialog.update({ confirmBtn: { content: '提交中', loading: true } });
      // confirmDialog.update({ confirmLoading: true });
      // confirmDialog.setConfirmLoading(true);
      const timer = setTimeout(() => {
        confirmDialog.update({ confirmBtn: { content: '提交', loading: false } });
        // confirmDialog.update({ confirmLoading: false });
        // confirmDialog.setConfirmLoading(false);
        confirmDialog.hide();
        clearTimeout(timer);
      }, 500);
    },
  });
};

// modalService.js
// 定义接口来描述 delfromData 的结构
interface DelFromData {
  title: string;
  info?: string;
  success?: () => Promise<any>; // 确保 success 是一个返回 Promise 的函数
}

export function modalSure(delfromData: DelFromData) {
  const { title, info } = delfromData;
  console.log(delfromData);
  const content = `
    确定要${title}吗？
    ${info ? `${info}` : ''}
  `;
  return new Promise((resolve, reject) => {
    const confirmDialog = DialogPlugin.confirm({
      header: '提示',
      body: content,
      onConfirm: async () => {
          try {
            confirmDialog.update({ confirmBtn: { content: '提交中', loading: true } });
            const res = await tableDelApi(delfromData);
            confirmDialog.hide();
            resolve(res);
          } catch (error) {
            reject(error);
          }
      
      },
    });
  });
}
