import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {bus} from './utils/bus'
import "@/assets/css/public.scss";
import 'animate.css';

import ClickOutsideClose from '@/utils/click-outside-close'
import resizeLeft from '@/utils/resizeLeft'

Vue.directive('click-outside-close', ClickOutsideClose)
Vue.directive('resize-left', resizeLeft);

Vue.use(ElementUI)

Vue.prototype.bus = bus

Vue.config.productionTip = false

new Vue({
    router, store, render: h => h(App)
}).$mount('#app')
