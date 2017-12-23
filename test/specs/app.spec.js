const test = require('ava').test
const shallow = require('vue-test-utils').shallow
const App = require('../../src/app.vue').default

test('App.vue', t => {
  const title = 'Parcel-Vue-Ts'
  const wrapper = shallow(App, {
    data: { title }
  })
  t.is(wrapper.find('h1').text() === title, true)
})
