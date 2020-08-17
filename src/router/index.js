import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Pelicula from '../views/Pelicula.vue';

// lazy loading
// const Home = () => import('@/views/Home')

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/pelicula',
    name: 'Pelicula',
    component: Pelicula,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
