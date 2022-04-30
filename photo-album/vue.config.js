const appPackage = require('./package.json')
const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

module.exports = {
  // 告诉子应用在这个地址加载静态资源，否则会去基座应用的域名下加载
  publicPath: '/photo',
  // 开发服务器
  devServer: {
    port: process.env.VUE_APP_PORT,
    headers:{
      'Access-Control-Allow-Origin':"*"
    }
  },
  chainWebpack: config => config.resolve.symlinks(false),
  configureWebpack: {
    // 导出umd格式的包，在全局对象上挂载属性package.name，基座应用需要通过这个全局对象获取一些信息，比如子应用导出的生命周期函数
    output: {
      // library的值在所有子应用中需要唯一
      library: appPackage.name,
      libraryTarget: 'umd'
    },
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
  }
}
