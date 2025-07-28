import router from '@/router'
import { accountLoginApi, getUserInfoApi, getUserMenusApi } from '@/service/login/login'
import type { IAccount } from '@/types'
import { defineStore } from 'pinia'
import { ZZ_TOKEN } from '@/global'
import { localCache } from '@/utils/cache'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permission: string[]
}
const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: '',
    userInfo: {},
    userMenus: [],
    permission: [],
  }),
  actions: {
    async accountLogin(account: IAccount) {
      const loginResult = await accountLoginApi({
        name: account.username,
        password: account.password,
      })
      if (loginResult.code === 0) {
        const userId = loginResult.data.id
        this.setToken(loginResult.data.token)
        const userInfoResult = await getUserInfoApi(userId)
        this.setUserInfo(userInfoResult.data)
        const userMenusResult = await getUserMenusApi(this.userInfo.role.id)
        this.setUserMenus(userMenusResult.data)
        // 跳转到主页面
        router.push({ name: 'Home' })
      } else {
        throw new Error(loginResult.message)
      }
    },

    setToken(token: string) {
      this.token = token
      localCache.setCache(ZZ_TOKEN, token)
    },
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo
      localCache.setCache('userInfo', userInfo)
    },
    setUserMenus(userMenus: any) {
      this.userMenus = userMenus
      localCache.setCache('userMenus', userMenus)
    },
    resetStateFromCache() {
      this.token = localCache.getCache(ZZ_TOKEN)
      this.userInfo = localCache.getCache('userInfo')
      this.userMenus = localCache.getCache('userMenus')
    },
  },
})

export default useLoginStore
