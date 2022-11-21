import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/head', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      dts: true,
      resolvers: [IconsResolver(), HeadlessUiResolver()],
    }),
    Icons(),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    /**
     * Generate dynamic path based on resources on api
     */
    // async includedRoutes(paths) {
    //   const { data: post } = await api.get('posts')
    //   const staticPaths = paths.filter(path => !path.includes(':'))

    //   const dynamicPosts = post.map((item: any) => `/example/${item.id}`)

    //   return [...staticPaths, ...dynamicPosts]
    // },
  },
})
