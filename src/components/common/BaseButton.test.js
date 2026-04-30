import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  it('renders as a button by default', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.element.tagName).toBe('BUTTON')
  })

  it('renders as an anchor when href is provided', () => {
    const wrapper = mount(BaseButton, { props: { href: '#signup' } })
    expect(wrapper.element.tagName).toBe('A')
    expect(wrapper.attributes('href')).toBe('#signup')
  })

  it('does not set href attribute when href is not provided', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.attributes('href')).toBeUndefined()
  })

  it('renders slot content', () => {
    const wrapper = mount(BaseButton, {
      slots: { default: 'Click Me' }
    })
    expect(wrapper.text()).toBe('Click Me')
  })

  // Variant classes
  it('applies primary variant classes by default', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.classes()).toContain('bg-primary-600')
    expect(wrapper.classes()).toContain('text-white')
    expect(wrapper.classes()).toContain('hover:bg-primary-700')
  })

  it('applies secondary variant classes', () => {
    const wrapper = mount(BaseButton, { props: { variant: 'secondary' } })
    expect(wrapper.classes()).toContain('bg-primary-100')
    expect(wrapper.classes()).toContain('text-primary-700')
    expect(wrapper.classes()).toContain('hover:bg-primary-200')
  })

  it('applies outline variant classes', () => {
    const wrapper = mount(BaseButton, { props: { variant: 'outline' } })
    expect(wrapper.classes()).toContain('border-2')
    expect(wrapper.classes()).toContain('border-primary-600')
    expect(wrapper.classes()).toContain('text-primary-600')
    expect(wrapper.classes()).toContain('hover:bg-primary-50')
  })

  // Size classes
  it('applies md size classes by default', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.classes()).toContain('px-6')
    expect(wrapper.classes()).toContain('py-3')
    expect(wrapper.classes()).toContain('text-base')
  })

  it('applies sm size classes', () => {
    const wrapper = mount(BaseButton, { props: { size: 'sm' } })
    expect(wrapper.classes()).toContain('px-4')
    expect(wrapper.classes()).toContain('py-2')
    expect(wrapper.classes()).toContain('text-sm')
  })

  it('applies lg size classes', () => {
    const wrapper = mount(BaseButton, { props: { size: 'lg' } })
    expect(wrapper.classes()).toContain('px-8')
    expect(wrapper.classes()).toContain('py-4')
    expect(wrapper.classes()).toContain('text-lg')
  })

  // Common classes
  it('applies base styling classes (rounded, transition, min tap target)', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.classes()).toContain('rounded-lg')
    expect(wrapper.classes()).toContain('font-semibold')
    expect(wrapper.classes()).toContain('transition-colors')
    expect(wrapper.classes()).toContain('duration-200')
    expect(wrapper.classes()).toContain('min-h-[44px]')
    expect(wrapper.classes()).toContain('min-w-[44px]')
  })
})
