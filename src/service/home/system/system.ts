import zRequest from '@/service'
import type { ISystemUserReq, ISystemUser, ISystemDepartmentReq } from '@/service/type'

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

//系统部门
export function getSystemDepartmentDataApi(
  systemDepartmentReq: ISystemDepartmentReq,
): Promise<any> {
  return zRequest.post({
    url: '/department/list',
    data: systemDepartmentReq,
  })
}

export function deleteSystemDepartmentDataApi(departmentId: string): Promise<any> {
  return zRequest.delete({
    url: `/department/${departmentId}`,
  })
}
