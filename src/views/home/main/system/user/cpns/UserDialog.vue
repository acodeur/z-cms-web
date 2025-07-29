<template>
  <div :class="type === 'add' ? 'user-add' : 'user-edit'">
    <el-dialog v-model="visiable" :title="type === 'add' ? '新增用户' : '编辑用户'" width="450px">
      <el-form :model="userForm" ref="userFormRef" label-width="30%">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="userForm.name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="姓名" prop="realname">
          <el-input v-model="userForm.realname" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="手机号" prop="cellphone">
          <el-input v-model="userForm.cellphone" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="状态" prop="enable">
          <el-select v-model="userForm.enable" placeholder="请选择状态">
            <el-option label="启用" value="1" />
            <el-option label="禁用" value="0" />
          </el-select>
        </el-form-item>
        <el-form-item v-if="type !== 'add'" label="创建时间" prop="createAt">
          <el-input v-model="userForm.createAt" disabled />
        </el-form-item>
        <el-form-item v-if="type !== 'add'" label="更新时间" prop="updateAt">
          <el-input v-model="userForm.updateAt" disabled />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="visiable = false">取消</el-button>
          <el-button v-if="type === 'add'" type="primary" @click="handleAdd">保存</el-button>
          <el-button v-else type="primary" @click="handleEdit">确认</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/stores/home/system/system'
import { formatDate } from '@/utils/format'
import { reactive, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'add',
  },
})

const visiable = ref(false)
const userForm = reactive({
  id: '',
  name: '',
  realname: '',
  cellphone: '',
  enable: '',
  createAt: '',
  updateAt: '',
})
const systemStore = useSystemStore()

const openEditDialog = (rowData: any) => {
  Object.assign(userForm, rowData)
  userForm.enable = String(userForm.enable)
  userForm.createAt = formatDate(userForm.createAt)
  userForm.updateAt = formatDate(userForm.updateAt)
  visiable.value = true
}
function handleEdit() {
  systemStore.editSystemUser(userForm)
  visiable.value = false
}

const openAddDialog = () => {
  visiable.value = true
}

function handleAdd() {
  systemStore.addSystemUser(userForm)
  visiable.value = false
}

defineExpose({
  openEditDialog,
  openAddDialog,
})
</script>

<style lang="less" scoped>
.user-edit,
.user-add {
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 8px;

  .el-input {
    width: 70%;
  }
  .el-select {
    width: 70%;
  }
}
</style>
