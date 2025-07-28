export interface IServiceAccount {
  name: string
  password: string
}

export interface ISystemUserReq {
  offset: number
  size: number
  name?: string
  realname?: string
  cellphone?: number
  enable?: number
  createAt?: string
}
export interface ISystemUser {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}
