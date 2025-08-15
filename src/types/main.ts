export interface IBreadcrumb {
  path: string
  name: string
}

export interface ISystemUserSearchReq {
  username?: string
  realname?: string
  phone?: string
  status?: string
  createTime?: string
  pageNum: number
  pageSize: number
}

export interface ISystemDepartmentSearchReq {
  // name?: string
  // realname?: string
  // cellphone?: number
  // enable?: number
  // createAt?: string
  pageNum: number
  pageSize: number
}
