import { request } from '@/utils/request';

export function login(params: any) {
  return request.post({
    url: '/adminapi/login/login',
    params,
  });
}

// 二次安全认证
export function authSafe(params: any) {
  return request.post({
    url: '/adminapi/login/authSafe',
    params,
  });
}

// bing背景图
export function bindBgImg() {
  return request.post({
    url: '/adminapi/login/getBackgroundImage',
  });
}

export function checkSafeLogin(params: any) {
  return request.post({
    url: '/adminapi/login/checkSafeLogin',
    params,
  });
}

// getAdminUserInfo
export function getAdminUserInfo(params: any) {
  return request.post({
    url: '/adminapi/user/getAdminUserInfo',
    params,
  });
}

// getAdminUserShortcutMenu
export function getAdminUserShortcutMenu() {
  return request.post({
    url: '/adminapi/user/getAdminUserShortcutMenu',
  });
}
// addAdminUserShortcutMenu
export function addAdminUserShortcutMenu(params: any) {
  return request.post({
    url: '/adminapi/user/addAdminUserShortcutMenu',
    params,
  });
}
// getAdminAllMenu
export function getAdminAllMenu() {
  return request.post({
    url: '/adminapi/user/getAdminAllMenu',
  });
}
// deleteAdminUserShortcutMenu
export function deleteAdminUserShortcutMenu(params: any) {
  return request.post({
    url: '/adminapi/user/deleteAdminUserShortcutMenu',
    params,
  });
}
