const webpack = require('webpack')
module.exports={
    configureWebpack: {
      plugins: [
        new webpack.ProvidePlugin({
          jQuery: 'jquery',
          $: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default']
        })
      ]      
    },  

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: true
      }
    }
}
