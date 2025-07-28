import zRequest from '@/service'
import type { ISystemUserReq } from '@/service/type'

export function postSystemUserDataApi(systemUserReq: ISystemUserReq): Promise<any> {
  return zRequest.post({
    url: '/users/list',
    data: systemUserReq,
  })
}
