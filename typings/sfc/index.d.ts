declare module '*.vue' {
  import { Vue, VueConstructor } from 'vue/types/vue'
  const _default: VueConstructor<Vue>
  export default _default
}

declare module '*.png' {
  const _default: any
  export default _default
}
