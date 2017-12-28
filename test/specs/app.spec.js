import { mount } from 'vue-test-utils'
import App from '@/app.vue'

describe('App.vue', () => {
  it('render corrent title.', () => {
    const title = 'test'
    const wrapper = mount(App, {
      data: { title }
    })
    expect(wrapper.find('h1').text()).toBe('test')
  })
})
