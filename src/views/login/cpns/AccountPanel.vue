<template>
  <div class="account-panel">
    <el-form :model="accountForm" ref="accountFormRef" label-width="auto" label-position="right" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="accountForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import type { FormRules} from 'element-plus';
import { reactive } from 'vue'
const accountForm = reactive({
  username: '',
  password: '',
})

interface RuleForm {
  username: string;
  password: string;
}
const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度在 3 到 20 个字符之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度在 6 到 20 个字符之间', trigger: 'blur' }
  ]
})
</script>

<style lang="less" scoped>
.account-panel {
  padding: 20px 20px 2px;
  border-radius: 8px;
}
</style>
