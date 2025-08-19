import type { IPageSearchProps } from '@/components/page/type'

const searchConfig: IPageSearchProps = {
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
    ],
  },
  model: {},
}

export default searchConfig
