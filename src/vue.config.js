module.exports = {
    css: {
      loaderOptions: {
        scss: {
          prependData: '@import "../src/assets/_variable.scss";'
        }
      }
    }
  };
