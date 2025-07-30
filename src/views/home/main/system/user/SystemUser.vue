<template>
  <div class="system-user">
    <div class="search">
      <user-search
        ref="userSearchRef"
        :pagination="pagination"
        @handle-reset="handleReset"
      ></user-search>
    </div>
    <div class="content">
      <div class="header">
        <h3 class="title">用户列表</h3>
        <div class="button">
          <el-button type="primary" class="add-btn" @click="handleAddUser">添加用户</el-button>
        </div>
      </div>
      <user-content @handle-reload="handleReload"></user-content>
    </div>
    <div class="pagination">
      <el-config-provider :locale="zhCn">
        <el-pagination
          background
          layout="total, prev, pager, next, sizes"
          :page-sizes="[5, 10, 20, 50]"
          :total="totalCount"
          v-model:page-size="pagination.pageSize"
          v-model:current-page="pagination.currentPage"
          :pager-count="7"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        ></el-pagination>
      </el-config-provider>
    </div>
  </div>
  <user-dialog ref="userDialogRef" type="add" @handle-reload="handleReload"></user-dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import UserSearch from './cpns/UserSearch.vue'
import UserContent from './cpns/UserContent.vue'
import useSystemStore from '@/stores/home/system/system'
import UserDialog from './cpns/UserDialog.vue'
import { ref, reactive, onMounted } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const { totalCount } = storeToRefs(useSystemStore())
const pagination = reactive({
  currentPage: 1,
  pageSize: 10,
})
const userSearchRef = ref<InstanceType<typeof UserSearch>>()
const userDialogRef = ref<InstanceType<typeof UserDialog>>()

function handleAddUser() {
  userDialogRef.value?.openAddDialog()
}

function handleCurrentChange(val: number) {
  pagination.currentPage = val
  userSearchRef.value?.handleSearch()
}

function handleSizeChange(val: number) {
  pagination.pageSize = val
  userSearchRef.value?.handleSearch()
}

function handleReset() {
  pagination.currentPage = 1
  pagination.pageSize = 10
  userSearchRef.value?.handleSearch()
}

function handleReload() {
  userSearchRef.value?.handleSearch()
}

onMounted(() => {
  // 加载用户数据
  userSearchRef.value?.handleSearch()
})
</script>

<style lang="less" scoped>
.system-user {
  background-color: #f0f0f0;
  border-radius: 8px;

  .content {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 5px;

      .add-btn {
        width: 80px;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    .el-pagination {
      :deep(.el-select) {
        width: 100px;
      }
    }
  }
}
</style>
