importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.802b47b.js",
    "revision": "94a9fe8e1267581362d60a82b93c6b32"
  },
  {
    "url": "/_nuxt/app.bec4400.css",
    "revision": "c634d7e57a5db9fe464c1b7e68d23dca"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.435d970.js",
    "revision": "a00bb530c87ef6290abc4dc6ef34b40d"
  },
  {
    "url": "/_nuxt/pages/categories.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/categories.ce30e3c.js",
    "revision": "0c11026699c9b3a96f7fb66c6ce641f3"
  },
  {
    "url": "/_nuxt/pages/category/_slug.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/category/_slug.e3bd969.js",
    "revision": "6e7218ee770ed903d7771f45a07ec808"
  },
  {
    "url": "/_nuxt/pages/index.5cbd6df.js",
    "revision": "e317f5460a957b6f730ced2a733c1cbf"
  },
  {
    "url": "/_nuxt/pages/index.fc6cde2.css",
    "revision": "570a46bcac73e9592d39654829f3ca8a"
  },
  {
    "url": "/_nuxt/pages/page/_slug.1cf4d77.js",
    "revision": "e76c72467c96eede116de4039c7ac159"
  },
  {
    "url": "/_nuxt/runtime.dd9b0ae.js",
    "revision": "19a3ddbf146b6f8f269b6a973175668c"
  },
  {
    "url": "/_nuxt/vendors/commons.067763f.js",
    "revision": "889e5007ba507df8c48f2cbd669d0176"
  }
], {
  "cacheId": "bael-cms-template",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
