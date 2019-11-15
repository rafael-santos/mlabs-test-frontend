module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/styles/utils/module.scss";'
      }
    }
  }
};