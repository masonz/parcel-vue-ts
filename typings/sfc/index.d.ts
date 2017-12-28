declare module '*.vue' {
  import { Vue, VueConstructor } from 'vue/types/vue'
  const _default: VueConstructor<Vue>
  export default _default
}

declare module '*.png' {
  const _default: any
  export default _default
}

// --------------------------------- 
// | Types
// ---------------------------------
declare namespace Types {
  interface Link {
    label: string
    link: string
  }
}

// ---------------------------------
// | Vuex State
// ---------------------------------
declare namespace State {
  interface Root {
    ecosystem: Types.Link[]
    essential: Types.Link[]
  }
}
