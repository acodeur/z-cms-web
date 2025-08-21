<template>
  <div class="count-card">
    <div class="header">
      <span>{{ title }}</span>
      <el-tooltip effect="light" :content="tips" placement="left" popper-class="tooltip">
        <el-icon><Warning /></el-icon>
      </el-tooltip>
    </div>
    <div class="content">
      <span ref="number1Ref"></span>
    </div>
    <div class="footer">
      <span class="label">{{ subtitle }}</span>
      <span ref="number2Ref"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Warning } from '@element-plus/icons-vue'
import { CountUp } from 'countup.js'
interface IProps {
  title?: string
  tips?: string
  number1?: number
  number2?: number
  subtitle?: string
  amount?: string
}

const props = withDefaults(defineProps<IProps>(), {
  title: '',
  tips: '',
  number1: 0,
  number2: 0,
  subtitle: '',
  amount: '',
})
const number1Ref = ref<HTMLElement>()
const number2Ref = ref<HTMLElement>()
const countUpOptions = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
  duration: 2,
  prefix: props.amount === 'saleroom' ? '¥' : '',
}

onMounted(() => {
  const countUp1 = new CountUp(number1Ref.value!, props.number1, countUpOptions)
  const countUp2 = new CountUp(number2Ref.value!, props.number2, countUpOptions)
  countUp1.start()
  countUp2.start()
})
</script>

<style lang="less" scoped>
.count-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10px;
  font-size: 14px;
  height: 100px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #666;
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
