<script setup lang="ts">
useHead({
  title: 'Page Not Found',
})
</script>

<template>
  <div class="h-full flex items-center justify-center">
    <div class="flex items-center text-[color:var(--on-background)] gap-x-2">
      <div class="text-2xl border-r border-[color:var(--outline)] px-1">
        404
      </div>
      <div>Page Not Found</div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
