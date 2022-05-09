<script setup lang="ts">
import { isDark, toggleDark } from '~/composables/dark'

const iconClass = 'text-blue-600 h-7 w-7'
</script>

<template>
  <button class="fixed p-3 bg-white rounded-full shadow-2xl bottom-7 right-7" @click="toggleDark()">
    <Transition
      enter-from-class="scale-50 opacity-0"
      enter-active-class="duration-300"
      enter-to-class="scale-100 opacity-1"
      mode="out-in"
    >
      <IMdiBrightness7 v-if="isDark" :class="iconClass" />
      <IMdiBrightness2 v-else :class="iconClass" />
    </Transition>
  </button>
</template>
