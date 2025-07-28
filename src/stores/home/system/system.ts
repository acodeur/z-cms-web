import { postSystemUserDataApi } from '@/service/home/system/system'
import type { ISystemUserReq, ISystemUser } from '@/service/type'
import type { ISystemUserSearchReq } from '@/types'
import { defineStore } from 'pinia'

interface ISystemState {
  userList: ISystemUser[]
  totalCount: number
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    userList: [],
    totalCount: 0,
  }),
  actions: {
    async postSystemUserData(searchReq: ISystemUserSearchReq) {
      let systemUserReq: ISystemUserReq = {
        offset: searchReq.pageSize * (searchReq.pageNum - 1),
        size: searchReq.pageSize,
        name: searchReq.username,
        realname: searchReq.realname,
        createAt: searchReq.createTime,
      }
      if (searchReq.phone) {
        systemUserReq.cellphone = Number(searchReq.phone)
      }
      if (searchReq.status) {
        systemUserReq.enable = Number(searchReq.status)
      }
      const res = await postSystemUserDataApi(systemUserReq)
      if (res.code !== 0) {
        throw new Error(res.message)
      }
      this.userList = res.data.list
      this.totalCount = res.data.totalCount
    },
  },
})

export default useSystemStore
