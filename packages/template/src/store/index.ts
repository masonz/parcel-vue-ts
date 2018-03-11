import Vue from 'vue'
import * as Vuex from 'vuex'

Vue.use(Vuex)

const state: State.Root = {
  ecosystem: [
    { label: 'vue-router', link: 'http://router.vuejs.org/' },
    { label: 'vuex', link: 'http://vuex.vuejs.org/' },
    { label: 'vue-loader', link: 'http://vue-loader.vuejs.org/' },
    { label: 'awesome-vue', link: 'https://github.com/vuejs/awesome-vue' }
  ],
  essential: [
    { label: 'Core Docs', link: 'https://vuejs.org' },
    { label: 'Forum', link: 'https://forum.vuejs.org' },
    { label: 'Community Chat', link: 'https://chat.vuejs.org' },
    { label: 'Twitter', link: 'https://twitter.com/vuejs' }
  ]
}
const mutations = {}
const actions = {}
const getters = {}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
