<script setup lang="ts">
const props = defineProps<{
  href?: string
  to?: string
  target?: string
}>()

const cssClasses = 'px-5 py-3 bg-gradient-to-t from-blue-500 to-blue-700 rounded capitalize text-white shadow-md hover:shadow-blue-400 transition-shadow flex items-center justify-center gap-x-2'
</script>

<template>
  <div class="inline-block">
    <a v-if="props.href" :href="props.href" :class="cssClasses" :target="target">
      <slot />
    </a>
    <router-link v-else-if="props.to" :to="props.to" :class="cssClasses">
      <slot />
    </router-link>
    <button v-else :class="cssClasses">
      <slot />
    </button>
  </div>
</template>
