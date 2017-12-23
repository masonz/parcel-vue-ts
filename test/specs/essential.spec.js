const test = require('ava').test
const { shallow } = require('vue-test-utils')
const Essential = require('../../src/components/essential/essential.vue').default

test('ecosystem.vue', t => {
  const list = [
    { label: 'vue-router', link: 'http://router.vuejs.org/' },
    { label: 'vuex', link: 'http://vuex.vuejs.org/' }
  ]
  const wrapper = shallow(Essential, {
    computed: { list: () => list }
  })
  t.is(wrapper.findAll('li').length, 2)
})
