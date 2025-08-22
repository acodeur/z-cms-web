<template>
  <div class="analysis-dashboard">
    <!-- 顶部数据展示 -->
    <el-row :gutter="60">
      <el-col v-for="item in amounts" :key="item" :span="24 / amounts.length">
        <count-card v-bind="item"></count-card>
      </el-col>
    </el-row>
    <!-- 中间部分图表 -->
    <el-row :gutter="20">
      <el-col :span="7">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>分类商品数量(饼图)</span>
            </div>
          </template>
          <pie-echart :labels="countsData.labels" :values="countsData.values"></pie-echart>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>全国销量统计</span>
            </div>
          </template>
          <map-echart :mapData="saleAddressData"></map-echart>
        </el-card>
      </el-col>
      <el-col :span="7">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>分类商品数量(玫瑰图)</span>
            </div>
          </template>
          <rose-echart :labels="countsData.labels" :values="countsData.values"></rose-echart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import useAnalysisStore from '@/stores/home/analysis/analysis'
import CountCard from './cpns/CountCard.vue'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const analysisStore = useAnalysisStore()
// 获取顶部数据
analysisStore.fetchAnalysisAmountsData()
// 获取中间部分图表数据
analysisStore.fetchAnalysisCountsData()
analysisStore.fetchAnalysisSalesData()
// 获取不同城市销售数据
analysisStore.fetchAnalysisSaleAddressData()
const { amounts, counts, sales, saleAddress } = storeToRefs(analysisStore)
const countsData = computed(() => {
  const labels: string[] = []
  const values: number[] = []
  counts.value.forEach((item) => {
    labels.push(item.name)
    values.push(item.goodsCount)
  })
  return { labels, values }
})
const saleAddressData = computed(() => {
  return saleAddress.value.map((item) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<style lang="less" scoped>
.analysis-dashboard {
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
