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
