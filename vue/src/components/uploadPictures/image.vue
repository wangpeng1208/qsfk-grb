<template>
  <div>
    <div v-if="maxlength == 1">
      <t-image-viewer v-if="url" :images="[url]">
        <template #trigger="{ open }">
          <div class="image-container" v-if="url" @mouseenter="onMouseenter" @mouseleave="showIcons = false">
            <t-image alt="test" :src="url" :style="style" @click="modalPicTap(maxlength, title)" />
            <div v-if="showIcons && opt" class="icon-container">
              <t-space>
                <span class="icon-preview" @click="open"> <BrowseIcon />查看 </span>
                <span class="icon-delete" @click="deleteImage"> <DeleteIcon />删除 </span>
              </t-space>
            </div>
          </div>
        </template>
      </t-image-viewer>
      <t-image v-else :src="url" @click="modalPicTap(maxlength, title)" :style="style" :error="renderAddCustomIcon" />
    </div>
    <div v-else style="display: flex; gap: 15px">
      <div v-for="(url, index) in srcs" :key="index" class="srcs_image">
        <t-image :src="url" :style="style" :error="renderCustomIcon" :data-index="index" @dragstart="dragStart($event, index)" @dragover.prevent @drop="drop($event, index)" />
        <!-- 单图删除按钮 居在图片的右上角 -->
        <div v-if="opt" class="srcs_image_close" @mouseenter="showIcons = true" @mouseleave="showIcons = false">
          <MultiplyIcon class="rcs_image_close_icon" @click="srcs.splice(index, 1)" />
        </div>
      </div>
      <!-- 数量小于最大个数 默认添加 -->
      <t-image v-if="srcs.length < maxlength" @click="modalPicTap(maxlength, title)" :style="style" :error="renderAddCustomIcon" />
    </div>
    <t-dialog v-model:visible="modalPic" width="950px" :header="title" :closeOnOverlayClick="false" :footer="false">
      <uploadPictures :isChoice="isChoice" @getPic="getPic" @dialogStatus="dialogStatus" :maxlength="maxlength"> </uploadPictures>
    </t-dialog>
  </div>
</template>

<script lang="tsx" setup name="UpImage">
import { ref, watch } from 'vue';
import { ImageProps } from 'tdesign-vue-next';
import { AddIcon, ImageErrorIcon, BrowseIcon, DeleteIcon, MultiplyIcon } from 'tdesign-icons-vue-next';

import uploadPictures from './index.vue';

const renderCustomIcon: ImageProps['error'] = () => <ImageErrorIcon size="24" />;
const renderAddCustomIcon: ImageProps['error'] = () => <AddIcon size="24" />;
const showIcons = ref(false);
const onMouseenter = () => {
  if (!props.opt) return;
  showIcons.value = true;
};
const deleteImage = () => {
  src.value = null;
  emit('setPic', src.value);
};
const props = defineProps({
  url: {
    type: [String, File],
    default: null,
  },
  urls: {
    type: Array,
    default: () => [],
  },
  title: String,
  opt: {
    type: Boolean,
    default: false,
  },
  maxlength: {
    type: Number,
    default: 1,
  },
  style: {
    type: [String, Object],
    default: null,
  },
  isPage: {
    type: Boolean,
    default: false,
  },
  isIframe: {
    type: Boolean,
    default: false,
  },
  isShow: {
    type: Number,
    default: 1,
  },
  pageLimit: {
    type: Number,
    default: 0,
  },
});
// 拿出src作为可变参数
// 测试 图片面板
const modalPic = ref(false);
const isChoice = ref('');
const picTit = ref('');

const modalPicTap = (maxlength: any, picTits: any) => {
  modalPic.value = true;
  isChoice.value = maxlength > 1 ? '多选' : '单选';
  picTit.value = picTits;
};
// 获取单张图片信息 或者多张图片信息
const src = ref(props.url) as any;
const srcs = ref(props.urls) as any;
watch(
  () => props.urls,
  (newVal, oldVal) => {
    // 当 props.urls 发生变化时，更新 srcs
    srcs.value = newVal;
  },
);
const emit = defineEmits(['setPic', 'setPics']);
const getPic = (res: any) => {
  if (isChoice.value === '单选') {
    src.value = res.url;
    emit('setPic', src.value);
  } else {
    // 此时res是一个数组 取 数组里的每一项url作为一个新的数组
    srcs.value = res.map((item: { url: File }) => item.url);
    emit('setPic', srcs.value);
  }
};
const dialogStatus = (status: boolean) => {
  modalPic.value = status;
};

// 拖拽排序
const dragStart = (event: DragEvent, index: number) => {
  event.dataTransfer.setData('index', index.toString());
};
const drop = (event: DragEvent, index: number) => {
  const dragIndex = Number(event.dataTransfer.getData('index'));
  const dragItem = srcs.value[dragIndex];
  srcs.value.splice(dragIndex, 1);
  srcs.value.splice(index, 0, dragItem);
};
</script>

<style scoped>
.image-container {
  position: relative;
  display: inline-block;
}

/* 当鼠标悬停时，图标可见 */
.image-container:hover .icon-container {
  opacity: 1;
}

.icon-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.icon-container span {
  cursor: pointer;
}

.icon-preview,
.icon-delete {
  color: white;
  font-size: 12px;
}

/* 拖拽排序 */
.sortable-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.draggable-item {
  position: relative;
  cursor: move;
  user-select: none;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

/* srcs 图片组删除按钮 */
.srcs_image {
  position: relative;
  cursor: pointer;
}

.srcs_image_close {
  position: absolute;
  top: -4px;
  right: -4px;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 14px;
  width: 16px !important;
  height: 16px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rcs_image_close_icon {
  cursor: pointer;
  color: #fff;
  font-size: 16px;
}
</style>
