module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost::3300',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
    css: {
      loaderOptions: {
        scss: {
          prependData: '@import "../src/assets/_variable.scss";'
        }
      }
    }
  };
