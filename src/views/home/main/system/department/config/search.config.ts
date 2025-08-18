import type { IForm } from '@/components/form/type'

const searchConfig: { config: IForm; initValues: Record<string, any> } = {
  config: {
    formProps: {
      labelWidth: '100px',
      labelPosition: 'right',
    },
    formItems: [
      {
        field: 'name',
        label: '部门名称',
        component: 'input',
        componentProps: { placeholder: '请输入查询的部门名称' },
        rules: [{ min: 0, max: 50, message: '长度最大50位', trigger: 'blur' }],
      },
      {
        field: 'leader',
        label: '部门领导',
        component: 'input',
        componentProps: { placeholder: '请输入查询的领导名称' },
        rules: [{ min: 0, max: 20, message: '长度最大20位', trigger: 'blur' }],
      },
      {
        field: 'createAt',
        label: '创建时间',
        component: 'datepicker',
        componentProps: {
          type: 'daterange',
          rangeSeparator: '至',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
        },
      },
      {
        field: 'avatar',
        label: '头像',
        component: 'custom',
        slot: 'avatarUpload',
      },
      {
        field: 'gender',
        label: '性别',
        component: 'select',
        componentProps: {
          placeholder: '请选择性别',
        },
        options: [
          { label: '男', value: 'male' },
          { label: '女', value: 'female' },
        ],
      },
      {
        field: 'switch',
        label: '切换',
        component: 'custom',
        slot: 'switch',
      },
    ],
  },
  initValues: {},
}

export default searchConfig
