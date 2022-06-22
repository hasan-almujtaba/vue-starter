<script
  lang="ts"
  setup
>
interface PropsInterface {
  /**
   * Set border to component
   */
  outlined?: boolean
}

/**
 * Composable for detect window scroll
 */
const { y } = useWindowScroll()

const props = defineProps<PropsInterface>()

/**
 * Shadow on scroll
 */
const shadowOnHover = [
  'shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_2px_6px_2px_rgba(0,_0,_0,_0.15)]',
]

/**
 * Base class
 */
const baseClass = [
  'px-4',
  'h-16',
  'flex',
  'gap-x-6',
  'bg-[color:var(--surface)]',
  'text-[color:var(--on-surface)]',
  'items-center',
  'fixed',
  'inset-x-0',
  'z-[5]',
  'top-0',
]

/**
 * Outlined class
 */
const outlinedClass = [
  'border',
  'border-solid',
  'border-[color:var(--outline)]',
]

const classes = computed(() => [
  ...baseClass,
  ...(props.outlined ? outlinedClass : []),
  ...(y.value > 10 ? shadowOnHover : []),
])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
