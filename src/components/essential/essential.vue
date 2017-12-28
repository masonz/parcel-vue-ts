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
import { State } from 'vuex-class'

@Component
export default class Essential extends Vue {
  @State('essential') list: Types.Link[]
}
</script>

<style lang="scss" scoped>
.essential {
  a {
    color: tomato;
  }
}
</style>
