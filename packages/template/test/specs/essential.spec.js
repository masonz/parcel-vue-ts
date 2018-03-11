import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import Essential from '@/components/essential/essential.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Essential.vue', () => {
  let state
  let store

  beforeEach(() => {
    state = {
      essential: [{ label: '1', link: '1' }]
    }
    store = new Vuex.Store({
      state
    })
  })

  it('render the correct number of li.', () => {
    const wrapper = shallow(Essential, { localVue, store })
    expect(wrapper.findAll('li').length).toBe(1)
  })
})
