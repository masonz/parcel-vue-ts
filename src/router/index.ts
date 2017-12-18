import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);

const pages: { [key: string]: Promise<any> } = {
    essential: import('../components/essential'),
    ecosystem: import('../components/ecosystem')
};

let lazyLoad = (name: string) => {
    return async () => {
        const component = await pages[name]
        return component.default
    }
}

const routes = [
    {
        name: 'essential',
        path: '/essential',
        component: lazyLoad('essential')
    },
    {
        name: 'ecosystem',
        path: '/ecosystem',
        component: lazyLoad('ecosystem')
    },
    { path: '*', redirect: '' }
]

export default new Router({ routes });