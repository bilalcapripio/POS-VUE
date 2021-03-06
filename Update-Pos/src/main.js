import { createApp } from 'vue'
// import Vue from 'vue'
import router from './router'
window.$ = require('jquery');
import './assets/admin-lte/js/AdminLTE';
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import VueNumericInput from 'vue-numeric-input';
createApp(App)
.use(router)
.use(VueAxios, axios)
.mount('#app')

