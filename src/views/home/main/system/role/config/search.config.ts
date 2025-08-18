import type { IForm } from '@/components/form/type'

const searchConfig: IForm = {
  formProps: {
    labelWidth: '100px',
    labelPosition: 'right',
  },
  formItems: [
    {
      field: 'name',
      label: '姓名',
      component: 'input',
      componentProps: { placeholder: '请输入姓名' },
      required: true,
    },
    {
      field: 'age',
      label: '年龄',
      component: 'input',
      componentProps: { placeholder: '请输入年龄' },
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
      field: 'avatar',
      label: '头像',
      component: 'custom',
      slot: 'avatarUpload',
    },
    {
      field: 'introduction',
      label: '简介',
      component: 'input',
      componentProps: {
        type: 'textarea',
        rows: 4,
        placeholder: '请输入简介',
      },
    },
    {
      field: 'createAt',
      label: '创建时间',
      component: 'datepicker',
      componentProps: {
        type: 'daterange',
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
      },
    },
  ],
}

export default searchConfig
