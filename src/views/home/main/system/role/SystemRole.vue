<template>
  <div class="system-role">
    <dynamic-form ref="formRef" :i-form="iForm" v-model="formModel">
      <!-- slot示例：自定义图片上传组件 -->
      <template #avatarUpload="{ model }">
        <el-upload
          :action="'/upload'"
          :on-success="(res) => (model.avatar = res.url)"
          :file-list="[]"
        >
          <el-button type="primary">上传头像</el-button>
        </el-upload>
      </template>
    </dynamic-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IForm } from '@/components/form/type'

const formRef = ref()
const formModel = ref({})

const iForm: IForm = {
  formProps: {
    labelWidth: '100px',
    labelPosition: 'right',
  },
  formItems: [
    { field: 'name', label: '姓名', component: 'input', required: true },
    { field: 'age', label: '年龄', component: 'input' },
    {
      field: 'gender',
      label: '性别',
      component: 'select',
      options: [
        { label: '男', value: 'male' },
        { label: '女', value: 'female' },
      ],
    },
    {
      field: 'avatar',
      label: '头像',
      component: 'custom',
      slot: 'avatarUpload',
    },
    {
      field: 'introduction',
      label: '简介',
      component: 'input',
      componentProps: {
        type: 'textarea',
        rows: 4,
      },
    },
    {
      field: 'createAt',
      label: '创建时间',
      component: 'datepicker',
      componentProps: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
      },
    },
  ],
}
</script>

<style lang="less" scoped>
.system-role {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
