import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import mixins from './ecosystem.vue';

@Component({
    mixins: [mixins]
})
export default class Ecosystem extends Vue {

    get list(): any[] {
        return [
            { label: "vue-router", link: "http://router.vuejs.org/" },
            { label: "vuex", link: "http://vuex.vuejs.org/" },
            { label: "vue-loader", link: "http://vue-loader.vuejs.org/" },
            { label: "awesome-vue", link: "https://github.com/vuejs/awesome-vue" }
        ];
    }

}