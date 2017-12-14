import Vue from "vue";
import App from './app';

const app = new Vue(App);

app.$mount("#app"); // Use '$mount' function take the place of 'el' property
