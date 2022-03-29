<script setup lang="ts">
import { isDark, toggleDark } from '~/composables/dark'
import LightIcon from '~icons/mdi/brightness-7'
import DarkIcon from '~icons/mdi/brightness-2'

</script>

<template>
  <button class="fixed bottom-7 right-7 p-3 rounded-full shadow-2xl bg-white" @click="toggleDark()">
    <component :is="isDark ? LightIcon : DarkIcon" class="h-7 w-7 text-blue-600" />
  </button>
</template>
