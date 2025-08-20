import type { IPageDialogConfig } from '@/components/page/type'
import { menuLevelOptions } from './constant'

const dialogConfig: IPageDialogConfig = {
  header: {
    addTitle: '新建菜单',
    editTitle: '编辑菜单',
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
          label: '菜单名称',
          colProps: { span: 21 },
          component: 'input',
          componentProps: { placeholder: '请输入菜单名称' },
          rules: [
            { required: true, message: '请输入菜单名称', trigger: 'blur' },
            { min: 1, max: 20, message: '长度最大20位', trigger: 'change' },
          ],
        },
        {
          field: 'type',
          label: '菜单级别',
          colProps: { span: 21 },
          component: 'select',
          componentProps: { placeholder: '请选择菜单级别' },
          options: menuLevelOptions,
          rules: [{ required: true, message: '请选择菜单级别', trigger: 'blur' }],
        },
        {
          field: 'url',
          label: '菜单路径',
          colProps: { span: 21 },
          component: 'input',
          componentProps: { placeholder: '请输入菜单路径' },
          rules: [
            { required: true, message: '请输入菜单路径', trigger: 'blur' },
            { min: 1, max: 50, message: '长度最大50位', trigger: 'change' },
          ],
        },
        {
          field: 'icon',
          label: '菜单图标',
          colProps: { span: 21 },
          component: 'input',
          componentProps: { placeholder: '请输入菜单图标' },
          rules: [{ required: true, message: '请输入菜单图标', trigger: 'blur' }],
        },
        {
          field: 'sort',
          label: '排序',
          colProps: { span: 21 },
          component: 'input',
          componentProps: { placeholder: '请设置菜单顺序' },
          rules: [{ required: true, message: '请设置菜单顺序', trigger: 'blur' }],
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
