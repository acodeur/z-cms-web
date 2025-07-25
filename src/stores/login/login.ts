import router from '@/router'
import { accountLoginApi, getUserInfoApi, getUserMenusApi } from '@/service/login/login'
import type { IAccount } from '@/types'
import { defineStore } from 'pinia'
import { ZZ_TOKEN } from '@/global'
import { localCache } from '@/utils/cache'
import useMainStore from '../main/main'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
  permission: string[]
}
const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: localCache.getCache(ZZ_TOKEN) || '',
    userInfo: localCache.getCache('userInfo') || {},
    userMenus: localCache.getCache('userMenus') || [],
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
        // 请求所有roles/departments数据
const mainStore = useMainStore()
// mainStore.getRolesAndDepartments()
        // 跳转到主页面
        router.push({ name: 'Main' })
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
