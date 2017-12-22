<template>
  <ul class="essential">
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
export default class Essential extends Vue {
  get list(): any[] {
    return [
      { label: 'Core Docs', link: 'https://vuejs.org' },
      { label: 'Forum', link: 'https://forum.vuejs.org' },
      { label: 'Community Chat', link: 'https://chat.vuejs.org' },
      { label: 'Twitter', link: 'https://twitter.com/vuejs' }
    ]
  }
}
</script>

<style lang="scss" scoped>
.essential {
  a {
    color: tomato;
  }
}
</style>
