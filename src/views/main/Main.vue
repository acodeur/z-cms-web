<template>
  <div class="wrapper">
    <h2>wrapper {{ counterStore.count }} - {{ counterStore.doubleCount }}</h2>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/stores/counter'

const counterStore = useCounterStore()
</script>

<style lang="less" scoped>
.wrapper {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
