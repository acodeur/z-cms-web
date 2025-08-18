import { colProps } from 'element-plus'

const dialogConfig: any = {
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
      ],
    },
    initValues: {},
  },
}

export default dialogConfig
