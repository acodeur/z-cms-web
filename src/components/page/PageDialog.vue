<template>
  <div class="page-dialog">
    <el-dialog
      v-model="visiable"
      :title="type === 'add' ? addTitle : editTitle"
      v-bind="dialogProps"
    >
      <dynamic-form ref="formRef" :i-form="formConfig.ui" :init-model="formConfig.initValues ?? {}">
        <template v-for="item in slotItems" :key="item.slot" v-slot:[item.slot]="{ model }">
          <slot :name="item.slot" :model="{ model }"></slot>
        </template>
      </dynamic-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="visiable = false">{{ cancelTxt ?? '取消' }}</el-button>
          <el-button type="primary" @click="handleConfirm">{{
            type === 'add' ? (addConfirmTxt ?? '保存') : (editConfirmTxt ?? '确认')
          }}</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { IForm } from '../form/type'

type DialogType = 'add' | 'edit'
interface IProps {
  config: {
    header: { addTitle: string; editTitle: string }
    dialogProps: Record<string, any>
    footer: { cancelTxt?: string; addConfirmTxt?: string; editConfirmTxt?: string }
    formConfig: { ui: IForm; initValues?: Record<string, any> }
  }
}
const emits = defineEmits(['handleConfirm'])

const props = defineProps<IProps>()
const { header, dialogProps, footer, formConfig } = props.config
const { addTitle, editTitle } = header
const { cancelTxt, addConfirmTxt, editConfirmTxt } = footer
const slotItems = computed(() => formConfig.ui.formItems.filter((item) => item.slot))
const visiable = ref(false)
const type = ref<DialogType>('add')
const formRef = ref()

function handleConfirm() {
  formRef.value
    .validate()
    .then(() => {
      emits('handleConfirm', formRef.value.formModel)
    })
    .catch(() => {
      ElMessage.error('请填写正确的表单信息')
    })
}

defineExpose({ visiable, type, formRef })
</script>

<style lang="less" scoped>
.page-dialog {
  padding: 5px;
  background-color: #f0f0f0;
  border-radius: 8px;
}
</style>
