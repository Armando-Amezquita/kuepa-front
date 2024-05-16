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
            children: [
                {
                    path: ':id', component: import('../components/Card.vue')
                }
            ]
        },
       
    ]
})

export default router;