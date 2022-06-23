<script
  setup
  lang="ts"
>
/**
 * Array containing every features available
 */
const features = ref([
  {
    emoji: '🛠️',
    text: 'Vue 3 with vite configured out of the box',
  },
  {
    emoji: '📁',
    text: 'File based routing with vite-plugin-pages',
  },
  {
    emoji: '🧱',
    text: 'Layout system with vite-plugin-vue-layouts',
  },
  {
    emoji: '🍍',
    text: 'State management using pinia',
  },
  {
    emoji: '📤',
    text: 'Auto import composition api',
  },
  {
    emoji: '📤',
    text: 'Auto import component',
  },
  {
    emoji: '🎨',
    text: 'Easily create custom ui component with tailwind and headless ui',
  },
  {
    emoji: '💯',
    text: 'Produce clean code with eslint and prettier',
  },
  {
    emoji: '⌨️',
    text: 'Safe typing with typescript',
  },
  {
    emoji: '🎤',
    text: 'Code spell checker with vscode extension',
  },
])
</script>

<template>
  <div>
    <h2
      class="text-center font-semibold text-lg lg:text-xl mb-5 text-[color:var(--on-background)]"
    >
      What is included in this starter?
    </h2>

    <div class="space-y-3">
      <FeatureCard
        v-for="(item, i) in features"
        :key="i"
        v-bind="item"
      />
    </div>
  </div>
</template>
