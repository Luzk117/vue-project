import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login.vue';
import Register from '@/views/register.vue';
import Index from '@/views/index.vue';
import Order from '@/views/order.vue';
import Details from '@/views/details.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',

        component: Register
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/details',
        name: 'Details',
        component: Details
    },


]

const index = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 } // 确保每次路由改变时页面回到顶部
    }

})



export default index

