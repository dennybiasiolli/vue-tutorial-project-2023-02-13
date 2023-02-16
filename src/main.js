import { createApp } from 'vue'
import '@/plugins/axios'
import { router } from '@/router'
import { pinia } from '@/stores'
import App from './App.vue'

import './assets/main.css'

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
