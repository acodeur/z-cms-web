<template>
  <div class="system-department">
    <page-search
      ref="pageSearchRef"
      :config="config"
      :model="model"
      @handle-search="handleSearch"
      @handle-reset="handleReset"
    >
    </page-search>
    <page-content
      ref="pageContentRef"
      :config="contentConfig"
      :model="contentModel"
      @handle-add="handleAdd"
      @handle-edit="handleEdit"
      @handle-delete="handleDelete"
      @handle-current-page-change="handleCurrentPageChange"
      @handle-page-size-change="handlePageSizeChange"
    ></page-content>
    <page-dialog ref="pageDialogRef" :config="dialogConfigRef" @handle-confirm="handleConfirm">
      <template #datetime="{ formItem, formData }">
        <el-input v-model="formData[formItem.field]" v-bind="formItem.componentProps"></el-input>
      </template>
    </page-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import contentConfig from './config/content.config'
import searchConfig from './config/search.config'
import dialogConfig from './config/dialog.config'
import useSystemStore from '@/stores/home/system/system'
import { storeToRefs } from 'pinia'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { DialogType } from '@/components/page/type'
import { formatDate } from '@/utils/format'

const { config, model } = searchConfig
const { pagination } = contentConfig
const { pageSize: initPageSize, currentPage: initPageNum } = pagination
const dialogConfigRef = reactive(dialogConfig)
const pageSearchRef = ref()
const pageContentRef = ref()
const pageDialogRef = ref()

let currentSystemSearchReq: Record<string, any> = {}

//初始化值
const systemStore = useSystemStore()
const { dataList, totalCount } = storeToRefs(systemStore)
const contentModel = reactive({
  dataList,
  totalCount,
})
const systemSearchReq = {
  pageNum: initPageNum,
  pageSize: initPageSize,
}
systemStore.getSystemData(contentConfig.pageName, systemSearchReq)

// 搜索操作
const handleSearch = (
  formData: Record<string, any> = {},
  _pageNum: number = initPageNum,
  _pageSize: number = initPageSize,
) => {
  const systemSearchReq = {
    ...formData,
    pageNum: _pageNum ?? initPageNum,
    pageSize: _pageSize ?? initPageSize,
  }
  systemStore.getSystemData(contentConfig.pageName, systemSearchReq).then(() => {
    pageContentRef.value.updatePagination({
      pageSize: _pageSize ?? initPageSize,
      currentPage: _pageNum ?? initPageNum,
    })
  })
}
const handleReset = () => {
  pagination.currentPage = initPageNum
  pagination.pageSize = initPageSize
  handleSearch()
}

// 内容操作
function handleAdd() {
  const pageDialog = pageDialogRef.value
  pageDialog.formRef?.resetFields()
  dialogConfigRef.formConfig.model = {}
  pageDialog.type = 'add'
  pageDialog.visiable = true
}
function handleEdit(index: number, row: any) {
  const pageDialog = pageDialogRef.value
  pageDialog.formRef?.resetFields()
  row.createAt = formatDate(row.createAt)
  row.updateAt = formatDate(row.updateAt)
  dialogConfigRef.formConfig.model = { ...row }
  pageDialog.type = 'edit'
  pageDialog.visiable = true
}
function handleDelete(index: number, row: any) {
  ElMessageBox.confirm('此操作将删除该用户, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    draggable: true,
  }).then(() => {
    // 删除
    systemStore.deleteSystemData(contentConfig.pageName, row.id).then(() => {
      const { pageNum, pageSize, ...formData } = currentSystemSearchReq
      handleSearch(formData, pageNum, pageSize)
    })
    ElMessage({
      type: 'success',
      message: '删除成功!',
    })
  })
}
function handleConfirm(formData: Record<string, any>, type: DialogType) {
  console.log(formData)
  if (type === 'add') {
    systemStore.addSystemData(contentConfig.pageName, formData).then(() => {
      pageDialogRef.value.visiable = false
    })
  }
  if (type === 'edit') {
    systemStore.editSystemData(contentConfig.pageName, formData).then(() => {
      pageDialogRef.value.visiable = false
    })
  }
}

// 分页操作
function handleCurrentPageChange(val: number) {
  pagination.currentPage = val
  const systemDepartmentSearchReq = {
    formData: currentSystemSearchReq.formData ?? {},
    pageNum: val,
    pageSize: pagination.pageSize,
  }
  systemStore.getSystemData(contentConfig.pageName, systemDepartmentSearchReq)
}
function handlePageSizeChange(val: number) {
  pagination.pageSize = val
  const systemDepartmentSearchReq = {
    formData: currentSystemSearchReq.formData ?? {},
    pageNum: pagination.currentPage,
    pageSize: val,
  }
  systemStore.getSystemData(contentConfig.pageName, systemDepartmentSearchReq)
}

// action订阅器
systemStore.$onAction(({ name, args, after, onError }) => {
  after((resolvedValue) => {
    if (name === 'getSystemData' && args[0] === contentConfig.pageName) {
      console.log('getSystemData ===>', resolvedValue)
      currentSystemSearchReq = { ...args[1] }
    }
    if (
      (name === 'addSystemData' || name === 'editSystemData' || name === 'deleteSystemData') &&
      args[0] === contentConfig.pageName
    ) {
      console.log('add/edit/deleteSystemData ===>', resolvedValue)
      const { pageNum, pageSize, ...formData } = currentSystemSearchReq
      handleSearch(formData, pageNum, pageSize)
    }
  })
})
</script>

<style lang="less" scoped>
.system-department {
  background-color: #f0f0f0;
  border-radius: 8px;
  .page-dialog {
    padding: 5px;
    background-color: #f0f0f0;
    border-radius: 8px;

    // .el-input {
    //   width: 70%;
    // }
    // .el-select {
    //   width: 70%;
    // }
  }
}
</style>
