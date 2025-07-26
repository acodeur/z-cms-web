import { ZZ_TOKEN } from '@/global'
import { localCache } from './cache'

class Assistant {
  removeAllCache() {
    localCache.removeCache(ZZ_TOKEN)
    localCache.removeCache('userInfo')
    localCache.removeCache('userMenus')
  }
}

const assistant = new Assistant()

export default assistant
