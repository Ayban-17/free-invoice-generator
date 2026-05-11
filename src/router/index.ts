import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';
import GeneratedInvoice from '../pages/GeneratedInvoice.vue';

const routes = [
  {
    path: '/',
    name: 'landing',
    component: LandingPage,
  },
  {
    path: '/generator',
    name: 'generator',
    component: GeneratedInvoice,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
