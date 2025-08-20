import type { IPageSearchProps } from '@/components/page/type'
import { menuLevelOptions } from './constant'

const searchConfig: IPageSearchProps = {
  config: {
    formProps: {
      labelWidth: '100px',
      labelPosition: 'right',
    },
    formItems: [
      {
        field: 'name',
        label: '菜单名称',
        component: 'input',
        componentProps: { placeholder: '请输入菜单名称' },
        rules: [{ min: 0, max: 20, message: '长度最大20位', trigger: 'change' }],
      },
      {
        field: 'type',
        label: '菜单级别',
        component: 'select',
        componentProps: { placeholder: '请选择菜单级别' },
        options: menuLevelOptions,
      },
      {
        field: 'url',
        label: '菜单路径',
        component: 'input',
        componentProps: { placeholder: '请输入菜单路径' },
        rules: [{ min: 1, max: 50, message: '长度最大50位', trigger: 'change' }],
      },
      {
        field: 'icon',
        label: '菜单图标',
        component: 'input',
        componentProps: { placeholder: '请输入菜单图标' },
        rules: [{ min: 1, max: 20, message: '长度最大20位', trigger: 'change' }],
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
