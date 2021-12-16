import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import User from '../src/pages/User.vue';
import User2 from '../src/pages/User2.vue';
import Home from '../src/pages/Home.vue';

require('../src/assets/_variable.scss');

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/user',
            name: 'user',
            component: User
        },
        {
            path: '/user2',
            name: 'user2',
            component: User2
        },
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})


const app = createApp(App)
app.use(router);
app.mount('#app');
