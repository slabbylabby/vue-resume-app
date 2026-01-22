import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/global.css'

import { createApp } from 'vue'
import { createPinia } from '../node_modules/pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
