import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../components/MainPage.vue';
import NotePad from '../components/Note.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/notepad', component: NotePad },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;