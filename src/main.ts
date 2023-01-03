import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Global from './views/Global.vue'

import './assets/main.css'
import globalFunc from './globalFunc'
import initFunc from './initFunc'

const app = createApp(App)
                .use(initFunc)
                .use(globalFunc.toNative)

app.use(router)

app.mount('#app')
app.component('Global', Global)