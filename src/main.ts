import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import store from './stores'
import { registerIcons as icons } from './global'

const app = createApp(App)
app.use(icons)
app.use(store)
app.use(router)

app.mount('#app')
