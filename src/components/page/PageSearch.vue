<template>
  <div class="page-search">
    <el-form ref="searchFormRef" :model="searchForm" v-bind="config.form">
      <el-row v-bind="config.row">
        <template v-for="item in config.formItems" :key="item.prop">
          <el-col v-bind="config.col">
            <el-form-item :label="item.label" :prop="item.prop" :rules="item.rules">
              <template v-if="item.type === 'input'">
                <el-input v-model="searchForm[item.prop]" :placeholder="item.placeholder" />
              </template>
              <template v-if="item.type === 'select'">
                <el-select v-model="searchForm[item.prop]" :placeholder="item.placeholder">
                  <el-option label="启用" value="1" />
                  <el-option label="禁用" value="0" />
                </el-select>
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
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
import {reactive, ref} from 'vue'
interface IProps {
  config: {
    pageName: string
    form: {
      labelWidth: string
      labelPosition: 'top' | 'left' | 'right'
    }
    row: {
      glutter: number
    }
    col: {
      span: number
    }
    formItems: Array<{
      type: string
      label: string
      placeholder?: string
      prop: string
      rules?: Array<any>
    }>
  }
}

const props = defineProps<IProps>()
const { config } = props
const searchForm = reactive({
  username: '',
  realname: '',
  phone: '',
  status: '1',
  createTime: '',
})
const searchFormRef = ref()


</script>

<style lang="less" scoped>
.page-search {
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
