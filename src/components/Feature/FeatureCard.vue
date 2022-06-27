<script
  setup
  lang="ts"
>
interface PropsInterface {
  /**
   * Emoji
   */
  emoji: string
  /**
   * Description text
   */
  text: string
}

const props = defineProps<PropsInterface>()
</script>

<template>
  <div
    class="rounded border border-[color:var(--outline)] p-2 w-full lg:w-96 mx-auto flex items-center gap-x-2 lg:transition lg:hover:translate-x-10"
  >
    <div>
      {{ props.emoji }}
    </div>
    <div class="text-[color:var(--on-background)]">
      {{ props.text }}
    </div>
  </div>
</template>
