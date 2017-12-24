import { mount } from 'vue-test-utils'
import Essential from '@/components/essential/essential.vue'

describe('Essential.vue', () => {
  it('render the correct number of li.', () => {
    const wrapper = mount(Essential)
    expect(wrapper.findAll('li').length).toBe(wrapper.vm.list.length)
  })
})
