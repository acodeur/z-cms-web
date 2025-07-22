<template>
  <div class="account-panel">
    <el-form :model="accountForm" ref="accountFormRef" label-width="auto" label-position="right">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="accountForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const accountForm = reactive({
  username: '',
  password: ''
})
</script>

<style lang="less" scoped>
.account-panel {
  padding: 20px 20px 2px ;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
