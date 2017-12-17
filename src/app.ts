import Vue from 'vue';
import { Component } from "vue-property-decorator";
import template from "./app.vue";
import fs from 'fs';

import { bufferToImage } from './utils';
// import logo from "./assets/logo.png";

const buffer = fs.readFileSync(__dirname + '/assets/logo.png');
const logo = bufferToImage(buffer);

@Component({
  mixins: [template]
})
export default class App extends Vue {

  title: string = 'Parcel-Vue-Ts'
  logo: string = logo;

}
