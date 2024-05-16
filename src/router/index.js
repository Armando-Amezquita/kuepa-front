import { createRouter, createWebHistory } from 'vue-router';
import Login from '../view/Login.vue';
import NotFound from '../view/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'login', component: Login, alias: ['/login']},
        { path: '/notfound', name:'notfound', component: NotFound},
        { path: '/:catchAll(.*)', redirect: '/notfound'},
        { path: '/signup', name:'signup', component: () => import('../view/SignUp.vue')},
        { 
            path: '/dashboard', 
            name: 'dashboard',
            component: () => import('../view/Dashboard.vue'),
            meta: { requiresAuth: true }
        },
       
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        const token = localStorage.getItem('auth');
        if (!token) {
            next({ name: 'login' });
        } else {
            next();
        }
    } else {
        next(); 
    }
});

export default router;