import type { IPageDialogConfig } from '@/components/page/type'

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
          rules: [{ min: 0, max: 50, message: '长度最大50位', trigger: 'blur' }],
        },
        {
          field: 'leader',
          label: '部门领导',
          colProps: { span: 21 },
          component: 'input',
          componentProps: { placeholder: '请输入部门领导名称' },
          rules: [{ min: 0, max: 20, message: '长度最大20位', trigger: 'blur' }],
        },
        {
          field: 'parentId',
          label: '上级部门',
          colProps: { span: 21 },
          component: 'input',
          componentProps: { placeholder: '请输入上级部门名称' },
          rules: [{ min: 0, max: 20, message: '长度最大20位', trigger: 'blur' }],
        },
        {
          belong: 'edit',
          field: 'createAt',
          label: '创建时间',
          colProps: { span: 21 },
          component: 'custom',
          componentProps: {
            disabled: true,
            style: { width: '100%' },
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
            style: { width: '100%' },
          },
          slot: 'datetime',
        },
      ],
    },
    model: {},
  },
}

export default dialogConfig
