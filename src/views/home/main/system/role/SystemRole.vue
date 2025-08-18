<template>
  <div class="system-role">
    <dynamic-form ref="formRef" :i-form="searchConfig" v-model="formModel">
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
import searchConfig from './config/search.config'

const formRef = ref()
const formModel = ref({})

const handleSearch = () => {
  formRef.value
    ?.validate()
    .then(() => {
      console.log('✅ 提交数据：', formModel.value)
    })
    .catch(() => {
      console.log('❌ 表单校验失败')
    })
}

const handleReset = () => {
  formRef.value?.resetFields()
}
</script>

<style lang="less" scoped>
.system-role {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
