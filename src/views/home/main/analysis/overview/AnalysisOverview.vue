<template>
  <div class="analysis-overview">
    <el-row>
      
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>总销售额</span>
            </div>
          </template>
          <div class="card-content">
            <span>¥ 126,560</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>访问量</span>
            </div>
          </template>
          <div class="card-content">
            <span>88460</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>支付笔数</span>
            </div>
          </template>
          <div class="card-content">
            <span>88460</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.analysis-overview {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
