import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home', // Nome per la rotta Home
        component: () => import('@/pages/Home.vue'),
        meta: { title: 'Home - Lagoluxphoto' }
    },
    {
        path: '/contacts',
        name: 'contacts', // Nome per la rotta Contacts
        component: () => import('@/pages/Contacts.vue'),
        meta: { title: 'Contact - Lagoluxphoto' }
    },
    {
        path: '/about',
        name: 'about', // Nome per la rotta About
        component: () => import('@/pages/About.vue'),
        meta: { title: 'About us - Lagoluxphoto' }
    },
    {
        path: '/works',
        name: 'works', // Nome per la rotta Works
        component: () => import('@/pages/Works.vue'),
        meta: { title: 'Works - Lagoluxphoto' }
    },
    {
        path: '/works/1',
        name: 'work1', 
        component: () => import('./pages/works/Works1.vue'),
        meta: { title: 'Work 1 - Lagoluxphoto' }
    },
    {
        path: '/works/2',
        name: 'work2', 
        component: () => import('./pages/works/Works2.vue'),
        meta: { title: 'Work 2 - Lagoluxphoto' }
    },
    {
        path: '/works/3',
        name: 'work3', 
        component: () => import('./pages/works/Works3.vue'),
        meta: { title: 'Work 3 - Lagoluxphoto' }
    },
    {
        path: '/works/4',
        name: 'work4', 
        component: () => import('./pages/works/Works4.vue'),
        meta: { title: 'Work 4 - Lagoluxphoto' }
    },
    {
        path: '/works/5',
        name: 'work5', 
        component: () => import('./pages/works/Works5.vue'),
        meta: { title: 'Work 5 - Lagoluxphoto' }
    },
    {
        path: '/works/6',
        name: 'work6', 
        component: () => import('./pages/works/Works6.vue'),
        meta: { title: 'Work 6 - Lagoluxphoto' }
    },
    {
        path: '/works/7',
        name: 'work7', 
        component: () => import('./pages/works/Works7.vue'),
        meta: { title: 'Work 7 - Lagoluxphoto' }
    },
    {
        path: '/works/8',
        name: 'work8', 
        component: () => import('./pages/works/Works8.vue'),
        meta: { title: 'Work 8 - Lagoluxphoto' }
    },
    {
        path: '/works/9',
        name: 'work9', 
        component: () => import('./pages/works/works9.vue'),
        meta: { title: 'Work 9 - Lagoluxphoto' }
    },
    {
        path: '/works/10',
        name: 'work10', 
        component: () => import('./pages/works/works10.vue'),
        meta: { title: 'Work 10 - Lagoluxphoto' }
    }
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