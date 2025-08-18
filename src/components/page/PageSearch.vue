<template>
  <div class="page-search">
    <div class="search-form">
      <dynamic-form ref="formRef" :i-form="config" :init-model="initValues">
        <template v-for="item in slotItems" :key="item.slot" v-slot:[item.slot]="{ model }">
          <slot :name="item.slot" :model="{ model }"></slot>
        </template>
      </dynamic-form>
    </div>
    <div class="search-btns">
      <el-button @click="handleReset" icon="Refresh">重置</el-button>
      <el-button type="primary" @click="handleSearch" icon="Search">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { IForm } from '../form/type'

interface IProps {
  config: IForm
  initValues?: Record<string, any>
}

const props = defineProps<IProps>()
const emits = defineEmits(['handleReset', 'handleSearch'])

const formRef = ref()
const slotItems = computed(() => props.config.formItems.filter((item) => item.slot))

const handleReset = () => {
  formRef.value?.resetFields()
  emits('handleReset')
}

const handleSearch = () => {
  formRef.value
    ?.validate()
    .then(() => {
      console.log('✅ 提交数据：', formRef.value.formModel)
      emits('handleSearch', formRef.value.formModel)
    })
    .catch(() => {
      console.log('❌ 表单校验失败')
    })
}
</script>

<style lang="less" scoped>
.page-search {
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;

  .search-btns {
    text-align: right;
    margin-bottom: 10px;
  }
}
</style>
