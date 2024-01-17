// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles.css';
import router from './router';
import axios from 'axios';

// Mengatur instance Axios ke dalam objek window
window.axios = axios;

createApp(App)
  .use(router)
  .mount('#app');
