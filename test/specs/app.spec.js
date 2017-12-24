import { shallow } from 'vue-test-utils'
import App from '@/app.vue'

describe('App.vue', () => {
  it('render corrent title.', () => {
    const title = 'Parcel-Vue-Ts'
    const wrapper = shallow(App, {
      data: { title }
    })
    expect(wrapper.find('h1').text()).toBe(title)
  })
})
