importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.924d9a4.js",
    "revision": "f14bfcf678693bf923f8dae9bc8c5048"
  },
  {
    "url": "/_nuxt/app.944f890.css",
    "revision": "a226862bbc156e9cc45c428c05cdad15"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.1d03ff6.js",
    "revision": "8bd4427e114eeba79a0df837b7731b98"
  },
  {
    "url": "/_nuxt/pages/categories.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/categories.b19ebb0.js",
    "revision": "ae7626ee22b5dba2c265f0e76fa9ffb0"
  },
  {
    "url": "/_nuxt/pages/category/_slug.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/category/_slug.b38d15b.js",
    "revision": "3f35f692caebc5d9a07fe0f13f4235a3"
  },
  {
    "url": "/_nuxt/pages/index.d7a6584.js",
    "revision": "4890db2d6595ff78c43e0dad7e5b688d"
  },
  {
    "url": "/_nuxt/pages/index.fc6cde2.css",
    "revision": "570a46bcac73e9592d39654829f3ca8a"
  },
  {
    "url": "/_nuxt/pages/page/_slug.c7e519a.js",
    "revision": "cf49dd036408965602063c314c674261"
  },
  {
    "url": "/_nuxt/runtime.0fbeed7.js",
    "revision": "404d8f7eed43c40953d4f5c4a4a18b63"
  },
  {
    "url": "/_nuxt/vendors/commons.ab108ce.js",
    "revision": "87288760638c76e3ca2d2ae14cacc046"
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
