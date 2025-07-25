import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'
import router from './router'
import pinia from './stores'
import { registerIcons as icons } from './global'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(icons)

app.mount('#app')
