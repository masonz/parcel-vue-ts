<template>
  <div class="main">
    <img :src="logo">
    <h1>{{ title }}</h1>
    <router-link tag="button"
                 :to="{ 'name': 'essential' }">
      Essential
    </router-link>
    <router-link tag="button"
                 :to="{ 'name': 'ecosystem' }">
      Ecosystem
    </router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.main {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

button {
  padding: 4px 6px;
  color: #42b983;
  border: 1px solid #42b983;
  outline: none;
  transition: 0.25s;
  cursor: pointer;

  &:hover,
  &.router-link-active {
    color: #ffffff;
    background-color: #42b983;
  }
}

button + button {
  margin-left: 4px;
}
</style>
