import { createPinia } from 'pinia'
import type { App } from 'vue'
import useLoginStore from './login/login'

const pinia = createPinia()

function install(app: App<Element>) {
  app.use(pinia)
  const loginStore = useLoginStore()
  loginStore.resetStateFromCache()
}

export default install
