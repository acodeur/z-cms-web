<template>
  <div class="system-user">
    <div class="search">
      <user-search></user-search>
    </div>
    <div class="content">
      <user-content></user-content>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="total, prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserSearch from './cpns/UserSearch.vue'
import UserContent from './cpns/UserContent.vue'

</script>

<style lang="less" scoped>
.system-user {
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
