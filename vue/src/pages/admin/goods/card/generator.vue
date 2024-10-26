<template>
  <t-drawer v-model:visible="visible" header="卡密生成器" :footer="false" :close-btn="true" size="80%">
    <t-form ref="form" class="base-form" :data="formData" label-align="left" :label-width="80" @submit="onSubmit">
      <!-- 卡号配置 -->
      <t-form-item label="卡号配置" tips=" ">
        <t-space>
          <t-input v-model="formData.n1.prefix" placeholder="卡号前缀" tips="卡号前缀" />
          <t-input v-model="formData.n1.suffix" placeholder="卡号后缀" tips="卡号后缀" />
          <t-input type="number" v-model="formData.n1.startpos" placeholder="卡号起始值" tips="卡号起始值" />
        </t-space>
      </t-form-item>
      <!-- 卡号卡密连接 单选 -->
      <t-form-item label="卡号卡密连接" tips=" ">
        <t-radio-group v-model="formData.splitFormat" :options="splitFormatOptions" />
      </t-form-item>

      <!-- 常用符号 多选框 -->
      <t-form-item label="卡密字符">
        <t-checkbox-group v-model="formData.n2.chars" :options="charsOptions" />
      </t-form-item>
      <!-- 生成的卡密长度 -->
      <t-form-item label="卡密长度">
        <t-input-number v-model="formData.n2.length" min="6" max="30" placeholder="生成的卡密长度" />
      </t-form-item>
      <t-form-item label="生成数量">
        <t-input-number type="number" min="1" v-model="formData.count" placeholder="生成数量" />
      </t-form-item>
      <!-- 仅生成卡密 -->
      <t-form-item label="仅生成卡密">
        <t-checkbox v-model="formData.onlyPwd" />
      </t-form-item>

      <t-form-item>
        <t-button theme="primary" class="form-submit-confirm" type="submit" :loading="saveLoading"> 生成 </t-button>
      </t-form-item>
    </t-form>
    <!-- 生成区域 -->
    <div v-if="result" style="padding: 15px 0">
      <t-textarea v-model="result" :style="{ height: '400px' }" />
      <!-- 复制 -->
      <t-button theme="success" @click="copyText(result)">复制</t-button>
    </div>
  </t-drawer>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { copyText } from '@/utils/common';

const charsOptions = [
  { label: '数字', value: 1 },
  { label: '小写字母', value: 2 },
  { label: '大写字母', value: 3 },
  { label: '八进制', value: 4 },
  { label: '十六进制-小写', value: 5 },
  { label: '十六进制-大写', value: 6 },
  { label: '二进制', value: 7 },
  { label: '点号', value: 8 },
  { label: '单引号', value: 9 },
  { label: '叹号', value: 10 },
  { label: '下划线"_"', value: 14 },
  { label: '减号"-"', value: 15 },
  { label: '井号"#"', value: 16 },
  { label: '美元符号"$"', value: 18 },
  { label: '百分号"%"', value: 19 },
  { label: '@', value: 20 },
  { label: '&', value: 21 },
  { label: '^', value: 22 },
];
// 卡号卡密连接格式options
const splitFormatOptions = [
  { label: '逗号', value: ',' },
  { label: '空格', value: ' ' },
  { label: '|', value: '|' },
  { label: '----', value: '----' },
  { label: '____', value: '____' },
];

const formData = reactive({
  n1: {
    prefix: '',
    suffix: '',
    startpos: '1',
  },
  n2: {
    chars: [1, 2, 3],
    length: 15,
  },
  count: 500,
  // 仅仅卡密
  onlyPwd: false,
  // 卡号卡密连接格式
  splitFormat: ',',
});
const result = ref('');
const saveLoading = ref(false);
const onSubmit = () => {
  saveLoading.value = true;
  let cardPwd = '';
  for (let i = 0; i < formData.count; i++) {
    // 生成卡号 生成卡密 以,分隔卡号和卡密 每行一个；卡号后缀加00i 然后在加上后缀
    let cardNo = formData.n1.prefix + (parseInt(formData.n1.startpos) + i).toString().padStart(3, '0') + formData.n1.suffix;
    // 生成卡密
    let pwd = '';
    for (let j = 0; j < formData.n2.length; j++) {
      let index = Math.floor(Math.random() * formData.n2.chars.length);
      // pwd应根据 formData.n2.chars 为选中的字符类型 来随机生成
      switch (formData.n2.chars[index]) {
        case 1:
          pwd += Math.floor(Math.random() * 10);
          break;
        case 2:
          pwd += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
          break;
        case 3:
          pwd += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
          break;
        case 4:
          pwd += Math.floor(Math.random() * 8);
          break;
        case 5:
          pwd += Math.floor(Math.random() * 16).toString(16);
          break;
        case 6:
          pwd += Math.floor(Math.random() * 16)
            .toString(16)
            .toUpperCase();
          break;
        case 7:
          pwd += Math.floor(Math.random() * 2);
          break;
        case 8:
          pwd += '.';
          break;
        case 9:
          pwd += "'";
          break;
        case 10:
          pwd += '!';
          break;
        case 14:
          pwd += '_';
          break;
        case 15:
          pwd += '-';
          break;
        case 16:
          pwd += '#';
          break;
        case 17:
          pwd += '/';
          break;
        case 18:
          pwd += '$';
          break;
        case 19:
          pwd += '%';
          break;
        case 20:
          pwd += '@';
          break;
        case 21:
          pwd += '&';
          break;
        case 22:
          pwd += '^';
          break;
      }
    }
    if (formData.onlyPwd) {
      cardNo = '';
    } else {
      cardNo += formData.splitFormat;
    }

    if (i === formData.count - 1) {
      cardPwd += cardNo + pwd;
    } else {
      cardPwd += cardNo + pwd + '\n';
    }
  }
  result.value = cardPwd;
  saveLoading.value = false;
};
const visible = ref(false);
const init = () => {
  visible.value = true;
};
defineExpose({ init });
</script>
