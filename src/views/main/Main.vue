<template>
  <div class="main">
    <h2>main {{ counterStore.count }} - {{ counterStore.doubleCount }}</h2>
    <el-button @click="counterStore.incrementBy(1)">+</el-button>
    <el-button @click="counterStore.decrementBy(1)">-</el-button>
    <el-button @click="counterStore.resetCount">Reset</el-button>
  </div>
  <div class="logout">
    <el-button type="danger" @click="logout"> Logout </el-button>
  </div>
</template>

<script setup lang="ts">
import { ZZ_TOKEN } from '@/global/constants'
import router from '@/router'
import useCounterStore from '@/stores/counter'
import { localCache } from '@/utils/cache'

const counterStore = useCounterStore()

const logout = () => {
  localCache.removeCache(ZZ_TOKEN)
  // Redirect to login page
  router.push({ name: 'Login' })
}
</script>

<style lang="less" scoped>
.main {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
