import {
  deleteSystemUserDataApi,
  getSystemUserDataApi,
  addSystemUserApi,
  editSystemUserApi,
  getSystemDepartmentDataApi,
  deleteSystemDepartmentDataApi,
} from '@/service/home/system/system'
import type { ISystemUserReq, ISystemUser, ISystemDepartmentReq } from '@/service/type'
import type { ISystemUserSearchReq, ISystemDepartmentSearchReq } from '@/types'
import { formatDate } from '@/utils/format'
import { defineStore } from 'pinia'

interface ISystemState {
  user: {
    dataList: ISystemUser[]
    totalCount: number
  }
  department: {
    dataList: any[]
    totalCount: number
  }
}

const useSystemStore = defineStore('system', {
  state: (): ISystemState => ({
    user: {
      dataList: [],
      totalCount: 0,
    },
    department: {
      dataList: [],
      totalCount: 0,
    },
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

    async getSystemDepartmentData(searchReq: ISystemDepartmentSearchReq) {
      const systemDepartmentReq: ISystemDepartmentReq = {
        offset: searchReq.pageSize * (searchReq.pageNum - 1),
        size: searchReq.pageSize,
      }
      const res = await getSystemDepartmentDataApi(systemDepartmentReq)
      if (res.code !== 0) {
        throw new Error(res.message)
      }
      this.department.dataList = res.data.list
      this.department.totalCount = res.data.totalCount
    },

    async deleteSystemDepartmentData(departmentId: string) {
      const res = await deleteSystemDepartmentDataApi(departmentId)
      if (res.code !== 0) {
        throw new Error(res.message)
      }
    },
  },
})

export default useSystemStore
