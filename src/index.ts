import Vue from 'vue'
import App from './app.vue'
import router from './router'

const app = new Vue({
  router,
  render: h => h(App),
  el: 'app',
  components: {
    App
  }
})
