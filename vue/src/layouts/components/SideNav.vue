<template>
  <div :class="[sideNavCls]">
    <t-menu :class="menuCls" :theme="theme" :value="active" :collapsed="collapsed" :default-expanded="defaultExpanded"
      :expand-mutex="expandMutex" :width="sidenavWidth">

      <template #logo>
        <a v-if="showLogo" :class="`${prefix}-side-nav-logo-wrapper`" href="/">
          <img :src="getLogo()" :class="`${prefix}-side-nav-logo-${collapsed || collapsed2 ? 't' : 'tdesign'}-logo`" />
        </a>
      </template>
      <menu-content :nav-data="menus" />
      <template #operations>
        <span v-if="layout != 'sub'" class="version-container" style="float: right">
          <t-button theme="default" shape="square" variant="text" @click="changeCollapsed">
            <t-icon class="collapsed-icon" name="view-list" />
          </t-button>
        </span>
      </template>
    </t-menu>
    <div :class="`${prefix}-side-nav-placeholder${collapsed ? '-hidden' : ''}`" :style="{
    flex: `0 0 ${sidenavWidth}`,
    minWidth: sidenavWidth,
  }"></div>
  </div>

</template>

<script setup lang="ts">
import union from 'lodash/union';
import type { PropType } from 'vue';
import { ref, computed, onMounted } from 'vue';

import { prefix } from '@/config/global';
import { getActive, getRoutesExpanded } from '@/router';
import { useSettingStore, useSiteStore } from '@/store';
import type { MenuRoute } from '@/types/interface';

import MenuContent from './MenuContent.vue';

const sidenavWidth = computed(() => {
  return props.layout == 'sub' ? '79px' : `${useSettingStore().sidenavWidth}px`;
});
const changeCollapsed = () => {
  settingStore.updateConfig({
    isSidebarCompact: !settingStore.isSidebarCompact,
  });
};
const siteStore = useSiteStore();
const AssetLogoFull = siteStore.getSiteMerchantLogo;
const AssetLogo = siteStore.getSiteMerchantLogoSm;
const MIN_POINT = 992 - 1;

const props = defineProps({
  menu: {
    type: Array as PropType<MenuRoute[]>,
    default: () => [],
  },
  showLogo: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  isFixed: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  layout: {
    type: String as PropType<string>,
    default: '',
  },
  headerHeight: {
    type: String as PropType<string>,
    default: '64px',
  },
  theme: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light',
  },
  isCompact: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});

const collapsed = computed(() => useSettingStore().isSidebarCompact);


const expandMutex = computed(() => useSettingStore().expandMutex);

const active = computed(() => getActive());

const { layout } = useSettingStore();

// 查找 /merchant/user/loginlog 在 menu 的位置
// 计算顶级菜单集合
const collapsed2 = ref(false);
const menus = computed(() => {
  let newMenuRouters = props.menu;
  if (layout === 'sub') {
    newMenuRouters = props.menu.map((menu) => ({ ...menu, children: [] }));
    collapsed2.value = true;
  }
  return newMenuRouters;
});
const defaultExpanded = computed(() => {
  const path = getActive();
  const parentPath = path.substring(0, path.lastIndexOf('/'));
  const expanded = getRoutesExpanded();
  return union(expanded, parentPath === '' ? [] : [parentPath]);
});

const sideNavCls = computed(() => {
  const { isCompact } = props;
  return [
    `${prefix}-sidebar-layout`,
    {
      [`${prefix}-sidebar-compact`]: isCompact,
    },
  ];
});

const menuCls = computed(() => {
  const { showLogo, isFixed, layout } = props;
  return [
    `${prefix}-side-nav`,
    {
      [`${prefix}-side-nav-no-logo`]: !showLogo,
      [`${prefix}-side-nav-no-fixed`]: !isFixed,
      [`${prefix}-side-nav-mix-fixed`]: layout === 'mix' && isFixed,
    },
  ];
});

const settingStore = useSettingStore();

const autoCollapsed = () => {
  const isCompact = window.innerWidth <= MIN_POINT;
  settingStore.updateConfig({
    isSidebarCompact: isCompact,
  });
};

onMounted(() => {
  autoCollapsed();
  window.onresize = () => {
    autoCollapsed();
  };
});

const getLogo = () => {
  if (collapsed.value || layout === 'sub') return AssetLogo;
  return AssetLogoFull;
};
</script>

<style lang="less" scoped>
.version-container {
  color: var(--td-text-color-primary);
  opacity: 0.4;
}

:deep(.t-menu__logo > *) {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 200px;
  margin-left: 0;
}

:deep(.t-image__wrapper) {
  background-color: transparent;
}

:deep(.t-default-menu.t-is-collapsed .t-menu__logo > *) {
  margin: 0 var(--td-comp-margin-l);
}


:deep(.t-default-menu .t-menu__item:hover) {
  background-color: var(--td-bg-color-container-hover);
}

.sub-left-menu {
  :deep(.t-menu__item) {
    height: 65px !important;
    flex-direction: column;
    align-items: center;
    padding: 5px 3px 3px !important;
  }

  :deep(.t-default-menu .t-menu__item:hover) {
    background-color: var(--td-bg-color-container-hover);
  }

  :deep(.t-default-menu .t-menu__item.t-is-active:not(.t-is-opened)) {
    background-color: var(--td-brand-color-light);
    color: var(--td-brand-color);
    border-right: none;
  }

  :deep(.t-icon + .t-menu__content) {
    margin-left: 0;
  }

  :deep(.t-default-menu__inner .t-menu__logo:not(:empty)) {
    width: 65px;
    border-right: 1px solid var(--td-component-stroke);
    border-bottom: none;
    min-width: 80px;
  }

  :deep(.t-default-menu__inner) {
    border-right: -2px solid var(--td-component-stroke);
  }

  :deep(.t-default-menu__inner .t-menu__logo:not(:empty)) {
    border-right: 1px solid var(--td-component-stroke);
    border-bottom: none;
  }

  :deep(.t-menu__content) {
    height: 20px;
    line-height: 25px;
  }
}

.sub-hide {
  display: none;
}

.sub-show {
  display: block;

  :deep(.t-default-menu__inner .t-menu__logo:not(:empty)) {
    border-bottom: none;
  }
  :deep(.t-default-menu .t-menu__item.t-is-active:not(.t-is-opened)){
    background-color: transparent;
  }
}
</style>
