<template>
  <div class="page-content">
    <div class="header">
      <h3 class="title">{{ config?.header?.title ?? '数据列表' }}</h3>
      <div class="button">
        <el-button type="primary" class="add-btn" @click="handleAdd">
          {{ config?.header?.btnTxt ?? '新建数据' }}
        </el-button>
      </div>
    </div>
    <div class="table">
      <el-table :data="dataList" stripe>
        <template v-for="item in config.propList" :key="item.prop">
          <!-- 时间列 -->
          <template v-if="item.type === 'timer'">
            <el-table-column v-bind="item">
              <template #default="scope">
                {{ formatDate(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <!-- 标签列 -->
          <template v-else-if="item.type === 'boolTag'">
            <el-table-column v-bind="item">
              <template #default="scope">
                <el-tag :type="scope.row[item.prop] ? 'success' : 'danger'">
                  {{ scope.row[item.prop] ? item.trueTag : item.falseTag }}
                </el-tag>
              </template>
            </el-table-column>
          </template>
          <!-- 操作列 -->
          <template v-else-if="item.type === 'operation'">
            <el-table-column v-bind="item">
              <template #default="scope">
                <el-button
                  size="small"
                  class="op-btn"
                  text
                  type="primary"
                  @click="handleEdit(scope.$index, scope.row)"
                  ><el-icon><Edit /></el-icon> 编辑</el-button
                >
                <el-button
                  size="small"
                  class="op-btn"
                  text
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  ><el-icon><Delete /></el-icon> 删除</el-button
                >
              </template>
            </el-table-column>
          </template>
          <!-- 普通列 -->
          <template v-else>
            <el-table-column v-bind="item"></el-table-column>
          </template>
        </template>
        <el-table-column type="index" label="序号" width="60"> </el-table-column>

      </el-table>
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
</template>

<script setup lang="ts">
import { formatDate } from '@/utils/format'
</script>

<style lang="less" scoped>
.page-content {
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
