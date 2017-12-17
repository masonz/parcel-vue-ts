<template>
    <ul class="ecosystem">
        <li v-for="item in list"
            :key="item.label">
            <a :href="item.link"
               target="_blank">{{ item.label }}</a>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
.ecosystem {
  a {
    color: purple;
  }
}
</style>