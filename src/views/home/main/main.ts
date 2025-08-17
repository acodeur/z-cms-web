import { getAllDepartmentApi, getAllRoleApi } from '@/service/common'
import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    departments: [],
    roles: [],
  }),
  actions: {
    async getAllDepartments() {
      const res = await getAllDepartmentApi()
      if (res.code !== 0) {
        throw new Error(res.message)
      }
      this.departments = res.data.list
    },

    async getAllRoles() {
      const res = await getAllRoleApi()
      if (res.code !== 0) {
        throw new Error(res.message)
      }
      this.roles = res.data.list
    },
  },
})

export default useMainStore
