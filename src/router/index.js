import Vue from 'vue'
import VueRouter from 'vue-router'
import modelVue from '@/modelVue/index.vue'
import easyVue from '@/modelVue/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: modelVue
    },
    {
        path: '/easyVue',
        name: 'easyVue',
        component: easyVue
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
