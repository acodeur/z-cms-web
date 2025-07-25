import type { IServiceAccount } from '..'
import zRequest from '..'

export function accountLoginApi(account: IServiceAccount): Promise<any> {
  return zRequest.post({
    url: '/login',
    data: account,
  })
}

export function getUserInfoApi(userId: string): Promise<any> {
  return zRequest.get({
    url: `/users/${userId}`,
  })
}

export function getUserMenusApi(roleId: string): Promise<any> {
  return zRequest.get({
    url: `/role/${roleId}/menu`,
  })
}

export function mobileLoginApi(mobile: string, code: string): Promise<any> {
  return new Promise((resolve, reject) => {
    // 模拟手机登录请求
    setTimeout(() => {
      if (mobile === '12345678901' && code === '1234') {
        resolve({ success: true, message: '登录成功' })
      } else {
        reject({ success: false, message: '手机号或验证码错误' })
      }
    }, 1000)
  })
}
