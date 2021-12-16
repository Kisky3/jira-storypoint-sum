import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import User from '../src/pages/User.vue';
import Home from '../src/pages/Home.vue';

require('../src/assets/_variable.scss');

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/user',
            name: 'user',
            component: User
        }
    ]
})


const app = createApp(App)
app.use(router);
app.mount('#app');
