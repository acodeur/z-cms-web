<template>
  <div class="mobile-panel">
    <el-form
      :model="mobileForm"
      ref="mobileFormRef"
      label-width="auto"
      label-position="right"
      :rules="rules"
      status-icon
    >
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="mobileForm.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="mobileForm.code" class="code-input" />
        <el-button type="primary" class="code-btn" @click="getSmsCode">获取验证码</el-button>
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

const rules = reactive({
  phone: [
    { required: true, message: '请输入手机号码', trigger: 'blur' },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '请输入有效的手机号码',
      trigger: 'change',
    },
  ],
  code: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^[0-9]{6}$/, message: '验证码为6位数字', trigger: 'blur' },
  ],
})

const getSmsCode = () => {
  console.log('获取验证码')
}
</script>

<style lang="less" scoped>
.mobile-panel {
  padding: 20px 20px 2px;
  border-radius: 8px;

  .code-input {
    width: 55%;
  }

  .code-btn {
    width: 42%;
    font-size: 12px;
    margin-left: 5px;
  }
}
</style>
