import { mount } from 'vue-test-utils'
import Ecosystem from '@/components/ecosystem/ecosystem.vue'

describe('Ecosystem.vue', () => {
  it('render the correct number of li.', () => {
    const wrapper = mount(Ecosystem)
    expect(wrapper.findAll('li').length).toBe(wrapper.vm.list.length)
  })
})
