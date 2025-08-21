<template>
  <div class="analysis-dashboard">
    <!-- 顶部数据展示 -->
    <el-row :gutter="60">
      <el-col v-for="item in amounts" :key="item" :span="24 / amounts.length">
        <count-card></count-card>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>访问量</span>
            </div>
          </template>
          <bar-echart
            :labels="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
            :values="[10, 52, 200, 334, 390, 330, 220]"
          ></bar-echart>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>销售额</span>
            </div>
          </template>
          <line-echart
            :labels="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
            :values="[10, 52, 200, 334, 390, 330, 220]"
          ></line-echart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import CountCard from './cpns/CountCard.vue'
import BarEchart from '@/components/echarts/src/BarEchart.vue'

const amounts = [1, 2, 3, 4]
</script>

<style lang="less" scoped>
.analysis-dashboard {
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
