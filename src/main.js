import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

require('../src/assets/_variable.scss');

const app = createApp(App)
app.use(router);
app.mount('#app');
