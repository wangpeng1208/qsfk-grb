import { MessagePlugin } from 'tdesign-vue-next';
import { RouteRecordRaw } from 'vue-router';

import router from '@/router';
import { getPermissionStore, getSiteStore, useAdminUserStore } from '@/store';
import { setTitleFromRoute } from '@/utils/common';
import { PAGE_NOT_FOUND_ROUTE } from '@/utils/route/constant';

router.beforeEach(async (to, from, next) => {

  const templateStore = getSiteStore();
  // 如果本地不存在site则请求网站基础信息
  if (!sessionStorage.getItem('hasFetchedSiteInfo')) {
    // 如果没有标记，那么获取配置信息
    await templateStore.getSiteConfig();
    // 然后在 sessionStorage 中设置标记
    sessionStorage.setItem('hasFetchedSiteInfo', 'true');
  }
 
  if (to.path === '/admin/login') {
    next();
    return;
  }
  const permissionStore = getPermissionStore();
  const adminUserStore = useAdminUserStore();

  const { whiteListRouters } = permissionStore;

  // 默认为商家端
  let app = '';
  // 假设有其他应用 ，并用数组存储
  const appList = ['admin'];
  // to.path中第一个/后的字符串,作为当前应用名称
  const toPathStart = to.path.split('/')[1];
  // to.path.split('/')[1] 不在appList中，则默认为商家端
  if (appList.includes(toPathStart)) {
    app = toPathStart;
  }
  // 通过app到对应的状态管理中获取对应的accessToken和accessType
  // switch语句根据app的值，选择对应的状态管理，方便后续扩展
  let appStore;
  switch (app) {
    case 'admin':
      appStore = adminUserStore;
      break;
    default:
      appStore = {} as any;
      break;
  }
  // 从状态管理中获取accessToken
  const { accessToken } = appStore;
  // 白名单直接进入
  if (whiteListRouters.indexOf(to.name as string) !== -1) {
    next();
  } else if (accessToken) {
    const { asyncRoutes } = permissionStore;
    // 加载动态路由
    if (asyncRoutes && asyncRoutes.length === 0) {
      const routeList: Array<RouteRecordRaw> = await permissionStore.buildAsyncRoutes(app);
      routeList.forEach((item: RouteRecordRaw) => {
        router.addRoute(item);
      });
      // 没有name，则跳转到404页面 - 路由未匹配到
      if (to.name === undefined) {
        // 为当前路由地址设置组件500页面
        const notFoundRoute = {
          path: to.fullPath,
          name: 'NotFound',
          component: () => import('@/pages/common/result/404/index.vue'),
        };
        router.addRoute(notFoundRoute);
      }
      if (to.name === PAGE_NOT_FOUND_ROUTE.name) {
        // 动态添加路由后，此处应当重定向到fullPath，否则会加载404页面内容
        next({ path: to.fullPath, replace: true, query: to.query });
      } else {
        const redirect = decodeURIComponent((from.query.redirect || to.path) as string);
        next(to.path === redirect ? { ...to, replace: true } : { path: redirect, query: to.query });
        return;
      }
    }
    // 动态路由加载过后
    if (router.hasRoute(to.name)) {
      next();
    } else {
      next(`/`);
    }
  } else {
    const pathStart = to.fullPath.split('/')[1];
    if (pathStart === 'admin') {
      MessagePlugin.error('请先登录');
      next({ path: '/' });
      return;
    }
    next({
      path: '/404',
    });
  }
});

router.afterEach((to) => {
  // 设置浏览器标题
  setTitleFromRoute();
});
