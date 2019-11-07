import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('@/views/city/City')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/views/detail/Detail')
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

export default router;
