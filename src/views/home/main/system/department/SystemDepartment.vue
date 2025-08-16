<template>
  <div class="system-department">
    <page-content
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
import PageContent from '@/components/page/PageContent.vue'
import contentConfig from './config/content.config'
import useSystemStore from '@/stores/home/system/system'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const systemStore = useSystemStore()
//初始化值
const { dataList, totalCount } = storeToRefs(systemStore)
const systemDepartmentSearchReq = {
  pageNum: contentConfig.pagination.currentPage,
  pageSize: contentConfig.pagination.pageSize,
}
systemStore.getSystemData(contentConfig.pageName, systemDepartmentSearchReq)

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
  contentConfig.pagination.currentPage = val
  const systemDepartmentSearchReq = {
    pageNum: val,
    pageSize: contentConfig.pagination.pageSize,
  }
  systemStore.getSystemData(contentConfig.pageName, systemDepartmentSearchReq)
}
function handlePageSizeChange(val: number) {
  contentConfig.pagination.pageSize = val
  const systemDepartmentSearchReq = {
    pageNum: contentConfig.pagination.currentPage,
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
