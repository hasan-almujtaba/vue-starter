<script setup lang="ts">
import { isDark } from '~/composables/dark'

const classObject = computed(() => ({
  'dark dark:bg-gray-900': isDark,
}))
</script>

<template>
  <router-view class="duration-200" :class="classObject" />
</template>
