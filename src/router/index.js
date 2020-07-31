import Vue from 'vue';
import VueRouter from 'vue-router';



import Home from '../views/Home.vue';

// lazy loading
// const Home = () => import('@/views/Home')


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
