const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        'static':resolve('static')
      }
    },
  },
  devServer:{
    contentBase:path.resolve('src')
  }
}