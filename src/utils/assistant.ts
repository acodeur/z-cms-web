import { ZZ_TOKEN } from '@/global'
import { localCache } from './cache'

class Assistant {
  removeAllCache(): void {
    localCache.removeCache(ZZ_TOKEN)
    localCache.removeCache('userInfo')
    localCache.removeCache('userMenus')
  }

  getComponentNameFromUrlPath(urlPath: string): string {
    const parts = urlPath.split('/')
    if (parts.length === 1) {
      return this.toPascalCase(parts[0])
    }
    if (parts.length >= 2) {
      return this.toPascalCase(parts[parts.length - 2]) + this.toPascalCase(parts[parts.length - 1])
    }
    return ''
  }
  toCamelCase(str: string): string {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase()
      })
      .replace(/\s+/g, '')
  }
  toPascalCase(str: string): string {
    return this.toCamelCase(str).replace(/^./, (match) => match.toUpperCase())
  }
}

const assistant = new Assistant()

export default assistant
