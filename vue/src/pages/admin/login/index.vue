<template>
  <div
    class="login-wrapper"
    :style="{
      background: bgImgData.url ? `url(${bgImgData.url})  center repeat` : 'none',
    }"
  >
    <!-- <div class="bg-backdrop-layout" style="-webkit-backdrop-filter: blur(25px); backdrop-filter: blur(25px)"></div> -->
    <div class="h-full">
      <div class="login-container mx-auto">
        <div class="cp">
          <div class="title-container">
            <div class="title margin-no">
              管理员登录
            </div>
          </div>

          <t-form ref="form" class="item-container" :data="formData" :rules="FORM_RULES" label-width="0" @submit="onSubmit">
            <template v-if="type == 'password'">
              <t-form-item name="username">
                <t-input v-model="formData.username" size="large" placeholder="请输入账号/手机号/邮箱">
                  <template #prefix-icon>
                    <t-icon name="user" />
                  </template>
                </t-input>
              </t-form-item>

              <t-form-item name="password">
                <t-input v-model="formData.password" size="large" :type="showPsw ? 'text' : 'password'" clearable placeholder="请输入登录密码">
                  <template #prefix-icon>
                    <t-icon name="lock-on" />
                  </template>
                  <template #suffix-icon>
                    <t-icon :name="showPsw ? 'browse' : 'browse-off'" @click="showPsw = !showPsw" />
                  </template>
                </t-input>
              </t-form-item>
            </template>

            <t-form-item class="btn-container">
              <t-button block type="submit" size="large" :disabled="disabled"> {{ opt }} </t-button>
            </t-form-item>
          </t-form>
        </div>
      </div>
    </div>
    <footer class="copyright"><span v-html="siteInfoCopyright"></span></footer>
  </div>
</template>

<script setup lang="ts">
import { FormInstanceFunctions, FormRule, MessagePlugin, SubmitContext } from 'tdesign-vue-next';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import { bindBgImg } from '@/api/admin/user';
import { useAdminUserStore, useSiteStore } from '@/store';

// 获取背景图
const bgImgData = ref({
  url: '',
});
const getBgImg = async () => {
  const res = await bindBgImg();
  bgImgData.value = res.data;
};
getBgImg();

const router = useRouter();

const userStore = useAdminUserStore();
const init = () => {
  if (userStore.accessToken) {
    MessagePlugin.success('已登录, 正在跳转到工作台...');
    router.push({
      path: '/admin/workbench',
    });
  }
};
init();
const INITIAL_DATA = {
  username: '',
  password: '',
};

const FORM_RULES: Record<string, FormRule[]> = {
  username: [{ required: true, message: '用户名必填', type: 'error' }],
  password: [{ required: true, message: '密码必填', type: 'error' }],
};

const type = ref('password');

const form = ref<FormInstanceFunctions>();
const formData = ref({ ...INITIAL_DATA });
const showPsw = ref(false);

const opt = ref('登 录');
const disabled = ref(false);
const onSubmit = async (ctx: SubmitContext) => {
  if (ctx.validateResult === true) {
    opt.value = '登录中...';
    disabled.value = true;
    try {
      await userStore.login(formData.value);
      MessagePlugin.success('登陆成功');
      router.push({
        path: '/admin/workbench',
      });
      disabled.value = false;
    } catch (e) {
      MessagePlugin.error(e.msg);
      disabled.value = false;
      opt.value = '登录';
    }
  }
};
// 底部信息
const siteStore = useSiteStore();
const siteInfoCopyright = computed(() => siteStore.config.site_info_copyright);
</script>

<style lang="less" scoped>
@import url('./static/index.less');
</style>
