<template>
  <ul class="ecosystem">
    <li v-for="item in list"
        :key="item.label">
      <a :href="item.link"
         target="_blank">{{ item.label }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Ecosystem extends Vue {
  get list(): any[] {
    return [
      { label: 'vue-router', link: 'http://router.vuejs.org/' },
      { label: 'vuex', link: 'http://vuex.vuejs.org/' },
      { label: 'vue-loader', link: 'http://vue-loader.vuejs.org/' },
      { label: 'awesome-vue', link: 'https://github.com/vuejs/awesome-vue' }
    ]
  }
}
</script>

<style lang="scss" scoped>
.ecosystem {
  a {
    color: purple;
  }
}
</style>