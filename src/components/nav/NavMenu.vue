<template>
  <div class="menu">
    <div class="logo">
      <img :class="collapse ? 'collapse' : 'expand'" src="@/assets/img/logo.svg" alt="Logo" />
      <transition name="fade">
        <span v-if="!collapse" class="title">ZZone后台管理系统</span>
      </transition>
    </div>
    <div class="menu-container">
      <el-menu
        default-active=""
        text-color="#b7bdc3"
        active-text-color="#fff"
        background-color="#001529"
        :collapse="collapse"
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
              <el-menu-item :index="subItem.id + ''" @click="handleMenuItemClick(subItem)">{{
                subItem.name
              }}</el-menu-item>
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
import { useRouter } from 'vue-router'
import assistant from '@/utils/assistant'

const props = defineProps({
  collapse: {
    type: Boolean,
    default: false,
  },
})

const { userMenus } = storeToRefs(useLoginStore())
const router = useRouter()
for (const menu of userMenus.value) {
  for (const subMenu of menu.children) {
    const componentName = assistant.getComponentNameFromUrlPath(subMenu.url)
    const componentPath = '../../views/home' + `${subMenu.url}/${componentName}.vue`
    router.addRoute('Home', {
      path: subMenu.url,
      name: subMenu.name,
      component: () => import(`${componentPath}`),
    })
  }
}

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleMenuItemClick = (item: any) => {
  router.push(item.url)
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
    padding: 10px 0 0 20px;

    img {
      width: 25px;
      height: 25px;
    }
    img.collapse {
      transform: rotate(180deg);
      transition: all 0.3s ease-in;
    }
    img.expand {
      transform: rotate(0deg);
      transition: all 0.3s ease-in;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-element {
  transition: opacity 0.5s;
}
</style>
