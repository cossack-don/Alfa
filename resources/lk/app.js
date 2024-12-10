import './bootstrap';


import {createApp} from 'vue'
import router from './routes'
import { createPinia } from 'pinia'
import App from './components/App.vue'

const pinia = createPinia()
const app = createApp(App)


app.use(router)
app.use(pinia)
app.mount('#app')
