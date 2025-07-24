<template>
  <div class="account-panel">
    <el-form
      :model="accountForm"
      ref="accountFormRef"
      label-width="auto"
      label-position="right"
      :rules="rules"
      status-icon
    >
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
import type { ElForm, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'
import type { IAccount } from '@/types'
import useLoginStore from '@/stores/login/login'
import { localCache } from '@/utils/cache'

const REMEMBER_USER_KEY = 'rememberUser'

const rememberUser = localCache.getCache(REMEMBER_USER_KEY)
const accountForm = reactive<IAccount>({
  username: rememberUser?.username || '',
  password: rememberUser?.password || '',
})
const loginStore = useLoginStore()
const accountFormRef = ref<InstanceType<typeof ElForm>>()
const login = (rememberMe: boolean) => {
  accountFormRef.value?.validate((valid) => {
    if (!valid) {
      ElMessage.error('请填写正确的用户名和密码')
    } else {
      // Handle login logic here
      const account = {
        username: accountForm.username,
        password: accountForm.password,
      }
      loginStore
        .accountLogin(account)
        .then(() => {
          if (rememberMe) {
            localCache.setCache(REMEMBER_USER_KEY, account)
          } else {
            localCache.removeCache(REMEMBER_USER_KEY)
          }
        })
        .catch((error) => {
          ElMessage.error(error.message || '登录失败，请重试')
        })
    }
  })
}

// Define validation rules
interface RuleForm {
  username: string
  password: string
}
const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9_\-]{3,10}$/,
      message: '仅数字、字母、-、_，长度3-10位',
      trigger: 'change',
    },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度6-20位', trigger: 'blur' },
  ],
})

// Expose the form reference for external access
defineExpose({
  login,
})
</script>

<style lang="less" scoped>
.account-panel {
  padding: 20px 20px 2px;
  border-radius: 8px;
}
</style>
