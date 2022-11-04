export default defineNuxtConfig({
    modules: ['nuxt-bemm'],
    bemm: {
      prefix: '_',
      prefixSkip: ['createMultiBemm'],
      exclude: [],
      alias: [
        ['createBemm', 'myBemm'],
      ]
    }
  })