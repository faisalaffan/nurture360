import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IndustrySection from './IndustrySection.vue'

describe('IndustrySection', () => {
  it('renders the section heading and subtitle', () => {
    const wrapper = mount(IndustrySection)
    expect(wrapper.text()).toContain('A solution made for every Industry')
    expect(wrapper.text()).toContain('Tailored messaging experiences')
  })

  it('renders all three industry tabs', () => {
    const wrapper = mount(IndustrySection)
    const tabs = wrapper.findAll('[role="tab"]')
    expect(tabs).toHaveLength(3)
    expect(tabs[0].text()).toBe('E-Commerce & Retail')
    expect(tabs[1].text()).toBe('Hospitality & Travel')
    expect(tabs[2].text()).toBe('Education & Training')
  })

  it('shows ecommerce tab as active by default', () => {
    const wrapper = mount(IndustrySection)
    const tabs = wrapper.findAll('[role="tab"]')
    expect(tabs[0].attributes('aria-selected')).toBe('true')
    expect(tabs[1].attributes('aria-selected')).toBe('false')
    expect(tabs[2].attributes('aria-selected')).toBe('false')
  })

  it('applies active styling to the selected tab', () => {
    const wrapper = mount(IndustrySection)
    const activeTab = wrapper.find('[role="tab"][aria-selected="true"]')
    expect(activeTab.classes()).toContain('bg-primary-600')
    expect(activeTab.classes()).toContain('text-white')
    expect(activeTab.classes()).toContain('shadow-md')
  })

  it('applies inactive styling to non-selected tabs', () => {
    const wrapper = mount(IndustrySection)
    const inactiveTabs = wrapper.findAll('[role="tab"][aria-selected="false"]')
    expect(inactiveTabs.length).toBe(2)
    for (const tab of inactiveTabs) {
      expect(tab.classes()).toContain('bg-white')
      expect(tab.classes()).toContain('text-gray-600')
      expect(tab.classes()).toContain('border')
    }
  })

  it('switches content when a different tab is clicked', async () => {
    const wrapper = mount(IndustrySection)
    // Default: ecommerce content
    expect(wrapper.text()).toContain('Engage shoppers across WhatsApp')

    // Click hospitality tab
    const tabs = wrapper.findAll('[role="tab"]')
    await tabs[1].trigger('click')

    expect(wrapper.text()).toContain('Streamline guest communication')
    expect(tabs[1].attributes('aria-selected')).toBe('true')
    expect(tabs[0].attributes('aria-selected')).toBe('false')
  })

  it('switches to education tab and shows correct content', async () => {
    const wrapper = mount(IndustrySection)
    const tabs = wrapper.findAll('[role="tab"]')
    await tabs[2].trigger('click')

    expect(wrapper.text()).toContain('Connect with students and parents')
    expect(tabs[2].attributes('aria-selected')).toBe('true')
  })

  it('displays the active industry label as a heading', () => {
    const wrapper = mount(IndustrySection)
    const heading = wrapper.find('h3')
    expect(heading.text()).toBe('E-Commerce & Retail')
  })

  it('renders an SVG illustration for the active tab', () => {
    const wrapper = mount(IndustrySection)
    const svg = wrapper.find('[role="tabpanel"] svg')
    expect(svg.exists()).toBe(true)
  })

  it('has a light background (bg-gray-50)', () => {
    const wrapper = mount(IndustrySection)
    const section = wrapper.find('section')
    expect(section.classes()).toContain('bg-gray-50')
  })

  it('tab container has overflow-x-auto for mobile scrolling', () => {
    const wrapper = mount(IndustrySection)
    const tabContainer = wrapper.find('[role="tablist"]')
    expect(tabContainer.classes()).toContain('overflow-x-auto')
  })

  it('renders a tabpanel with correct aria attributes', () => {
    const wrapper = mount(IndustrySection)
    const panel = wrapper.find('[role="tabpanel"]')
    expect(panel.exists()).toBe(true)
    expect(panel.attributes('aria-labelledby')).toBe('tab-ecommerce')
    expect(panel.attributes('id')).toBe('panel-ecommerce')
  })
})
