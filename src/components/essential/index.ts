import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import mixins from './essential.vue';

@Component({
    mixins: [mixins]
})
export default class Essential extends Vue {

    get list(): any[] {
        return [
            { label: "Core Docs", link: "https://vuejs.org" },
            { label: "Forum", link: "https://forum.vuejs.org" },
            { label: "Community Chat", link: "https://chat.vuejs.org" },
            { label: "Twitter", link: "https://twitter.com/vuejs" }
        ];
    }

}