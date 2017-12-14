<template>
  <div class="center">
    <img :src="logo">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="item in essentialLinks" :key="item.label">
        <a :href="item.link" target="_blank">{{ item.label }}</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li v-for="item in ecosystem" :key="item.label">
        <a :href="item.link" target="_blank">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>
<style src="./app.scss" lang="scss"></style>
