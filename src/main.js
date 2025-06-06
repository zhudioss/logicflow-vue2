import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {bus} from './utils/bus'
import "@/assets/css/public.scss";
import 'animate.css';

Vue.use(ElementUI)

Vue.prototype.bus = bus

Vue.config.productionTip = false

new Vue({
    router, store, render: h => h(App)
}).$mount('#app')
