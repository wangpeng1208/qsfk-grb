import type { MenuListResult } from '@/api/model/permissionModel';
import { request } from '@/utils/request';

export function getPersonalMenuList() {
  return request.post<MenuListResult>({
    url: '/personalapi/menu/getMenuListI18n',
  });
}