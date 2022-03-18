import type { ViteSSGContext } from 'vite-ssg'

export type Module = (ctx: ViteSSGContext) => void
