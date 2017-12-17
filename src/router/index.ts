import Vue from 'vue'
import Router from 'vue-router';
import Essential from '../components/essential';
import Ecosystem from '../components/ecosystem';

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: 'essential',
            path: '/essential',
            component: Essential
        },
        {
            name: 'ecosystem',
            path: '/ecosystem',
            component: Ecosystem
        },
        { path: '*', redirect: '' }
    ]
});