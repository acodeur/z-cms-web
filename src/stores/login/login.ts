import router from '@/router'
import { accountLoginApi } from '@/service/login/login'
import type { IAccount } from '@/types'
import { defineStore } from 'pinia'
import { ZZ_TOKEN } from '@/global/constants'

interface IUserInfo {
  id: string
  username: string
}

const useLoginStore = defineStore('login', {
  state: () => ({
    token: '',
    userInfo: {
      id: '',
      username: '',
    },
  }),
  actions: {
    async accountLogin(account: IAccount) {
      const loginResult = await accountLoginApi(account)
      if (loginResult.success) {
        this.setToken(loginResult.token) // 模拟设置token
        this.setUserInfo({ id: '1', username: account.username }) // 模拟设置用户信息
        // 跳转到主页面
        router.push({ name: 'Main' })
      } else {
        throw new Error(loginResult.message)
      }
    },

    setToken(token: string) {
      this.token = token
      localStorage.setItem(ZZ_TOKEN, token) // 模拟存储token
    },
    setUserInfo(userInfo: IUserInfo) {
      this.userInfo = userInfo
    },
    clearLogin() {
      this.token = ''
      this.userInfo = {
        id: '',
        username: '',
      }
    },
  },
})

export default useLoginStore
