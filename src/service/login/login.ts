import type { IAccount } from '@/types'
import zRequest from '..'

export function accountLoginApi(account: IAccount): Promise<any> {
  return new Promise((resolve, reject) => {
    // 模拟登录请求
    const { username, password } = account
    setTimeout(() => {
      if (username === 'admin' && password === '123456') {
        resolve({ success: true, message: '登录成功',token: 'qwertyuiop' })
      } else {
        reject({ success: false, message: '用户名或密码错误' })
      }
    }, 2000)
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

export function getUserInfoApi(token: string): Promise<any> {
  return zRequest.get({
    url: '/user/info',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
