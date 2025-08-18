<template>
  <div class="system-department">
    <page-search :config="config" :init-values="initValues">
      <template #avatarUpload="{ model }">
        <el-upload
          :action="'/upload'"
          :on-success="(res) => (model.avatar = res.url)"
          :file-list="[]"
        >
          <el-button type="primary">上传头像</el-button>
        </el-upload>
      </template>
      <template #switch="{ model }">
        <el-switch
          :active-value="1"
          :inactive-value="0"
          v-model="value1"
          @change="() => handleSwitchChange(model)"
        />
      </template>
    </page-search>
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
import { ref } from 'vue'
import PageContent from '@/components/page/PageContent.vue'
import contentConfig from './config/content.config'
import searchConfig from './config/search.config'
import useSystemStore from '@/stores/home/system/system'
import { storeToRefs } from 'pinia'
import { ElMessage, ElMessageBox } from 'element-plus'

const { config, initValues } = searchConfig
const systemStore = useSystemStore()
//初始化值
const { dataList, totalCount } = storeToRefs(systemStore)
const systemDepartmentSearchReq = {
  pageNum: contentConfig.pagination.currentPage,
  pageSize: contentConfig.pagination.pageSize,
}
systemStore.getSystemData(contentConfig.pageName, systemDepartmentSearchReq)

const value1 = ref(1)
const handleSwitchChange = (model: any) => {
  console.log(model)
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
