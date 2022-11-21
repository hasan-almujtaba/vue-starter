<script setup lang="ts">
useHead({
  title: 'Home',
})

const items = [
  {
    title: 'Vue Framework →',
    text: 'Learn more about Vue.js features and API.',
    href: 'https://vuejs.org',
  },
  {
    title: 'Development Tooling →',
    text: 'Learn more about Vite.js features and API for development.',
    href: 'https://vitejs.dev',
  },
  {
    title: 'State Library →',
    text: 'Learn more about Pinia.js features, the new official state library for Vue.js.',
    href: 'https://pinia.vuejs.org',
  },
  {
    title: 'CSS Framework →',
    text: 'Learn more about Tailwind CSS features and API.',
    href: 'https://pinia.vuejs.org',
  },
  {
    title: 'Headless Component →',
    text: 'Learn more about Headless UI features and API.',
    href: 'https://pinia.vuejs.org',
  },
  {
    title: 'Composition Utilities →',
    text: 'Learn more about VueUse features and API.',
    href: 'https://vueuse.org',
  },
]
</script>

<template>
  <div class="mx-auto max-w-3xl px-5 py-20 lg:px-0">
    <h1 class="mb-3 text-center text-3xl font-medium lg:text-5xl">
      Welcome to
      <a
        href="https://github.com/hasan-almujtaba/vue-starter"
        class="bg-gradient-to-r from-blue-600 to-purple-400 bg-clip-text text-transparent"
      >
        Vue Starter
      </a>
      !
    </h1>

    <p class="mb-7 text-center text-lg">
      Vue starter is a simple, fast, and easy to use starter template for
      developing static and SPA websites with Vue.js.
    </p>

    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      <Card
        v-for="(item, i) in items"
        :key="i"
        :href="item.href"
      >
        <template #title> {{ item.title }} </template>

        {{ item.text }}
      </Card>
    </div>

    <p class="mt-5 text-center">
      Get started by editing
      <code class="rounded bg-gray-300 px-1">src/pages/index.vue</code>
    </p>
  </div>
</template>
