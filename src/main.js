import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
