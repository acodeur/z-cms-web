<template>
  <div class="count-card">
    <div class="header">
      <span>{{ 2 }}</span>
      <el-tooltip effect="light" :content="2" placement="left" popper-class="tooltip">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <span>¥ 126,560</span>
    </div>
    <div class="footer">
      <span class="label">日销售额</span>
      <span>¥ 126,560</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Warning } from '@element-plus/icons-vue'
</script>

<style lang="less" scoped>
.count-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10px;
  font-size: 14px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #666;
    .box-item {
      color: red !important;
    }
  }
  .content {
    margin: 10px 0;
    font-size: 20px;
  }
  .footer {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    .label {
      margin-right: 10px;
    }
  }
}


</style>
