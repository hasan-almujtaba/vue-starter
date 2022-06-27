<script
  setup
  lang="ts"
>
useHead({
  title: 'Home',
})
</script>

<template>
  <div class="px-4 pt-20 pb-10">
    <!-- Title & Subtitle -->
    <div class="text-center text-[color:var(--on-background)]">
      <h1 class="text-3xl lg:text-4xl font-bold">Vue Starter</h1>
      <div class="tracking-widest lg:text-xl italic font-light">
        Opinionated Vue Starter
      </div>
    </div>
    <!-- Title & Subtitle -->

    <!-- Feature list -->
    <FeatureList class="mt-10 mb-5" />
    <!-- Feature list -->

    <!-- Example link -->
    <div class="text-center">
      <RouterLink
        to="/examples"
        class="text-[color:var(--on-background)] hover:underline"
        >See example in action</RouterLink
      >
    </div>
    <!-- Example link -->
  </div>
</template>
