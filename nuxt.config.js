import { client } from './utils/microcms'
const { API_KEY, SERVICE_ID } = process.env
// import axios from 'axios'

export default {
  srcDir: 'src/',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog-jamstack',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'robots', content: 'noindex,nofollow' },
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/common.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '@/components/',
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-microcms-module',
    '@nuxtjs/composition-api/module',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Routing configuration
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/page/:id',
        component: resolve(__dirname, 'src/pages/index.vue'),
        name: 'pages',
      })
      routes.push({
        path: '/:slug',
        component: resolve(__dirname, 'src/pages/_slug/index.vue'),
        name: 'article-pages',
      })
      routes.push({
        path: '/category/:categoryId',
        component: resolve(__dirname, 'src/pages/index.vue'),
        name: 'article-categories',
      })
      routes.push({
        path: '*',
        component: resolve(__dirname, 'src/pages/404.vue'),
        name: 'custom',
      })
    },
  },

  generate: {
    interval: 100,
    async routes() {
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)
      const limit = 50

      // 詳細ページ
      const getArticles = (offset = 0) => {
        return client
          .get({
            endpoint: 'blog',
            queries: {
              offset,
              limit,
              depth: 2,
            },
          })
          .then(async (res) => {
            let articles = []
            if (res.totalCount > offset + limit) {
              articles = await getArticles(offset + limit)
            }
            return [
              ...res.contents.map((content) => ({
                route: `/${content.id}`,
                payload: { content },
              })),
              ...articles,
            ]
          })
      }
      const articles = await getArticles()

      // 一覧ページ
      const index = {
        route: '/',
        payload: {},
      }

      // 一覧のページング
      const pages = await client
        .get({
          endpoint: 'blog',
          queries: {
            limit: 0,
          },
        })
        .then((res) =>
          range(1, Math.ceil(res.totalCount / 10)).map((p) => ({
            route: `/page/${p}`,
            payload: {},
          }))
        )

      const categories = await client
        .get({
          endpoint: 'categories',
          queries: {
            fields: 'id',
          },
        })
        .then(({ contents }) => {
          return contents.map((content) => content.id)
        })

      // カテゴリーページ
      const categoryPages = await Promise.all(
        categories.map((category) =>
          client
            .get({
              endpoint: 'blog',
              queries: {
                limit: 0,
                filters: `category[equals]${category}`,
              },
            })
            .then((res) => {
              return range(1, Math.ceil(res.totalCount / 10)).map((p) => ({
                route: `/category/${category}/page/${p}`,
                payload: {},
              }))
            })
        )
      )
      const flattenCategoryPages = [].concat.apply([], categoryPages)

      return [index, ...articles, ...pages, ...flattenCategoryPages]
    },
    dir: 'dist',
  },

  // generate: {
  //   interval: 100,
  //   async routes() {
  //     const range = (start, end) =>
  //       [...Array(end - start + 1)].map((_, i) => start + i);
  //     const limit = 50;

  //     const categoryPages = await Promise.all(
  //       categories.map((categories) =>
  //         client
  //           .get({
  //             endpoint: 'blog',
  //             queries: {
  //               limit: 0,
  //               filters: `category[equals]${categories}`,
  //             },
  //           })
  //           .then((res) => {
  //             return range(1, Math.ceil(res.totalCount / 10)).map((p) => ({
  //               route: `/category/${category}/page/${p}`,
  //             }));
  //           })
  //       )
  //     );
  //     const flattenCategoryPages = [].concat.apply([], categoryPages);

  //     return [
  //       index,
  //       ...pages,
  //       ...flattenCategoryPages,
  //     ];
  //   },
  //   dir: 'dist',
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  microcms: {
    options: {
      serviceDomain: SERVICE_ID,
      apiKey: API_KEY,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  tailwindcss: {
    configPath: '../tailwind.config.js',
  },
}
