<template>
  <div class="menu">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="Logo" />
      <span class="title">ZZone管理系统</span>
    </div>
    <div class="menu-container">
      <el-menu
        default-active="1-1"
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
        :collapse="false"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><monitor /></el-icon>
            <span>系统总览</span>
          </template>
          <el-menu-item index="1-1">核心技术</el-menu-item>
          <el-menu-item index="1-2">商品统计</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><setting /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item index="2-1">用户管理</el-menu-item>
          <el-menu-item index="2-2">部门管理</el-menu-item>
          <el-menu-item index="2-3">菜单管理</el-menu-item>
          <el-menu-item index="2-4">角色管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><goods /></el-icon>
            <span>商品中心</span>
          </template>
          <el-menu-item index="3-1">商品类别</el-menu-item>
          <el-menu-item index="3-2">商品信息</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Goods, Monitor, Setting } from '@element-plus/icons-vue'
import useMainStore from '@/stores/main/main'

const mainStore = useMainStore()

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.menu {
  height: 100%;
  width: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    align-items: center;
    justify-items: flex-start;
    padding: 10px 0 0 10px;

    img {
      width: 10%;
      transform: rotate(-180deg);
    }
    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      margin-left: 10px;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  .menu-container {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  .el-menu {
    border-right: none;
    user-select: none;

    .el-sub-menu {
      .el-menu-item {
      }
      .el-menu-item:hover {
        color: #fff;
      }
      .el-menu-item.is-active {
        background-color: #409eff;
      }
    }
  }
}
</style>
