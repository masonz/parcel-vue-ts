var TypeScriptAsset = require('parcel-bundler/src/assets/TypeScriptAsset.js')

module.exports = {
  // extractCSS: process.env.NODE_ENV === 'production',
  customCompilers: {
    ts: function(content, cb, compiler, filePath) {
      let ts = new TypeScriptAsset(filePath, {}, { rootDir: filePath })
      ts.contents = content
      ts.process().then(res => {
        cb(null, res.js)
      })
    }
  }
}
