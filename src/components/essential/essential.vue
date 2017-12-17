<template>
    <ul class="essential">
        <li v-for="item in list"
            :key="item.label">
            <a :href="item.link"
               target="_blank">{{ item.label }}</a>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
.essential {
  a {
    color: tomato;
  }
}
</style>
