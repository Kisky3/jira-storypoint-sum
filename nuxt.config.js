import Sass from 'sass'
import Fiber from 'fibers'

require('dotenv').config()
const {
  JIRA_TEAM_BLUE,
  JIRA_TEAM_YELLOW,
  JIRA_API_BASE_URL,
  JIRA_API_USER,
} = process.env
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: 'jira-storypoint-sum',
    htmlAttrs: {
      lang: 'en',
    },
    vite: {
      ssr: false,
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    buildModules: [
      // https://go.nuxtjs.dev/typescript
      '@nuxt/typescript-build',
      'nuxt-vite', // 追加
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/scss/common.scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],
  styleResources: {
    scss: ['~/assets/scss/_variable.scss'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
        },
      },
    },
    env: {
      JIRA_TEAM_BLUE,
      JIRA_TEAM_YELLOW,
      JIRA_API_BASE_URL,
      JIRA_API_USER,
    },
  },
  generate: {
    fallback: true,
  },
}
