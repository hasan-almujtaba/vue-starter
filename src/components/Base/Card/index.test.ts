import { mount } from '@vue/test-utils'
import Card from './index.vue'

describe('Card', () => {
  test('component is rendered as link', () => {
    const wrapper = mount(Card, {
      props: {
        href: 'http://example.com',
      },
    })

    expect(wrapper.element.tagName).toBe('A')
  })

  test('component is rendered as div', () => {
    const wrapper = mount(Card)

    expect(wrapper.element.tagName).toBe('DIV')
  })
})
