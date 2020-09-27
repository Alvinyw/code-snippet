const path = require('path')
// import { baseUrl } from '@/config/env'

function resolve(dir) {
  path.join(__dirname, dir)
}

module.exports = {
  //publicPath: 'http://192.168.188.46:8080/',
  //publicPath: './',
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/api': { //此处并非和url一致
        target: 'http://192.168.188.49:8084/',
        //target: 'http://192.168.188.188:8083/open-user-api/',
        changeOrigin: true, //允许跨域
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        images: '@/assets/images',
        components: '@/components',
        views: '@/views'
      }
    }
  }
}