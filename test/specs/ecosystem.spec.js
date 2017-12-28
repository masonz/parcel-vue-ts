import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import Ecosystem from '@/components/ecosystem/ecosystem.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Ecosystem.vue', () => {
  let state
  let store

  beforeEach(() => {
    state = {
      ecosystem: [{ label: '1', link: '1' }]
    }
    store = new Vuex.Store({
      state
    })
  })

  it('render the correct number of li.', () => {
    const wrapper = shallow(Ecosystem, { localVue, store })
    expect(wrapper.findAll('li').length).toBe(state.ecosystem.length)
  })
})
