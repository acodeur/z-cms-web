<template>
  <div class="system-department">
    <page-content :></page-content>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page/PageContent.vue'
</script>

<style lang="less" scoped>
.system-department {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
