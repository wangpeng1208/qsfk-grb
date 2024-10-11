<template>
  <t-card title="快捷菜单" hover-shadow :bordered="false">
    <template #actions>
      <t-button  @click="action">
        {{ actionTxt }}
      </t-button>
      <t-button variant="outline" @click="add">
        添加
      </t-button>
    </template>

    <t-row :gutter="{ xs: 8, sm: 16, md: 20, lg: 20, xl: 20, xxl: 20 }">
      <t-col v-for="(item, index) in userMenu" :key="index" @click="goPage(item.name)" class="menu">
        <div title="" hover-shadow class="menu-card">
          <div class="menu-item">
            <div :class="[
    'icon',
    getColorClass(index + 1)
  ]">
              <t-icon :name="item.icon" size="24px" />
            </div>
            <p class="title">
              {{ item.title }} <delete-icon @click="remove(item.id)" v-if="showRemoveIcon" />
            </p>
          </div>
        </div>
      </t-col>
    </t-row>
    <add-menu ref="addMenuRef" @refresh="refresh" />
  </t-card>
</template>
<script setup lang="ts">
import { AddIcon, DeleteIcon } from 'tdesign-icons-vue-next';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { deleteAdminUserShortcutMenu, getAdminUserShortcutMenu } from '@/api/admin/user';

import AddMenu from './AddMenu.vue';

// 用户自定义快捷菜单
const userMenu = ref([]);

const getUserShortcutMenu = async () => {
  const res = await getAdminUserShortcutMenu();
  if (res.code) {
    userMenu.value = res.data;
  }
};
getUserShortcutMenu();

const refresh = () => {
  getUserShortcutMenu();
  showRemoveIcon.value = false;
};

const router = useRouter();
const goPage = (name: string) => {
  if (showRemoveIcon.value) return;
  router.push({
    name,
  });
};
const addMenuRef = ref();
const add = () => {
  addMenuRef.value.init();
};
const showRemoveIcon = ref(false);
const actionTxt = ref('操作');
const action = () => {
  actionTxt.value = showRemoveIcon.value ? '操作' : '完成';
  showRemoveIcon.value = !showRemoveIcon.value;
};
const remove = async (id: number) => {
  const res = await deleteAdminUserShortcutMenu({
    menu_id: id,
  });
  if (res.code) {
    getUserShortcutMenu();
  }
};
// 返回颜色类名的方法
const getColorClass = (index: number) => {
  const colors = ['icon1', 'icon2', 'icon3', 'icon4', 'icon5', 'icon6', 'icon7', 'icon8'];
  return colors[index % colors.length];
};
</script>
<style scoped>
.menu-card {
  padding: 0 26px;

  .t-card__body {
    padding: 0 !important;
  }

  .menu-item {
    padding-top: 20px;
    /* 手势 */
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .icon {
      width: 58px;
      height: 58px;
      background-color: #f6f6f6;
      border-radius: 50%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }

    .icon1 {
      color: rgb(2, 86, 255);
    }

    .icon2 {
      color: rgb(159, 219, 29);
    }

    .icon3 {
      color: rgb(15, 198, 194);
    }

    .icon4 {
      color: rgb(179, 127, 235);
    }

    .icon5 {
      color: rgb(247, 186, 30);
    }

    .icon6 {
      color: rgb(125, 162, 255);
    }

    .icon7 {
      color: rgb(255, 125, 0);
    }

    .icon8 {
      color: rgb(15, 198, 194);
    }

    .title {
      margin-top: 10px;
      font-size: 12px;
      font-weight: 400;
      color: var(--td-text-color-secondary);
      line-height: 22px;
      white-space: nowrap;
    }
  }
}
.menu {
  margin-bottom: 10px;
}
</style>