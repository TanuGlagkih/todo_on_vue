import Vue from 'vue'
import App from "./App.vue";
import router from './router';
import './style.scss';

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
