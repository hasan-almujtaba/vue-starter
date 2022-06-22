<script
  lang="ts"
  setup
>
interface PropsInterface {
  /**
   * Designates the component as anchor and applies the href attribute.
   */
  href?: string
  /**
   * Denotes the target route of the link. You can find more information about the prop on the vue-router documentation.
   */
  to?: string
  /**
   * Designates the target attribute. This should only be applied when using the href prop.
   */
  target?: string
  /**
   * Removes the ability to click or target the component.
   */
  disabled?: boolean
}

const props = defineProps<PropsInterface>()

/**
 * Base class
 */
const baseClass = [
  'py-[10px]',
  'px-[24px]',
  'flex',
  'items-center',
  'justify-center',
  'gap-x-2',
  'text-sm',
  'font-medium',
  'rounded-[100px]',
  'relative',
  'transition',
]

/**
 * Disabled class
 */
const disabledClass = [
  'text-[#1C1B1F]/[0.38]',
  'bg-[rgba(31,_31,_31,_0.12)]',
  'cursor-not-allowed',
]

/**
 * Filled class
 */
const filledClass = [
  'bg-[color:var(--primary)]',
  'text-[color:var(--on-primary)]',
  'before:absolute',
  'before:inset-0',
  'before:rounded-[inherit]',
  'before:bg-white',
  'before:opacity-0',
  'hover:before:opacity-[0.08]',
  'hover:shadow-[0px_1px_2px_rgba(0,_0,_0,_0.3),_0px_1px_3px_1px_rgba(0,_0,_0,_0.15);]',
  'active:shadow-none',
]

/**
 * CSS class for component
 */
const classes = computed(() => [
  ...baseClass,
  ...(props.disabled ? disabledClass : filledClass),
])
</script>

<template>
  <a
    v-if="props.href"
    :href="props.href"
    :class="classes"
    :target="target"
  >
    <slot />
  </a>
  <RouterLink
    v-else-if="props.to"
    :to="props.to"
    :class="classes"
  >
    <slot />
  </RouterLink>
  <button
    v-else
    :class="classes"
  >
    <slot />
  </button>
</template>
