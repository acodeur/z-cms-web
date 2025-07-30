import {
  deleteSystemUserDataApi,
  getSystemUserDataApi,
  addSystemUserApi,
  editSystemUserApi,
} from '@/service/home/system/system'
import type { ISystemUserReq, ISystemUser } from '@/service/type'
import type { ISystemUserSearchReq } from '@/types'
import { formatDate } from '@/utils/format'
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
    async getSystemUserData(searchReq: ISystemUserSearchReq) {
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
      const res = await getSystemUserDataApi(systemUserReq)
      if (res.code !== 0) {
        throw new Error(res.message)
      }
      this.userList = res.data.list
      this.totalCount = res.data.totalCount
    },

    async deleteSystemUserData(userId: string) {
      const res = await deleteSystemUserDataApi(userId)
      if (res.code !== 0) {
        throw new Error(res.message)
      }
    },

    async addSystemUser(userData: any) {
      const dateTime = new Date()
      const systemUser: ISystemUser = {
        ...userData,
        enable: Number(userData.enable),
        createAt: formatDate(dateTime),
        updateAt: formatDate(dateTime),
      }
      delete systemUser.id
      const res = await addSystemUserApi(systemUser)
      if (res.code !== 0) {
        throw new Error(res.data)
      }
      return res
    },

    async editSystemUser(userData: any) {
      const dateTime = new Date()
      const systemUser: ISystemUser = {
        ...userData,
        enable: Number(userData.enable),
        updateAt: formatDate(dateTime),
      }
      const res = await editSystemUserApi(systemUser)
      if (res.code !== 0) {
        throw new Error(res.data)
      }
      return res
    },
  },
})

export default useSystemStore
