const contentConfig = {
  pageName: 'department',
  header: {
    title: '部门列表',
    btnTxt: '新建部门',
  },
  propsList: [
    { type: 'normal', label: '部门名称', prop: 'name' },
    { type: 'normal', label: '上级部门', prop: 'parentName' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
  ],
}
export default contentConfig
