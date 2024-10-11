import { defineStore } from 'pinia';

import { authSafe, getAdminUserInfo, login } from '@/api/admin/user';

export const useAdminUserStore = defineStore('adminUser', {
  state: () => ({
    accessToken: localStorage.getItem('admin.accessToken'),
    userInfo: {
      id: 0,
      username: '',
      nickname: '',
      avatar: '',
    },
    perms: ['*'],
  }),

  getters: {},
  actions: {

    async login(userInfo: Record<string, unknown>) {
      const res = await login(userInfo);
      if (res.code === 1) {
        this.accessToken = res.data.access_token;
      } else {
        throw res;
      }
    },
    // 安全登录
    async safeLogin(code: string) {
      const res = await authSafe({
        auth_code: code,
      });
      if (res.code === 1) {
        this.accessToken = res.data.access_token;
      } else {
        throw res;
      }
    },
    async getUserInfo() {
      const res = await getAdminUserInfo({});
      if (res.code === 1) {
        this.userInfo = res.data.user;
        this.perms = res.data.perms.length > 0 ? res.data.perms : ['*'];
      } else {
        throw res;
      }
    },
    async logout() {
      this.$reset();
    },
  },
  persist: {
    afterRestore: () => {
      // const permissionStore = usePermissionStore();
      // permissionStore.initRoutes();
    },
    key: 'admin',
    paths: ['userInfo', 'accessToken'],
  },
});
