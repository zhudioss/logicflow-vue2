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

// 引入 vue-codemirror
import VueCodemirror from 'vue-codemirror'
// codemirror 的样式（必须）
import 'codemirror/lib/codemirror.css'
// 主题
import 'codemirror/theme/dracula.css'
// js
import 'codemirror/mode/javascript/javascript.js'
// Python
import 'codemirror/mode/python/python.js'


Vue.directive('click-outside-close', ClickOutsideClose)
Vue.directive('resize-left', resizeLeft);

Vue.use(ElementUI)
Vue.use(VueCodemirror)

Vue.prototype.bus = bus

Vue.config.productionTip = false

new Vue({
    router, store, render: h => h(App)
}).$mount('#app')
