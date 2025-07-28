<template>
  <div class="home">
    <el-container class="home-container">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <nav-header @handle-collapse="handleCollapse"></nav-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer height="50px"> Copyright © 2025 Zzone </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { NavMenu, NavHeader, NavFooter } from '@/components/nav'
import { ref } from 'vue'

const isCollapse = ref(false)
function handleCollapse(collapse: boolean) {
  isCollapse.value = collapse
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;

  .home-container {
    height: 100%;

    .el-aside {
      overflow-x: hidden;
      overflow-y: hidden;
      background-color: #001529;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      transition: width 0.3s ease-in-out;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .el-header {
      background-color: #409eff;
      color: white;
      text-align: center;
      line-height: 50px;
    }

    .el-main {
      background-color: #f0f2f5;
      overflow-x: hidden;
    }

    .el-footer {
      text-align: center;
      line-height: 50px;
      background-color: #f5f5f5;
    }
  }
}
</style>
