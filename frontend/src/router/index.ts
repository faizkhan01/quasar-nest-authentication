import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '@/layouts/Home.vue'
import Login from '@/layouts/Login.vue'
import Register from '@/layouts/Register.vue'

const routes: Array<RouteRecordRaw> = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
