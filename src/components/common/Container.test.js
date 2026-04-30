import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Container from './Container.vue'

describe('Container', () => {
  it('renders as a div by default', () => {
    const wrapper = mount(Container)
    expect(wrapper.element.tagName).toBe('DIV')
  })

  it('renders as the specified HTML tag via "as" prop', () => {
    const wrapper = mount(Container, { props: { as: 'section' } })
    expect(wrapper.element.tagName).toBe('SECTION')
  })

  it('applies max-w-7xl and mx-auto classes', () => {
    const wrapper = mount(Container)
    expect(wrapper.classes()).toContain('max-w-7xl')
    expect(wrapper.classes()).toContain('mx-auto')
  })

  it('applies responsive padding classes when padding is true (default)', () => {
    const wrapper = mount(Container)
    expect(wrapper.classes()).toContain('px-4')
    expect(wrapper.classes()).toContain('sm:px-6')
    expect(wrapper.classes()).toContain('lg:px-8')
  })

  it('omits padding classes when padding is false', () => {
    const wrapper = mount(Container, { props: { padding: false } })
    expect(wrapper.classes()).not.toContain('px-4')
    expect(wrapper.classes()).not.toContain('sm:px-6')
    expect(wrapper.classes()).not.toContain('lg:px-8')
  })

  it('renders slot content', () => {
    const wrapper = mount(Container, {
      slots: { default: '<p>Hello World</p>' }
    })
    expect(wrapper.html()).toContain('<p>Hello World</p>')
  })
})
