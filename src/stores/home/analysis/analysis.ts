import { defineStore } from 'pinia'
import {
  getAnalysisAmountsDataApi,
  getAnalysisCountsDataApi,
  getAnalysisSalesDataApi,
  getAnalysisSaleAddressDataApi,
} from '@/service/home/analysis/analysis'
interface IAnalysisState {
  counts: any[]
  sales: any[]
  favor: any[]
  saleTop10: any[]
  saleAddress: any[]
  amounts: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    counts: [],
    sales: [],
    favor: [],
    saleTop10: [],
    saleAddress: [],
    amounts: [],
  }),
  actions: {
    async fetchAnalysisCountsData() {
      const res = await getAnalysisCountsDataApi()
      if (res.code !== 0) {
        throw new Error(res.message)
      }
      this.counts = res.data ?? []
    },

    async fetchAnalysisSalesData() {
      const res = await getAnalysisSalesDataApi()
      if (res.code !== 0) {
        throw new Error(res.message)
      }
      this.sales = res.data ?? []
    },

    async fetchAnalysisSaleAddressData() {
      const res = await getAnalysisSaleAddressDataApi()
      if (res.code !== 0) {
        throw new Error(res.message)
      }
      this.saleAddress = res.data ?? []
    },
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
