const searchConfig = {
  pageName: 'department',
  form: {
    labelWidth: '100px',
    labelPosition: 'right',
  },
  row: {
    glutter: 200,
  },
  col: {
    span: 8,
  },
  formItems: [
    {
      attrs: {
        label: '部门名称',
        prop: 'name',
        rules: [{ min: 0, max: 50, message: '长度最大50位', trigger: 'blur' }],
      },
      component: {
        type: 'input',
        model: 'name',
        attrs: {
          placeholder: '请输入查询的部门名称',
        },
      },
    },
    {
      attrs: {
        label: '部门领导',
        prop: 'leader',
        rules: [{ min: 0, max: 20, message: '长度最大20位', trigger: 'blur' }],
      },
      component: {
        type: 'input',
        model: 'leader',
        attrs: {
          placeholder: '请输入查询的领导名称',
        },
      },
    },
    {
      attrs: {
        label: '创建时间',
        prop: 'createAt',
      },
      component: {
        type: 'date-picker',
        model: 'createAt',
        attrs: {
          type: 'daterange',
          rangeSeparator: '至',
          startPlaceholder: '开始日期',
          endPlaceholder: '结束日期',
        },
      },
    },
  ],
}
export default searchConfig
