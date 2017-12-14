import { Component, Vue } from "vue-property-decorator";
import template from "./app.vue";

import logo from "./assets/logo.png";

@Component({
  mixins: [template]
})
export default class App extends Vue {
  name: string = "Parcel";
  logo = logo;

  get essentialLinks(): any[] {
    return [
      { label: "Core Docs", link: "https://vuejs.org" },
      { label: "Forum", link: "https://forum.vuejs.org" },
      { label: "Community Chat", link: "https://chat.vuejs.org" },
      { label: "Twitter", link: "https://twitter.com/vuejs" }
    ];
  }

  get ecosystem(): any[] {
    return [
      { label: "vue-router", link: "http://router.vuejs.org/" },
      { label: "vuex", link: "http://vuex.vuejs.org/" },
      { label: "vue-loader", link: "http://vue-loader.vuejs.org/" },
      { label: "awesome-vue", link: "https://github.com/vuejs/awesome-vue" }
    ];
  }

  mounted() {
    console.log(this.logo);
  }
}
