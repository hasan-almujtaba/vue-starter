<script setup lang="ts">
const props = defineProps<{
  href?: string
  to?: string
  target?: string
}>()

const cssClasses = 'px-5 py-3 bg-blue-100 rounded-full capitalize text-blue-600 flex items-center justify-center gap-x-2 transition duration-500 hover:bg-blue-200'
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
