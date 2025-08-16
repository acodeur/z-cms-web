import zRequest from '@/service'
import type { ISystemUserReq, ISystemUser, ISystemDepartmentReq } from '@/service/type'
import apiMap from '@/global/api'

// 系统用户
export function getSystemUserDataApi(systemUserReq: ISystemUserReq): Promise<any> {
  return zRequest.post({
    url: '/users/list',
    data: systemUserReq,
  })
}

export function deleteSystemUserDataApi(userId: string): Promise<any> {
  return zRequest.delete({
    url: `/users/${userId}`,
  })
}

export function addSystemUserApi(userData: ISystemUser): Promise<any> {
  return zRequest.post({
    url: '/users',
    data: userData,
  })
}

export function editSystemUserApi(userData: ISystemUser): Promise<any> {
  return zRequest.patch({
    url: `/users/${userData.id}`,
    data: userData,
  })
}

//页面CRUD
export function getSystemDataApi(apiKey: string, systemReq: any): Promise<any> {
  return zRequest.post({
    url: apiMap[apiKey].list.url,
    data: systemReq,
  })
}

export function deleteSystemDataApi(apiKey: string, id: string): Promise<any> {
  const url = apiMap[apiKey].delete.url.format({ id })
  return zRequest.delete({
    url: url,
  })
}
