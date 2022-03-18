import { createPinia } from 'pinia'
import type { Module } from '~/types/module'

export const install: Module = ({ isClient, initialState, app }) => {
  const pinia = createPinia()
  app.use(pinia)
  if (isClient)
    pinia.state.value = (initialState.pinia) || {}

  else
    initialState.pinia = pinia.state.value
}
