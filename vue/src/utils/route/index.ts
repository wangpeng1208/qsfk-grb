import cloneDeep from 'lodash/cloneDeep';
import { shallowRef } from 'vue';

import { RouteItem } from '@/api/model/permissionModel';
import { RouteMeta } from '@/types/interface';
import { BLANK_LAYOUT, EXCEPTION_COMPONENT, IFRAME, LAYOUT, PAGE_NOT_FOUND_ROUTE, PARENT_LAYOUT, PERSONAL_LAYOUT } from '@/utils/route/constant';

// vite 3+ support dynamic import from node_modules
const iconsPath = import.meta.glob('../../../node_modules/tdesign-icons-vue-next/esm/components/*.js');

const LayoutMap = new Map<string, () => Promise<typeof import('*.vue')>>();

LayoutMap.set('LAYOUT', LAYOUT);
LayoutMap.set('BLANK', BLANK_LAYOUT);
LayoutMap.set('IFRAME', IFRAME);

let dynamicViewsModules: Record<string, () => Promise<Recordable>>;

// 动态从包内引入单个Icon
async function getMenuIcon(iconName: string): Promise<string> {
  const RenderIcon = iconsPath[`../../../node_modules/tdesign-icons-vue-next/esm/components/${iconName}.js`];

  const Icon = await RenderIcon();
  // @ts-ignore
  return shallowRef(Icon.default);
}

// 动态引入路由组件
async function asyncImportRoute(routes: RouteItem[] | undefined) {
  dynamicViewsModules = dynamicViewsModules || import.meta.glob('../../pages/**/*.vue');
  if (!routes) return;

  routes.forEach(async (item) => {
    const { component, name } = item;
    const { children } = item;

    if (component) {
      const layoutFound = LayoutMap.get(component.toUpperCase());
      if (layoutFound) {
        item.component = layoutFound;
      } else {
        item.component = dynamicImport(dynamicViewsModules, component);
      }
    } else if (name) {
      item.component = PARENT_LAYOUT();
    }
    if (item.meta.icon) {
      // 如果 item.meta.icon以 http[s] 开头，则不做处理
      if (!item.meta.icon.startsWith('http')) {
        item.meta.icon = await getMenuIcon(item.meta.icon);
      } else {
        item.meta.icon = item.meta.icon;
      }
    }

    // eslint-disable-next-line no-unused-expressions
    children && (await asyncImportRoute(children));
  });
}

function dynamicImport(dynamicViewsModules: Record<string, () => Promise<Recordable>>, component: string) {
  const keys = Object.keys(dynamicViewsModules);
  const matchKeys = keys.filter((key) => {
    const k = key.replace('../../pages', '');
    const startFlag = component.startsWith('/');
    const endFlag = component.endsWith('.vue') || component.endsWith('.tsx');
    const startIndex = startFlag ? 0 : 1;
    const lastIndex = endFlag ? k.length : k.lastIndexOf('.');
    return k.substring(startIndex, lastIndex) === component;
  });
  if (matchKeys?.length === 1) {
    const matchKey = matchKeys[0];
    return dynamicViewsModules[matchKey];
  }
  if (matchKeys?.length > 1) {
    throw new Error('Please do not create `.vue` and `.TSX` files with the same file name in the same hierarchical directory under the views folder. This will cause dynamic introduction failure');
  } else {
    console.warn(`Can't find ${component} in pages folder`);
  }
  return EXCEPTION_COMPONENT;
}

// 将背景对象变成路由对象
export async function transformObjectToRoute<T = RouteItem>(routeList: RouteItem[]): Promise<T[]> {
  const app = window.location.pathname.split('/')[1];
  const com = app === 'personal' ? PERSONAL_LAYOUT : LAYOUT;
  // Promise.all 所有的异步操作完成
  await Promise.all(
    routeList.map(async (route) => {
      const component = route.component as string;
      // console.log(component);
      if (component) {
        if (component.toUpperCase() === 'LAYOUT') {
          route.component = LayoutMap.get(component.toUpperCase());
        } else {
          route.children = [cloneDeep(route)];
          route.component = com;
          route.meta.single = true;
          route.meta = (route.meta || {}) as RouteMeta;
        }
      } else {
        throw new Error('component is undefined');
      }
      // eslint-disable-next-line no-unused-expressions
      route.children && (await asyncImportRoute(route.children));
      if (route.meta.icon && !route.meta.icon.startsWith('http')) {
        route.meta.icon = await getMenuIcon(route.meta.icon);
      } else {
        route.meta.icon = route.meta.icon;
      }
    }),
  );

  return [PAGE_NOT_FOUND_ROUTE, ...routeList] as unknown as T[];
}