<script
  setup
  lang="ts"
>
const classes = computed(() => ['bg-[color:var(--background)]', 'duration-200'])
</script>

<template>
  <RouterView :class="classes" />
</template>
