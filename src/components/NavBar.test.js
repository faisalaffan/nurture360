import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NavBar from './NavBar.vue'

describe('NavBar', () => {
  it('renders the logo text "Nurture360"', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.text()).toContain('Nurture360')
  })

  it('renders nav links (Products, Pricing, Resources)', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.text()).toContain('Products')
    expect(wrapper.text()).toContain('Pricing')
    expect(wrapper.text()).toContain('Resources')
  })

  it('renders CTA buttons (Book a Demo, Sign Up)', () => {
    const wrapper = mount(NavBar)
    expect(wrapper.text()).toContain('Book a Demo')
    expect(wrapper.text()).toContain('Sign Up')
  })

  it('has fixed positioning classes', () => {
    const wrapper = mount(NavBar)
    const nav = wrapper.find('nav')
    expect(nav.classes()).toContain('fixed')
    expect(nav.classes()).toContain('top-0')
    expect(nav.classes()).toContain('z-50')
    expect(nav.classes()).toContain('bg-white')
    expect(nav.classes()).toContain('shadow-sm')
  })

  it('has a hamburger button with aria attributes', () => {
    const wrapper = mount(NavBar)
    const hamburger = wrapper.find('button[aria-label="Toggle navigation menu"]')
    expect(hamburger.exists()).toBe(true)
    expect(hamburger.attributes('aria-expanded')).toBe('false')
    expect(hamburger.attributes('aria-controls')).toBe('mobile-menu')
  })

  it('mobile menu is hidden by default', () => {
    const wrapper = mount(NavBar)
    const mobileMenu = wrapper.find('#mobile-menu')
    expect(mobileMenu.exists()).toBe(true)
    // v-show sets display:none
    expect(mobileMenu.isVisible()).toBe(false)
  })

  it('toggles mobile menu when hamburger is clicked', async () => {
    const wrapper = mount(NavBar)
    const hamburger = wrapper.find('button[aria-label="Toggle navigation menu"]')

    await hamburger.trigger('click')
    expect(wrapper.find('#mobile-menu').isVisible()).toBe(true)
    expect(hamburger.attributes('aria-expanded')).toBe('true')

    await hamburger.trigger('click')
    expect(hamburger.attributes('aria-expanded')).toBe('false')
  })

  it('renders nav links with correct href attributes', () => {
    const wrapper = mount(NavBar)
    const links = wrapper.findAll('a[href^="#"]')
    const hrefs = links.map((l) => l.attributes('href'))
    expect(hrefs).toContain('#products')
    expect(hrefs).toContain('#pricing')
    expect(hrefs).toContain('#resources')
  })

  it('renders CTA buttons with correct href attributes', () => {
    const wrapper = mount(NavBar)
    const links = wrapper.findAll('a[href^="#"]')
    const hrefs = links.map((l) => l.attributes('href'))
    expect(hrefs).toContain('#demo')
    expect(hrefs).toContain('#signup')
  })

  it('logo has primary-600 color class', () => {
    const wrapper = mount(NavBar)
    const logo = wrapper.find('a.text-primary-600')
    expect(logo.exists()).toBe(true)
    expect(logo.text()).toContain('Nurture360')
  })
})
