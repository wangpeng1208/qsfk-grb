import uniq from 'lodash/uniq';
// , useRoute
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const env = import.meta.env.MODE || 'development';

// 匹配views里面所有的.vue文件，动态引入
const modules = import.meta.glob('/src/pages/**/*.vue');
export function getModulesKey() {
  return Object.keys(modules).map((item) => item.replace('/src/pages/', '').replace('.vue', ''));
}

// 测试开始
// const homepageModules = import.meta.glob('./a.ts', { eager: true });
// export const homepageRouterList: Array<RouteRecordRaw> = mapModuleRouterList(homepageModules);
// const whiteRouter = import.meta.glob('./white.ts', { eager: true });
// const whiteRouterList: Array<RouteRecordRaw> = mapModuleRouterList(whiteRouter);
// const allRoutes = [...homepageRouterList, ...whiteRouterList];
// 测试结束
const allRoutes: Array<RouteRecordRaw> = mapModuleRouterList(import.meta.glob('./white.ts', { eager: true }));

// 过滤路由所需要的数据
export function filterAsyncRoutes(routes: any[]) {
  return routes.map((route) => {
    const routeRecord = mapModuleRouterList(route);
    if (route.children != null && route.children && route.children.length) {
      // @ts-ignore

      routeRecord.children = filterAsyncRoutes(route.children);
    }
    // console.log(routeRecord);
    return routeRecord;
  });
}

// 固定路由模块转换为路由
export function mapModuleRouterList(modules: Record<string, unknown>): Array<RouteRecordRaw> {
  const routerList: Array<RouteRecordRaw> = [];
  Object.keys(modules).forEach((key) => {
    // @ts-ignore
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routerList.push(...modList);
  });
  return routerList;
}

export const getRoutesExpanded = () => {
  const expandedRoutes: Array<string> = [];
  return uniq(expandedRoutes);
};

export const getActive = (maxLevel = 3): string => {
  // const route = useRoute();
  const route = router.currentRoute.value;
  if (!route || !route.path) {
    return '';
  }
  return route.path
    .split('/')
    .filter((_item: string, index: number) => index <= maxLevel && index > 0)
    .map((item: string) => `/${item}`)
    .join('');
};

const router = createRouter({
  history: createWebHistory(env === 'site' ? '/starter/vue-next/' : import.meta.env.VITE_BASE_URL),
  routes: allRoutes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});
export default router;
