// https://nuxt.com/docs/api/configuration/nuxt-config
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
  runtimeConfig: {
    DADATA_TOKEN: process.env.DADATA_TOKEN,
  },
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: ['nuxt-svgo', "@nuxt/image", 'vue-yandex-maps/nuxt'],
  vite: {
    plugins: [
      Components({
        // add option {resolveIcons: true} as parameter for resolving problem with icons
        resolvers: [AntDesignVueResolver({resolveIcons: true, importStyle: false})],
      }),
    ],
    ssr: {
      noExternal: ['moment', 'compute-scroll-into-view', 'ant-design-vue','@ant-design/icons-vue'],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "~/assets/styles/vendor/index.scss";'
            },
        },
    },
  },
  app: {
    head: {
      title: 'Контакты | Умный сервис',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Умный сервис' },
        { hid: 'og-title', property: 'og:title', content: 'Контакты | Умный сервис'},
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'twitter-card', property: 'twitter:card', content: '' },
        { hid: 'og-image', property: 'og:image', content: ''},
        { hid: 'og-description', property: 'og:description', content: 'Умный сервис'},
        { name: 'format-detection', content: 'telephone=no' }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  yandexMaps: {
    apikey: '9fa90fbc-ce5f-4dc9-ae6d-433e0ec7338b',
  },
})
