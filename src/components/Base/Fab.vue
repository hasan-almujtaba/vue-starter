<script
  setup
  lang="ts"
>
interface PropsInterface {
  /**
   * Applies position: absolute to the component.
   */
  absolute?: boolean
  /**
   * Applies position: fixed to the component.
   */
  fixed?: boolean
  /**
   * Aligns the content towards the top.
   */
  top?: boolean
  /**
   * Aligns the content towards the bottom.
   */
  bottom?: boolean
  /**
   * Aligns the content towards the left.
   */
  left?: boolean
  /**
   * Aligns the content towards the right.
   */
  right?: boolean
}

const props = defineProps<PropsInterface>()

/**
 * Base class
 */
const baseClass = [
  'w-[56px]',
  'h-[56px]',
  'flex',
  'items-center',
  'justify-center',
  'shadow-[0px_4px_8px_3px_rgba(0,0,0,0.15]',
  'bg-[color:var(--primary)]',
  'text-[color:var(--on-primary)]',
  'p-[16px]',
  'rounded-2xl',
  'drop-shadow-[0px_1px_3px_rgba(0,0,0,0.3)]',
]

/**
 * Component class
 */
const classes = computed(() => [
  ...baseClass,
  ...[props.absolute && 'absolute'],
  ...[props.fixed && 'fixed'],
  ...[props.top && 'top-4'],
  ...[props.bottom && 'bottom-4'],
  ...[props.left && 'left-4'],
  ...[props.right && 'right-4'],
])
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
