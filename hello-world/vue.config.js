
module.exports = {
    configureWebpack: {
      devtool: 'source-map'//vs code调试需此代码
    },
    devServer: {
      port:8015,//客户端
      proxy: 'http://localhost:4000'//服务端api
    }
  }
