<template>
  <div class="menu">
    <div class="logo">
      <img src="@/assets/img/logo.svg" alt="Logo" />
      <span class="title">ZZone管理系统</span>
    </div>
    <div class="menu-container">
      <el-menu
        default-active=""
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
        :collapse="false"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="item in userMenus" :key="item.id">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon>
                <component :is="item.icon.replace('el-icon-', '')" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item :index="subItem.id + ''">{{ subItem.name }}</el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useLoginStore from '@/stores/login/login'
import { storeToRefs } from 'pinia'

const { userMenus } = storeToRefs(useLoginStore())

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
