<script setup lang="ts">
import { isDark } from '~/composables/dark'

</script>

<template>
  <router-view class="bg-gray-100" :class="[isDark ? 'dark dark:bg-gray-800' : '']" />
</template>
