import type { IPageDialogConfig } from '@/components/page/type'
import useCommonStrore from '@/stores/common'

function parentIdOptions() {
  let options: { label: string; value: any }[] = []
  const commonStore = useCommonStrore()
  commonStore.loadAllDepartment().then(() => {
    commonStore.allDepartment.map((item: any) => {
      options.push({
        label: item.name,
        value: item.id,
      })
    })
  })
  return options
}

function parentIdValidator(rule: any, value: any, callback: any) {
  if (typeof value === 'number') {
    value = value + ''
  }
  value = value.trim()
  return value.length >= 1 && value.length <= 50
}

const dialogConfig: IPageDialogConfig = {
  header: {
    addTitle: '新建部门',
    editTitle: '编辑部门',
  },
  dialogProps: {
    width: '450px',
  },
  footer: {
    cancelTxt: '取消',
    addConfirmTxt: '保存',
    editConfirmTxt: '确定',
  },
  formConfig: {
    ui: {
      formProps: {
        labelWidth: '42%',
        labelPosition: 'right',
      },
      formItems: [
        {
          field: 'name',
          label: '部门名称',
          colProps: { span: 21 },
          component: 'input',
          componentProps: { placeholder: '请输入部门名称' },
          rules: [
            { required: true, message: '请输入部门名称', trigger: 'blur' },
            { min: 1, max: 50, message: '长度最大50位', trigger: 'change' },
          ],
        },
        {
          field: 'leader',
          label: '部门领导',
          colProps: { span: 21 },
          component: 'input',
          componentProps: { placeholder: '请输入部门领导名称' },
          rules: [
            { required: true, message: '请输入部门领导名称', trigger: 'blur' },
            { min: 1, max: 20, message: '长度最大20位', trigger: 'change' },
          ],
        },
        {
          field: 'parentId',
          label: '上级部门',
          colProps: { span: 21 },
          component: 'select',
          componentProps: { placeholder: '请输入上级部门名称' },
          options: parentIdOptions(),
          rules: [
            { required: true, message: '请输入上级部门名称', trigger: 'blur' },
            { validator: parentIdValidator, message: '长度最大50位', trigger: 'change' },
          ],
        },
        {
          belong: 'edit',
          field: 'createAt',
          label: '创建时间',
          colProps: { span: 21 },
          component: 'custom',
          componentProps: {
            disabled: true,
          },
          slot: 'datetime',
        },
        {
          belong: 'edit',
          field: 'updateAt',
          label: '更新时间',
          colProps: { span: 21 },
          component: 'custom',
          componentProps: {
            disabled: true,
          },
          slot: 'datetime',
        },
        {
          belong: 'edit',
          field: 'id',
          label: 'id',
          colProps: { span: 21, style: { display: 'none' } },
          component: 'input',
        },
      ],
    },
    model: {},
  },
}

export default dialogConfig
