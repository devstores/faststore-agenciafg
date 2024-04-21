
module.exports = {
  seo: {
  "title": "FastStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "agenciafg",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://agenciafg.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/testes%20e%20integra%C3%A7%C3%A3o%20(departamento)",
    search: "/s?q=Prevent",
    pdp: "/dp2101-c18-unica-unico/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/dp2101-c18-unica-unico/p",
      collection: "/testes%20e%20integra%C3%A7%C3%A3o%20(departamento)",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/dp2101-c18-unica-unico/p",
      collection: "/testes%20e%20integra%C3%A7%C3%A3o%20(departamento)",
      collection_filtered: "/testes%20e%20integra%C3%A7%C3%A3o%20(departamento)/?category-1=testes%20e%20integra%C3%A7%C3%A3o%20(departamento)&brand=Prevent&facets=category-1%2Cbrand%27",
      search: "/s?q=Prevent",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-1234567",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://agenciafg.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
