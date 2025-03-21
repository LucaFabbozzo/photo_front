import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('@/pages/Home.vue'), meta: { title: 'Home - Lagoluxphoto' } },
    { path: '/contacts', component: () => import('@/pages/Contacts.vue'), meta: { title: 'Contact - Lagoluxphoto' } },
    { path: '/about', component: () => import('@/pages/About.vue'), meta: { title: 'About us - Lagoluxphoto' } },
    { path: '/works', component: () => import('@/pages/Works.vue'), meta: { title: 'Works - Lagoluxphoto' } },
    { path: '/works/1', component: () => import('./pages/works/Works1.vue'), meta: { title: 'Work 1 - Lagoluxphoto' } },
    { path: '/works/2', component: () => import('./pages/works/Works2.vue'), meta: { title: 'Work 2 - Lagoluxphoto' } },
    { path: '/works/3', component: () => import('./pages/works/Works3.vue'), meta: { title: 'Work 3 - Lagoluxphoto' } }
];

const router = createRouter({
    history: createWebHashHistory(), // Modalità hash
    routes,
});

// Aggiorna il titolo della pagina
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Lagoluxphoto';
  next();
});

export default router;