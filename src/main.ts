import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import globalFunc from './globalFunc'
import initFunc from './initFunc'
import BootstrapVue3 from 'bootstrap-vue-3';
import 'v-calendar/dist/style.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import {pinia} from '@/stores/pinia'
import VCalendar from 'v-calendar';

// const pinia = createPinia()
const app = createApp(App)
                .use(initFunc)
                .use(globalFunc.toNative)
                .use(BootstrapVue3)
                .use(pinia)
                .use(router)
                .use(VCalendar, {})

app.mount('#app')