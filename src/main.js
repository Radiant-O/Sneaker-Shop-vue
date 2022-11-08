import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//Slider
import VueSplide from '@splidejs/vue-splide';
//Style
import '@/assets/styles.css'

createApp(App).use(router, VueSplide).mount('#app')