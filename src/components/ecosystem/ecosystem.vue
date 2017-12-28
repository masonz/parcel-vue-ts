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
import { State } from 'vuex-class'

@Component
export default class Ecosystem extends Vue {
  @State('ecosystem') list: Types.Link[]
}
</script>

<style lang="scss" scoped>
.ecosystem {
  a {
    color: purple;
  }
}
</style>