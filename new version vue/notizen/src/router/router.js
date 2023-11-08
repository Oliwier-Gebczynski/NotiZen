import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import ToDo from '../components/ToDo.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/todo', component: ToDo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;