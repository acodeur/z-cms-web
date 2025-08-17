<template>
  <div class="page-search">
    <el-form ref="searchFormRef" :model="searchForm" v-bind="config.form">
      <el-row v-bind="config.row">
        <template v-for="item in config.formItems" :key="item.prop">
          <el-col v-bind="config.col">
            <el-form-item v-bind="item.attrs">
              <template v-if="item.component.type === 'select'">
                <el-select v-model="searchForm[item.component.model]" v-bind="item.component.attrs">
                  <template v-for="option in item.component.attrs.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
              <template v-else>
                <component
                  :is="getComponent(item)"
                  v-model="searchForm[item.component.model]"
                  v-bind="item.component.attrs"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElDatePicker, ElForm, ElInput, ElSelect } from 'element-plus'

interface IProps {
  config: {
    pageName: string
    form: {
      labelWidth?: string
      labelPosition?: 'top' | 'left' | 'right'
    }
    row: {
      glutter?: number
    }
    col: {
      span?: number
    }
    formItems: Array<{
      attrs?: any
      component: {
        type: string
        model: string
        attrs?: any
        slot?: string
      }
    }>
  }
}

interface ISearchForm {
  [key: string]: any
}

const props = defineProps<IProps>()
const { config } = props
const searchForm = reactive<ISearchForm>({})
const searchFormRef = ref()

const getComponent = (item: any) => {
  switch (item.component.type) {
    case 'select':
      return ElSelect
    case 'input':
      return ElInput
    case 'datepicker':
      return ElDatePicker
    case 'custom':
      return item.component.slot
    default:
      return ElInput
  }
  return 'el-input'
}
</script>

<style lang="less" scoped>
.page-search {
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
