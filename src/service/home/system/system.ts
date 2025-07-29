import zRequest from '@/service'
import type { ISystemUserReq } from '@/service/type'

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

export function addSystemUserApi(userData: ISystemUserReq): Promise<any> {
  return zRequest.post({
    url: '/users',
    data: userData,
  })
}

export function editSystemUserApi(userData: ISystemUserReq): Promise<any> {
  return zRequest.patch({
    url: '/users',
    data: userData,
  })
}
