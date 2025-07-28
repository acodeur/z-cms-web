<template>
  <div class="user-content">
    <el-table :data="userList">
      <el-table-column type="index" label="序号" align="center" width="60"> </el-table-column>
      <!-- <el-table-column prop="id"  width="100"> </el-table-column> -->
      <el-table-column prop="name" label="用户名" align="center"> </el-table-column>
      <el-table-column prop="realname" label="姓名" align="center"> </el-table-column>
      <el-table-column prop="cellphone" label="手机号" align="center"> </el-table-column>
      <el-table-column prop="enable" label="状态" align="center">
        <template #default="scope">
          <el-tag v-if="scope.row.enable" type="success">启用</el-tag>
          <el-tag v-else type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="createAt"
        label="创建时间"
        align="center"
        :formatter="formatUserDate"
      ></el-table-column>
      <el-table-column prop="updateAt" label="更新时间" align="center" :formatter="formatUserDate">
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"> 编辑 </el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useSystemStore from '@/stores/home/system/system'
import { formatDate } from '@/utils/format'

const { userList } = storeToRefs(useSystemStore())

function handleEdit(index: number, row: any) {
  console.log(index, row)
}
function handleDelete(index: number, row: any) {
  console.log(index, row)
}
function formatUserDate(row: any, column: any, cellValue: any, index: number) {
  return formatDate(cellValue)
}
</script>

<style lang="less" scoped>
.user-content {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
