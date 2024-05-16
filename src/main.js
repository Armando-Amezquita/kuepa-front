import { createApp } from 'vue'
import io from 'socket.io-client'
import App from './App.vue'
import router from './router'
import { store } from '@/store'
import '@/assets/styles.scss'

const socket = io('http://localhost:3000');

const app = createApp(App)
app.use(router)
app.use(store)
app.config.globalProperties.$socket = socket
app.mount('#app')



