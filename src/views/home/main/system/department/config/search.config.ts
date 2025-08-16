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
      type: 'input',
      label: '部门名称',
      placeholder: '请输入查询的部门名称',
      prop: 'name',
      rules: [{ min: 0, max: 50, message: '长度最大50位', trigger: 'blur' }],
    },
    {
      type: 'input',
      label: '部门领导',
      placeholder: '请输入查询的领导名称',
      prop: 'leader',
      rules: [{ min: 0, max: 20, message: '长度最大20位', trigger: 'blur' }],
    },
    {
      type: 'date-picker',
      label: '创建时间',
      prop: 'createAt',
    },
  ],
}
export default searchConfig
