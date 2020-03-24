const {
  override,
  fixBabelImports,
  overrideDevServer,
  addWebpackExternals,
  addLessLoader
} = require('customize-cra');

const theme = require('./config/theme');
const addScopedCSS = require('./config/scoped-css-loader');


// console.log(process.env.NODE_ENV);

//自定义添加plugin / 内置api addWebpackPlugin
// const webpack = require('webpack');
// const addMyPlugin = config => {
//   config.plugins.push(new webpack.ProvidePlugin({
//     'window.ccc': 'jquery'
//   }))
//   return config
// }
//
// addWebpackExternals 添加外部依赖项，将库卸载到CDN。

// let custom = config=>{
//   config.devtool = false;
//   return config
// }

const devServerConfig = config => {

  config.proxy = {
    '/proxy': {
      target: 'https://arsmo.oicp.io',
      changeOrigin: true, // 跨域
      ws: false,
      pathRewrite: {
        '^/proxy': '',
      },
      secure: false, // https
    },
  }

  return config;
}

module.exports = {
  webpack:override(
    //addScopedCSS,
    fixBabelImports('import', {libraryName: 'antd-mobile', style: true}),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: theme,
    }),
    // addWebpackExternals({
    //   react: 'React',
    //   'react-dom': 'ReactDOM',
    //   'react-router-dom':'ReactRouterDOM',
    //   lodash: '_',
    // })
  ),
  devServer: overrideDevServer(
    addScopedCSS,
    devServerConfig
  )
}