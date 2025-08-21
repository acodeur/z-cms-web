<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watchEffect } from 'vue'
import * as echarts from 'echarts'

interface IProps {
  options: echarts.EChartsOption
}

const props = defineProps<IProps>()
const echartRef = ref<HTMLElement>()
let echartInstance: echarts.ECharts

onMounted(() => {
  // 初始化echarts实例
  echartInstance = echarts.init(echartRef.value!, 'dark', { renderer: 'canvas' })

  // 设置options
  watchEffect(() => {
    echartInstance.setOption(props.options)
  })

  // 自适应
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
})

// 销毁
onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
    echartInstance.resize()
  })
  echartInstance.dispose()
})


</script>

<style lang="less" scoped>
.base-echart {
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
