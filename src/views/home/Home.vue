<template>
  <div class="home">
    <el-container class="home-container">
      <el-aside width="200px">
        <nav-menu></nav-menu>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <nav-header></nav-header>
        </el-header>
        <el-main>Main</el-main>
        <el-footer height="50px"> Copyright © 2025 Zzone </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ZZ_TOKEN } from '@/global'
import router from '@/router'
import useCounterStore from '@/stores/counter'
import { localCache } from '@/utils/cache'
import { NavMenu, NavHeader, NavFooter } from '@/components/nav'
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
    }

    .el-footer {
      text-align: center;
      line-height: 50px;
      background-color: #f5f5f5;
    }
  }
}
</style>
