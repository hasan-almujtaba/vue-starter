<script
  setup
  lang="ts"
>
import { useExample } from '~/stores/example'

interface PropsInterface {
  /**
   * Id
   */
  id: number
  /**
   * Title
   */
  title: string
  /**
   * User id
   */
  userId: number
  /**
   * Post description text
   */
  body: string
}

const props = defineProps<PropsInterface>()

/**
 * Initialize store
 */
const exampleStore = useExample()

/**
 * Delete post from store
 */
const deletePost = () => {
  exampleStore.deletePost(props.id)
}
</script>

<template>
  <div
    class="w-full lg:w-64 border border-[color:var(--outline)] text-[color:var(--on-background)] rounded-lg flex flex-col overflow-hidden"
  >
    <!-- Main Content -->
    <div class="p-5 flex-1">
      <h2 class="font-semibold capitalize">{{ props.title }}</h2>
      <div>
        {{ props.body }}
      </div>
    </div>
    <!-- Main Content -->

    <div class="mt-3 p-2 flex justify-end items-center">
      <Button @click="deletePost">
        <IMdiDelete class="w-[18px] h-[18px] text-[color:var(--on-primary)]" />
        Remove
      </Button>
    </div>
  </div>
</template>
