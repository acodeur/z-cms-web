<template>
  <div class="mobile-panel">
    <el-form :model="mobileForm" ref="mobileFormRef" label-width="auto" label-position="right">
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="mobileForm.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="mobileForm.code" />
      </el-form-item>
    </el-form>
    <!-- 其他手机登录相关内容 -->
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const mobileForm = reactive({
  phone: '',
  code: '',
})
</script>

<style lang="less" scoped>
.mobile-panel {
  padding: 20px 20px 2px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
