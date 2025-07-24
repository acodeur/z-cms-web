import { ZZ_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { BASE_URL, TIME_OUT } from './config'
import ZRequest from './request'

const zRequest = new ZRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      // 每一个请求都自动携带token
      const token = localCache.getCache(ZZ_TOKEN)
      if (config.headers && token) {
        // 类型缩小
        config.headers.Authorization = 'Bearer ' + token
      }
      return config
    },
  },
})

export default zRequest
