<script setup lang="ts">
import type Feature from '~/types/feature.interface'

useHead({
  title: 'About',
})

const features: Feature[] = [
  {
    title: '⚡️ Vue 3 SSG with yarn',
  },
  {
    title: '🎨 Tailwind CSS',
  },
  {
    title: '📚 Headless UI',
  },
  {
    title: '📁 File Based Routing',
  },
  {
    title: '📑 Layout System',
  },
  {
    title: '🍍 Pinia State Management',
  },
  {
    title: '📥 Auto import APIs',
  },
  {
    title: '📦 Auto import Components',
  },
  {
    title: '🖇️ Axios included',
  },
]
</script>

<template>
  <div class="px-10">
    <h1 class="text-3xl text-blue-600 font-bold mb-3">
      Vue 3 starter project with features :
    </h1>
    <ul class="text-xl">
      <li v-for="(item,i) in features" :key="i">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
