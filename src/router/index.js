import Vue from 'vue'
import VueRouter from 'vue-router'
import modelVue from '@/modelVue/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: modelVue
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
