import zRequest from '@/service'
import type { ISystemUserReq, ISystemUser } from '@/service/type'

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
