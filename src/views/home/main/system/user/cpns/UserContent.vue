<template>
  <div class="user-content">
    <el-table :data="user.dataList" stripe>
      <el-table-column type="index" label="序号" align="center" width="60"> </el-table-column>
      <!-- <el-table-column prop="id"  width="100"> </el-table-column> -->
      <el-table-column prop="name" label="用户名" align="center"> </el-table-column>
      <el-table-column prop="realname" label="姓名" align="center"> </el-table-column>
      <el-table-column prop="cellphone" label="手机号" align="center"> </el-table-column>
      <el-table-column prop="enable" label="状态" align="center">
        <template #default="scope">
          <el-tag :type="scope.row.enable ? 'success' : 'danger'">
            {{ scope.row.enable ? '启用' : '禁用' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createAt" label="创建时间" align="center">
        <template #default="scope">
          {{ formatDate(scope.row.createAt) }}
        </template>
      </el-table-column>
      <el-table-column prop="updateAt" label="更新时间" align="center">
        <template #default="scope">
          {{ formatDate(scope.row.updateAt) }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button
            size="small"
            class="op-btn"
            text
            type="primary"
            @click="handleEdit(scope.$index, scope.row)"
          >
            <el-icon><Edit /></el-icon> 编辑
          </el-button>
          <el-button
            size="small"
            class="op-btn"
            text
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            <el-icon><Delete /></el-icon> 删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <user-dialog ref="userDialogRef" type="edit" @handle-reload="emit('handleReload')"></user-dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useSystemStore from '@/stores/home/system/system'
import { formatDate } from '@/utils/format'
import { ElMessage, ElMessageBox } from 'element-plus'
import { ref } from 'vue'
import UserDialog from './UserDialog.vue'

const emit = defineEmits(['handleReload'])

const systemStore = useSystemStore()
const { user } = storeToRefs(systemStore)
const userDialogRef = ref<InstanceType<typeof UserDialog>>()

function handleEdit(index: number, row: any) {
  userDialogRef.value?.openEditDialog(row)
}
function handleDelete(index: number, row: any) {
  ElMessageBox.confirm('此操作将删除该用户, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    draggable: true,
  }).then(() => {
    // 删除
    systemStore.deleteSystemUserData(row.id)
    ElMessage({
      type: 'success',
      message: '删除成功!',
    })
    emit('handleReload')
  })
}
</script>

<style lang="less" scoped>
.user-content {
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 8px;

  .op-btn {
    margin: 0 5px;
  }
}
</style>
