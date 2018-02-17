import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import essential from '../components/essential/essential.vue'
import ecosystem from '../components/ecosystem/ecosystem.vue'

const routes = [
  {
    name: 'essential',
    path: '/essential',
    component: essential
  },
  {
    name: 'ecosystem',
    path: '/ecosystem',
    component: ecosystem
  },
  { path: '*', redirect: '' }
]

export default new Router({ routes })
