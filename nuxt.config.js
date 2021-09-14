export default {
  components: true,
  head: {
    titleTemplate: "Nuxt BNB: %s",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      class: ["my-style"]
    },
    meta: [{
      charset: "utf-8",
    }]
  },
  router: {
    prefetchLinks: false,
  },
  plugins: [
    '~/plugins/maps.client',
    '~/plugins/dataApi',
    '~/plugins/auth.client',
    '~/plugins/vCalendar.client',
    '~/plugins/stripe.client',
  ],
  modules: [
    '~/modules/auth',
    '~/modules/algolia',
    '~/modules/cloudinary',
    '@nuxtjs/cloudinary',
    '~/modules/stripe',
  ],
  buildModules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  cloudinary: {
    cloudName: process.env.CLOUDINARY_NAME,
  },
  image: {
    cloudinary: {
      baseURL: `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/image/upload/`
    }
  },
  serverMiddleware: [],
  css: ['~/assets/sass/app.scss'],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    }
  },
  publicRuntimeConfig: {
    rootUrl: process.env.URL,
    auth: {
      cookieName: process.env.GOOGLE_AUTH_COOKIE_NAME,
      clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      key: process.env.ALGOLIA_API_KEY,
    },
    cloudinary: {
      apiKey: process.env.CLOUDINARY_API_KEY,
    },
    google: {
      maps: {
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
    },
    stripe: {
      key: process.env.STRIPE_KEY,
    },
  },
  privateRuntimeConfig: {
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      key: process.env.ALGOLIA_API_SECRET,
    },
    cloudinary: {
      apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
    stripe: {
      secretKey: process.env.STRIPE_SECRET_KEY,
    },
  },
}