import {
  deleteSystemUserDataApi,
  getSystemUserDataApi,
  addSystemUserApi,
  editSystemUserApi,
  getSystemDataApi,
  deleteSystemDataApi,
} from '@/service/home/system/system'
import type { ISystemUserReq, ISystemUser } from '@/service/type'
import type { ISystemUserSearchReq } from '@/types'
import { formatDate } from '@/utils/format'
import { defineStore } from 'pinia'

interface ISystemState {
  user: {
    dataList: ISystemUser[]
    totalCount: number
  }
  dataList: any[]
  totalCount: number
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    user: {
      dataList: [],
      totalCount: 0,
    },
    dataList: [],
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
      this.user.dataList = res.data.list
      this.user.totalCount = res.data.totalCount
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

    /** 针对页面数据的CRUD */
    async getSystemData(pageName: string, searchReq: any) {
      const { pageSize, pageNum, ...systemReq } = searchReq
      systemReq.offset = pageSize * (pageNum - 1)
      systemReq.size = pageSize
      const res = await getSystemDataApi(pageName, systemReq)
      if (res.code !== 0) {
        throw new Error(res.message)
      }
      const { list, totalCount } = res.data
      this.dataList = list
      this.totalCount = totalCount
    },

    async deleteSystemData(pageName: string, id: string) {
      const res = await deleteSystemDataApi(pageName, id)
      if (res.code !== 0) {
        throw new Error(res.message)
      }
    },

    async addSystemData(pageName: string, data: any) {
      const res = await addSystemDataApi(pageName, data)
      if (res.code !== 0) {
        throw new Error(res.message)
      }
    },

    async editSystemData(pageName: string, data: any) {
      const res = await editSystemDataApi(pageName, data)
      if (res.code !== 0) {
        throw new Error(res.message)
      }
    },
  },
})

export default useSystemStore
