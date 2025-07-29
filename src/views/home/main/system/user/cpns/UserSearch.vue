<template>
  <div class="user-search">
    <el-form ref="searchFormRef" :model="searchForm" label-width="100px">
      <el-row :gutter="200">
        <el-col :span="8">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="searchForm.username" placeholder="请输入用户名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="姓名" prop="realname">
            <el-input v-model="searchForm.realname" placeholder="请输入姓名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号" prop="ceilphone">
            <el-input v-model="searchForm.phone" placeholder="请输入手机号" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态" prop="status">
            <el-select v-model="searchForm.status" placeholder="请选择状态">
              <el-option label="启用" value="1" />
              <el-option label="禁用" value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="createTime">
            <el-config-provider :locale="zhCn">
              <el-date-picker
                v-model="searchForm.createTime"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd"
              />
            </el-config-provider>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="search-btns">
      <el-button @click="handleReset" icon="Refresh">重置</el-button>
      <el-button type="primary" @click="handleSearch" icon="Search">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import useSystemStore from '@/stores/home/system/system'
import type { ISystemUserSearchReq } from '@/types'

const props = defineProps({
  pagination: {
    type: Object,
    default: () => ({}),
  },
})
defineExpose({
  handleSearch,
})
const emit = defineEmits(['handleReset'])
const searchForm = reactive({
  username: '',
  realname: '',
  phone: '',
  status: '1',
  createTime: '',
})
const searchFormRef = ref()
const systemStore = useSystemStore()

function handleSearch() {
  const searchReq: ISystemUserSearchReq = {
    ...searchForm,
    pageNum: props.pagination.currentPage,
    pageSize: props.pagination.pageSize,
  }
  systemStore.postSystemUserData(searchReq)
}

function handleReset() {
  searchFormRef.value?.resetFields()
  emit('handleReset')
}
</script>

<style lang="less" scoped>
.user-search {
  padding: 15px 5px;
  background-color: #f0f0f0;
  border-radius: 8px;

  .search-btns {
    text-align: right;
    margin-bottom: 10px;
  }
}
</style>
