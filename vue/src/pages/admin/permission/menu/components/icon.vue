<template>
  <t-dialog v-model:visible="visible" :close-on-overlay-click="false" :destroy-on-close="true" header="选择图标" :close-on-esc-keydown="false" :footer="false" width="80%" top="20px">
    <div clearable placeholder="请选择菜单图标">
      <div v-for="item in options" :key="item.stem" class="overlay-options" @click="check(item.stem)">
        <div class="item" :class="icon == item.stem ? 'active' : ''">
          <t-icon :name="item.stem" />
        </div>
      </div>
    </div>
  </t-dialog>
</template>

<script setup lang="ts">
import { manifest } from 'tdesign-icons-vue-next';
import { ref } from 'vue';

const options = ref(manifest);

const visible = ref(false);
const icon = ref('');
const init = (ficon: string) => {
  visible.value = true;
  icon.value = ficon;
};

defineExpose({
  init,
});
const emit = defineEmits(['success']);
const check = (name: string) => {
  emit('success', name);
  visible.value = false;
};
</script>

<style lang="less" scoped>
// icon内联样式
.overlay-options {
  display: inline-block;
  font-size: 40px;
  margin: 2px;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #f0f0f0;
}
.active {
  border: 3px solid #409eff;
}
</style>
