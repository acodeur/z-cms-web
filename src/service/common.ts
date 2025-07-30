import zRequest from ".";

export function getCurrentUserApi(userId: string): Promise<any> {
  return zRequest.get({
    url: `/users/${userId}`,
  })
}

export function getAllRoleApi(): Promise<any> {
  return zRequest.post({
    url: '/role/list',
  })
}

export function getAllDepartmentApi(): Promise<any> {
  return zRequest.post({
    url: '/department/list',
  })
}
