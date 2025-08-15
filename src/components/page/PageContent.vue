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
        <template v-for="item in config.propsList" :key="item.prop">
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
                  text
                  type="primary"
                  @click="handleEdit(scope.$index, scope.row)"
                  ><el-icon><Edit /></el-icon> 编辑</el-button
                >
                <el-button
                  size="small"
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
      </el-table>
    </div>
    <div class="pagination">
      <el-config-provider :locale="zhCn">
        <el-pagination
          background
          layout="total, prev, pager, next, sizes"
          :page-sizes="[5, 10, 20, 50]"
          :total="totalCount"
          v-model:page-size="pageSize"
          v-model:current-page="currentPage"
          :pager-count="7"
          @current-change="handleCurrentPageChange"
          @size-change="handlePageSizeChange"
        ></el-pagination>
      </el-config-provider>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatDate } from '@/utils/format'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { ref } from 'vue'

interface IProps {
  config: {
    header: {
      title: string
      btnTxt: string
    }
    propsList: any[]
    pagination: {
      currentPage: number
      pageSize: number
    }
  }
  dataList: any[]
  totalCount: number
}

const props = defineProps<IProps>()
const emit = defineEmits([
  'handleAdd',
  'handleEdit',
  'handleDelete',
  'handleCurrentPageChange',
  'handlePageSizeChange',
])

const pageSize = ref(props.config.pagination.pageSize)
const currentPage = ref(props.config.pagination.currentPage)

function handleAdd() {
  emit('handleAdd')
}
function handleEdit(index: number, row: any) {
  emit('handleEdit', index, row)
}
function handleDelete(index: number, row: any) {
  emit('handleDelete', index, row)
}

function handleCurrentPageChange(val: number) {
  emit('handleCurrentPageChange', val)
}
function handlePageSizeChange(val: number) {
  emit('handlePageSizeChange', val)
}
</script>

<style lang="less" scoped>
.page-content {
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 8px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 5px;

    .add-btn {
      width: 80px;
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .el-pagination {
      :deep(.el-select) {
        width: 100px;
      }
    }
  }
}
</style>
