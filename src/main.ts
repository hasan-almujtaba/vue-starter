import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import '~/assets/css/main.css'
import { Module } from '~/types/module'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(
      import.meta.glob<{ install: Module }>('./modules/*.ts', { eager: true })
    ).forEach((i) => i.install?.(ctx))
  }
)
