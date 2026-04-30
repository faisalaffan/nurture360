import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChannelsSection from './ChannelsSection.vue'

describe('ChannelsSection', () => {
  it('renders the section heading', () => {
    const wrapper = mount(ChannelsSection)
    expect(wrapper.text()).toContain('One platform, Infinite ways to talk')
  })

  it('renders all 6 channel icons', () => {
    const wrapper = mount(ChannelsSection)
    const icons = wrapper.findAll('[data-testid="channel-icon"]')
    expect(icons).toHaveLength(6)
  })

  it('renders channel names', () => {
    const wrapper = mount(ChannelsSection)
    const expectedChannels = ['WhatsApp', 'Instagram', 'TikTok', 'Telegram', 'Facebook', 'LINE']
    expectedChannels.forEach((name) => {
      expect(wrapper.text()).toContain(name)
    })
  })

  it('renders channel icon circles with first letter and brand color', () => {
    const wrapper = mount(ChannelsSection)
    const icons = wrapper.findAll('[data-testid="channel-icon"]')

    // WhatsApp should show "W" with a background color style
    const whatsappCircle = icons[0].find('.rounded-full')
    expect(whatsappCircle.text()).toBe('W')
    expect(whatsappCircle.attributes('style')).toContain('background-color')

    // Instagram should show "I" with a background color style
    const instagramCircle = icons[1].find('.rounded-full')
    expect(instagramCircle.text()).toBe('I')
    expect(instagramCircle.attributes('style')).toContain('background-color')
  })

  it('renders all 4 feature cards', () => {
    const wrapper = mount(ChannelsSection)
    const cards = wrapper.findAll('[data-testid="feature-card"]')
    expect(cards).toHaveLength(4)
  })

  it('renders feature card titles and descriptions', () => {
    const wrapper = mount(ChannelsSection)
    const expectedFeatures = ['Unified Inbox', 'Smart Routing', 'Analytics Dashboard', 'Automation']
    expectedFeatures.forEach((title) => {
      expect(wrapper.text()).toContain(title)
    })
  })

  it('applies dark theme to feature cards', () => {
    const wrapper = mount(ChannelsSection)
    const cards = wrapper.findAll('[data-testid="feature-card"]')
    cards.forEach((card) => {
      expect(card.classes()).toContain('bg-dark')
    })
  })

  it('renders SVG icons in feature cards', () => {
    const wrapper = mount(ChannelsSection)
    const cards = wrapper.findAll('[data-testid="feature-card"]')
    cards.forEach((card) => {
      expect(card.find('svg').exists()).toBe(true)
    })
  })
})
