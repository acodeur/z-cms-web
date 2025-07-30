<template>
  <div :class="type === 'add' ? 'user-add' : 'user-edit'">
    <el-dialog v-model="visiable" :title="type === 'add' ? '新增用户' : '编辑用户'" width="450px">
      <el-form :model="userForm" ref="userFormRef" label-width="30%" :rules="rules">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="userForm.name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item v-if="type === 'add'" label="密码" prop="password">
          <el-input v-model="userForm.password" show-password placeholder="请输入密码" />
        </el-form-item>
        <el-form-item label="姓名" prop="realname">
          <el-input v-model="userForm.realname" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="手机号" prop="cellphone">
          <el-input v-model="userForm.cellphone" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="所属部门" prop="department">
          <el-select v-model="userForm.departmentId" placeholder="请选择所属部门">
            <el-option
              v-for="department in allDepartment"
              :key="department.id"
              :label="department.name"
              :value="department.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select v-model="userForm.roleId" placeholder="请选择角色">
            <el-option v-for="role in allRole" :key="role.id" :label="role.name" :value="role.id" />
          </el-select>
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
import useCommonStore from '@/stores/common'
import { formatDate } from '@/utils/format'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'
import { ElMessage, ElForm } from 'element-plus'

const props = defineProps({
  type: {
    type: String,
    default: 'add',
  },
})
const emit = defineEmits(['handleReload'])

const visiable = ref(false)
const userFormRef = ref<InstanceType<typeof ElForm>>()
const userForm = reactive({
  id: '',
  name: '',
  password: '',
  realname: '',
  cellphone: '',
  enable: '',
  createAt: '',
  updateAt: '',
})
const systemStore = useSystemStore()
const commonStore = useCommonStore()
const { allRole, allDepartment } = storeToRefs(commonStore)

const openEditDialog = (rowData: any) => {
  Object.assign(userForm, rowData)
  userForm.enable = String(userForm.enable)
  userForm.createAt = formatDate(userForm.createAt)
  userForm.updateAt = formatDate(userForm.updateAt)
  visiable.value = true
}
function handleEdit() {
  userFormRef.value?.validate((valid) => {
    if (!valid) {
      ElMessage.error('请填写正确的用户信息')
    } else {
      systemStore
        .editSystemUser(userForm)
        .then((res) => {
          emit('handleReload')
          ElMessage.success(res.data)
        })
        .catch((err) => {
          ElMessage.error(err.message)
        })
      visiable.value = false
    }
  })
}

const openAddDialog = () => {
  userFormRef.value?.resetFields()
  visiable.value = true
}

function handleAdd() {
  userFormRef.value?.validate((valid) => {
    if (!valid) {
      ElMessage.error('请填写正确的用户信息')
    } else {
      systemStore
        .addSystemUser(userForm)
        .then((res) => {
          emit('handleReload')
          ElMessage.success(res.data)
        })
        .catch((err) => {
          ElMessage.error(err.message)
        })
      visiable.value = false
    }
  })
}

defineExpose({
  openEditDialog,
  openAddDialog,
})

const rules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      pattern: /^[a-zA-Z0-9_\-]{3,10}$/,
      message: '仅数字、字母、-、_，长度3-10位',
      trigger: 'change',
    },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '长度6-20位', trigger: 'blur' },
  ],
  realname: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  cellphone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
      message: '请输入正确的手机号',
      trigger: 'change',
    },
  ],
  enable: [{ required: true, message: '请选择状态', trigger: 'blur' }],
}
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
