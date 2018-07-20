import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue';
import tasksRoutes from './components/tasks/router';

Vue.use(Router);

const baseRoutes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: 'My TODO List'
        }
    }
];

const routes = baseRoutes.concat(tasksRoutes);

export default new Router({
    mode: 'history',
    routes
})