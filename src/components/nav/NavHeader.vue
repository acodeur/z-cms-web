<template>
  <div class="header">
    <div class="left">
      <div class="icon">
        <el-icon size="25"><Fold /></el-icon>
      </div>
      <div class="title">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          <el-breadcrumb-item>角色列表</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="right">
      <div class="icon-group">
        <span>
          <span class="is-dot"></span>
          <el-icon><Bell /></el-icon>
        </span>
        <span><el-icon><Setting /></el-icon></span>
        <span><el-icon><Share /></el-icon></span>
      </div>
      <div class="avatar">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
      .el-avatar {
        display: block;
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
