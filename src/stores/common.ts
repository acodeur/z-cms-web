import { getCurrentUserApi, getAllRoleApi, getAllDepartmentApi } from '@/service/common'
import { defineStore } from 'pinia'

interface ICommonState {
  currentUser: any
  allRole: any[]
  allDepartment: any[]
}

const useCommonStrore = defineStore('common', {
  state: (): ICommonState => ({
    currentUser: {},
    allRole: [],
    allDepartment: [],
  }),
  actions: {
    async loadCurrentUser(userId: string) {
      const res = await getCurrentUserApi(userId)
      if (res.code !== 0) {
        throw new Error(res.message)
      }
      this.currentUser = res.data
    },

    async loadAllRole() {
      const res = await getAllRoleApi()
      if (res.code !== 0) {
        throw new Error(res.message)
      }
      this.allRole = res.data.list
    },

    async loadAllDepartment() {
      const res = await getAllDepartmentApi()
      if (res.code !== 0) {
        throw new Error(res.message)
      }
      this.allDepartment = res.data.list
    },
  },
})

export default useCommonStrore
