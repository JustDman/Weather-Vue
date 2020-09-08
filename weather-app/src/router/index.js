import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Hourly from '../views/Hourly.vue';
import Daily from '../views/Daily.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/hourly',
    name: 'Hourly',
    component: Hourly,
  },
  {
    path: '/daily',
    name: 'Daily',
    component: Daily,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
