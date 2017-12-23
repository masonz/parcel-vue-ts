// Setup browser environment
require('browser-env')()
const hooks = require('require-extension-hooks')
const Vue = require('vue')
const ts = require('typescript')

// Setup Vue.js to remove production tip
Vue.config.productionTip = false

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue')
  .plugin('vue')
  .push()

// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js'])
  .plugin('babel')
  .push()

// process ts files
hooks('ts').push(function({ content, filename }) {
  const { compilerOptions } = require('../../tsconfig.json')
  let res = ts.transpileModule(content, {
    compilerOptions
  })
  return { content: res.outputText, sourceMap: res.sourceMapText }
})
