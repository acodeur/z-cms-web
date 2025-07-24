<template>
  <div class="login-panel">
    <div class="login-container">
      <!-- 顶部标题 -->
      <h1 class="title">后台管理系统</h1>

      <!-- tabs切换 -->
      <div class="tab-control">
        <el-tabs
          type="border-card"
          v-model="activeName"
          stretch
          class="tabs"
          @tab-click="handleTabClick"
        >
          <el-tab-pane label="账户登录" name="account">
            <template #label>
              <div class="label">
                <el-icon><User /></el-icon>
                帐号登录
              </div>
            </template>
            <AccountPanel ref="accountPanelRef" />
          </el-tab-pane>
          <el-tab-pane label="手机登录" name="mobile">
            <template #label>
              <div class="label">
                <el-icon><Cellphone /></el-icon>
                手机登录
              </div>
            </template>
            <MobilePanel ref="mobilePanelRef" />
          </el-tab-pane>
        </el-tabs>
      </div>

      <!-- 底部区域 -->
      <div class="controls">
        <el-checkbox v-model="rememberMe">
          <span>记住密码</span>
        </el-checkbox>
        <el-link type="primary" :underline="false"> 忘记密码？ </el-link>
      </div>
      <el-button type="primary" size="large" class="login-btn" @click="handleLoginBtnClick">
        <span>立即登录</span>
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElCheckbox, ElLink, ElTabs, ElTabPane } from 'element-plus'
import { User, Cellphone } from '@element-plus/icons-vue'
import type { TabsPaneContext } from 'element-plus'
import AccountPanel from './cpns/AccountPanel.vue'
import MobilePanel from './cpns/MobilePanel.vue'
import router from '@/router'

const rememberMe = ref(false)
const activeName = ref('account')

const accountPanelRef = ref<InstanceType<typeof AccountPanel>>()
const handleLoginBtnClick = () => {
  router.push('/main')
  if (activeName.value === 'account') {
    // 处理账户登录逻辑
    console.log('账户登录')
    router.push('/main')
    // accountPanelRef.value?.login()
  } else if (activeName.value === 'mobile') {
    // 处理手机登录逻辑
    console.log('手机登录')
  }
}

const handleTabClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang="less" scoped>
.login-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/login-bg.svg');

  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 320px;

    .title {
      text-align: center;
      margin-bottom: 15px;
    }

    .tab-control {
      width: 100%;
    }

    .controls {
      display: flex;
      justify-content: space-between;
      width: 96%;
      margin-top: 5px;
      span {
        margin-left: 3px;
      }
    }

    .login-btn {
      width: 100%;
      margin-top: 5px;
    }
  }
}
</style>
