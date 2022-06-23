import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import '~/assets/css/main.css'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) =>
      i.install?.(ctx)
    )
  }
)
