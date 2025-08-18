<template>
  <div class="system-department">
    <page-search
      ref="pageSearchRef"
      :config="config"
      :init-values="initValues"
      @handle-search="handleSearch"
      @handle-reset="handleReset"
    >
    </page-search>
    <page-content
      ref="pageContentRef"
      :config="contentConfig"
      :data-list="dataList"
      :total-count="totalCount"
      @handle-add="handleAdd"
      @handle-edit="handleEdit"
      @handle-delete="handleDelete"
      @handle-current-page-change="handleCurrentPageChange"
      @handle-page-size-change="handlePageSizeChange"
    ></page-content>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PageContent from '@/components/page/PageContent.vue'
import contentConfig from './config/content.config'
import searchConfig from './config/search.config'
import useSystemStore from '@/stores/home/system/system'
import { storeToRefs } from 'pinia'
import { ElMessage, ElMessageBox } from 'element-plus'

const { config, initValues } = searchConfig
const { pagination } = contentConfig
const { pageSize: initPageSize, currentPage: initPageNum } = pagination
const pageSearchRef = ref()
const pageContentRef = ref()

//初始化值
const systemStore = useSystemStore()
const { dataList, totalCount } = storeToRefs(systemStore)
const systemDepartmentSearchReq = {
  pageNum: initPageNum,
  pageSize: initPageSize,
}
systemStore.getSystemData(contentConfig.pageName, systemDepartmentSearchReq)

const handleSearch = (formData: Record<string, any> = {}) => {
  const systemSearchReq = {
    ...formData,
    pageNum: initPageNum,
    pageSize: initPageSize,
  }
  systemStore.getSystemData(contentConfig.pageName, systemSearchReq).then(() => {
    pageContentRef.value.updatePagination({
      pageSize: initPageSize,
      currentPage: initPageNum,
    })
  })
}

const handleReset = () => {
  pagination.currentPage = initPageNum
  pagination.pageSize = initPageSize
  handleSearch()
}

// 响应CRUD
function handleAdd() {
  console.log('add')
}
function handleEdit(index: number, row: any) {
  console.log('edit')
}
function handleDelete(index: number, row: any) {
  ElMessageBox.confirm('此操作将删除该用户, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    draggable: true,
  }).then(() => {
    // 删除
    systemStore.deleteSystemData(contentConfig.pageName, row.id)
    ElMessage({
      type: 'success',
      message: '删除成功!',
    })
  })
}
function handleCurrentPageChange(val: number) {
  pagination.currentPage = val
  const systemDepartmentSearchReq = {
    pageNum: val,
    pageSize: pagination.pageSize,
  }
  systemStore.getSystemData(contentConfig.pageName, systemDepartmentSearchReq)
}
function handlePageSizeChange(val: number) {
  pagination.pageSize = val
  const systemDepartmentSearchReq = {
    pageNum: pagination.currentPage,
    pageSize: val,
  }
  systemStore.getSystemData(contentConfig.pageName, systemDepartmentSearchReq)
}
</script>

<style lang="less" scoped>
.system-department {
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
