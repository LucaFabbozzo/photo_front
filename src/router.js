import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Contacts from '@/pages/Contacts.vue';
import About from '@/pages/About.vue';
import Works from '@/pages/Works.vue';
import Works1 from './pages/works/Works1.vue';
import Works2 from './pages/works/Works2.vue';
import Works3 from './pages/works/Works3.vue';


const routes = [
      { path: '/', component: Home, meta: { title: 'Home - Photo-Studio' } },
    { path: '/contacts', component: Contacts, meta: { title: 'Contact - Photo-Studio' } },
    { path: '/about', component: About, meta: { title: 'About us - Photo-Studio' } },
    { path: '/works', component: Works, meta: { title: 'Works - Photo-Studio' } },
    { path: '/works/1', component: Works1, meta: { title: 'Work 1 - Photo-Studio' } },
    { path: '/works/2', component: Works2, meta: { title: 'Work 2 - Photo-Studio' } },
    { path: '/works/3', component: Works3, meta: { title: 'Work 3 - Photo-Studio' } },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Photo-Studio';
  next();
})

  export default router;