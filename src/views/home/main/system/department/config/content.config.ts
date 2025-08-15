const contentConfig = {
  pageName: 'department',
  header: {
    title: '部门列表',
    btnTxt: '新建部门',
  },
  propsList: [
    { type: 'index', label: '序号', width: '80px', align: 'center' },
    { type: 'normal', label: '部门名称', prop: 'name', width: '150px', align: 'center' },
    { type: 'normal', label: '部门领导', prop: 'leader', width: '150px', align: 'center' },
    { type: 'normal', label: '上级部门', prop: 'parentId', width: '150px', align: 'center' },
    { type: 'timer', label: '创建时间', prop: 'createAt', align: 'center' },
    { type: 'timer', label: '更新时间', prop: 'updateAt', align: 'center' },
    { type: 'operation', label: '操作', width: '300px', align: 'center' },
  ],
  pagination: {
    currentPage: 1,
    pageSize: 10,
  }
}
export default contentConfig
