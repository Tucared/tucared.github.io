import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d1734ffc = () => interopDefault(import('..\\pages\\archi\\index.vue' /* webpackChunkName: "pages/archi/index" */))
const _3ef3d343 = () => interopDefault(import('..\\pages\\photo\\index.vue' /* webpackChunkName: "pages/photo/index" */))
const _d4e0928c = () => interopDefault(import('..\\pages\\archi\\_slug.vue' /* webpackChunkName: "pages/archi/_slug" */))
const _3d3d31fb = () => interopDefault(import('..\\pages\\photo\\_slug.vue' /* webpackChunkName: "pages/photo/_slug" */))
const _043ac2ff = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/archi",
    component: _d1734ffc,
    name: "archi"
  }, {
    path: "/photo",
    component: _3ef3d343,
    name: "photo"
  }, {
    path: "/archi/:slug",
    component: _d4e0928c,
    name: "archi-slug"
  }, {
    path: "/photo/:slug",
    component: _3d3d31fb,
    name: "photo-slug"
  }, {
    path: "/",
    component: _043ac2ff,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
