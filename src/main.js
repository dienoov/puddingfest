import { createApp } from 'vue';
import './style.css';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LandingPage from './components/LandingPage.vue';
import EventPage from './components/EventPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: LandingPage,
  }, {
    path: '/event',
    component: EventPage,
  }],
});

createApp(App)
  .use(router)
  .mount('#app');
