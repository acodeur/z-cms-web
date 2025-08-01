<template>
  <div class="header">
    <div class="left">
      <div class="icon">
        <el-icon size="25" @click="handleMenuIconClick">
          <component :is="isCollapse ? 'Fold' : 'Expand'" />
        </el-icon>
      </div>
      <div class="title">
        <el-breadcrumb separator="/">
          <template v-for="item in breadcrumb" :key="item.name">
            <el-breadcrumb-item v-if="item.path" :to="item.path">{{ item.name }}</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
      </div>
    </div>
    <div class="right">
      <div class="icon-group">
        <span>
          <span class="is-dot"></span>
          <el-icon><Bell /></el-icon>
        </span>
        <span
          ><el-icon><Setting /></el-icon
        ></span>
        <span
          ><el-icon><Share /></el-icon
        ></span>
      </div>
      <div class="avatar">
        <el-dropdown>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="userCenter">个人中心</el-dropdown-item>
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import useLoginStore from '@/stores/login/login'
import type { IBreadcrumb } from '@/types'
import assistant from '@/utils/assistant'
import { computed, ref } from 'vue'
import { useRoute, type RouteLocation } from 'vue-router'

const emit = defineEmits(['handleCollapse'])

const isCollapse = ref(false)
function handleMenuIconClick() {
  isCollapse.value = !isCollapse.value
  emit('handleCollapse', isCollapse.value)
}

// breadcrumb
const route = useRoute()
const loginStore = useLoginStore()
const breadcrumb = computed(() => getBreadcrumb(route, loginStore.userMenus))
function getBreadcrumb(route: RouteLocation, userMenus: any[]): IBreadcrumb[] {
  const breadcrumb: IBreadcrumb[] = []
  const path = route.path
  for (const menu of userMenus) {
    for (const subItem of menu.children) {
      if (subItem.url === path) {
        breadcrumb.push({ path: menu.url, name: menu.name })
        breadcrumb.push({ path: subItem.url, name: subItem.name })
        return breadcrumb
      }
    }
  }
  return breadcrumb
}

const userCenter = () => {
  console.log('个人中心')
}

const logout = () => {
  assistant.removeAllCache()
  router.push('/login')
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  .left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .icon {
      color: #001529;
      line-height: 100%;
    }
    .title {
      padding: 0 10px;
    }
  }
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10%;
    .icon-group {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      span {
        position: relative;
        line-height: 100%;
      }
      .el-icon {
        margin-right: 15px;
        font-size: 18px;
        cursor: pointer;
      }
      .is-dot {
        position: absolute;
        top: -2px;
        right: 12px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: var(--el-color-danger);
      }
    }
    .avatar {
      .el-dropdown {
        display: block;
        cursor: pointer;
      }
      .el-avatar {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
