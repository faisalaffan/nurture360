import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionHeading from './SectionHeading.vue'

describe('SectionHeading', () => {
  it('renders the title text', () => {
    const wrapper = mount(SectionHeading, { props: { title: 'Test Title' } })
    expect(wrapper.find('h2').text()).toBe('Test Title')
  })

  it('renders the subtitle when provided', () => {
    const wrapper = mount(SectionHeading, {
      props: { title: 'Title', subtitle: 'A subtitle here' }
    })
    expect(wrapper.find('p').text()).toBe('A subtitle here')
  })

  it('does not render subtitle element when subtitle is empty', () => {
    const wrapper = mount(SectionHeading, { props: { title: 'Title' } })
    expect(wrapper.find('p').exists()).toBe(false)
  })

  // Alignment
  it('applies text-center by default', () => {
    const wrapper = mount(SectionHeading, { props: { title: 'Title' } })
    expect(wrapper.classes()).toContain('text-center')
  })

  it('applies text-left when align is left', () => {
    const wrapper = mount(SectionHeading, { props: { title: 'Title', align: 'left' } })
    expect(wrapper.classes()).toContain('text-left')
    expect(wrapper.classes()).not.toContain('text-center')
  })

  // Dark mode
  it('applies dark text colors when dark is true', () => {
    const wrapper = mount(SectionHeading, {
      props: { title: 'Title', subtitle: 'Sub', dark: true }
    })
    expect(wrapper.find('h2').classes()).toContain('text-white')
    expect(wrapper.find('p').classes()).toContain('text-gray-300')
  })

  it('applies light text colors when dark is false (default)', () => {
    const wrapper = mount(SectionHeading, {
      props: { title: 'Title', subtitle: 'Sub' }
    })
    expect(wrapper.find('h2').classes()).toContain('text-gray-900')
    expect(wrapper.find('p').classes()).toContain('text-gray-600')
  })

  // Typography hierarchy
  it('applies correct typography classes for clear hierarchy', () => {
    const wrapper = mount(SectionHeading, { props: { title: 'Title' } })
    const h2 = wrapper.find('h2')
    expect(h2.classes()).toContain('text-3xl')
    expect(h2.classes()).toContain('sm:text-4xl')
    expect(h2.classes()).toContain('font-bold')
  })

  // Spacing
  it('applies mb-12 for section spacing', () => {
    const wrapper = mount(SectionHeading, { props: { title: 'Title' } })
    expect(wrapper.classes()).toContain('mb-12')
  })
})
