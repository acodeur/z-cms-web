import { defineStore } from 'pinia'
import { getAnalysisAmountsDataApi } from '@/service/home/analysis/analysis'
interface IAnalysisState {
  amounts: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amounts: [],
  }),
  actions: {
    async fetchAnalysisAmountsData() {
      const res = await getAnalysisAmountsDataApi()
      if (res.code !== 0) {
        throw new Error(res.message)
      }
      this.amounts = res.data ?? []
    },
  },
})

export default useAnalysisStore
