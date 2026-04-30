import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, nextTick } from 'vue'
import { useMediaQuery } from './useMediaQuery'

/**
 * Helper: buat komponen wrapper agar composable berjalan dalam lifecycle Vue.
 */
function createWrapper(query) {
  return mount(
    defineComponent({
      setup() {
        const matches = useMediaQuery(query)
        return { matches }
      },
      template: '<span>{{ matches }}</span>'
    })
  )
}

describe('useMediaQuery', () => {
  let listeners
  let mockMatches

  beforeEach(() => {
    listeners = []
    mockMatches = false

    // Mock window.matchMedia
    window.matchMedia = vi.fn((query) => ({
      matches: mockMatches,
      media: query,
      addEventListener: vi.fn((event, handler) => {
        listeners.push({ event, handler })
      }),
      removeEventListener: vi.fn((event, handler) => {
        listeners = listeners.filter((l) => l.handler !== handler)
      })
    }))
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns a ref with initial value false before mount resolves', () => {
    // Sebelum matchMedia dipanggil, default-nya false
    const wrapper = createWrapper('(min-width: 768px)')
    // Setelah mount, matchMedia dipanggil dan matches diset sesuai mockMatches (false)
    expect(wrapper.vm.matches).toBe(false)
  })

  it('sets initial value from matchMedia.matches on mount', () => {
    mockMatches = true
    const wrapper = createWrapper('(min-width: 768px)')
    expect(wrapper.vm.matches).toBe(true)
  })

  it('calls window.matchMedia with the provided query string', () => {
    createWrapper('(max-width: 1024px)')
    expect(window.matchMedia).toHaveBeenCalledWith('(max-width: 1024px)')
  })

  it('registers a change event listener on the MediaQueryList', () => {
    createWrapper('(min-width: 768px)')
    expect(listeners).toHaveLength(1)
    expect(listeners[0].event).toBe('change')
  })

  it('updates matches when the change event fires', async () => {
    mockMatches = false
    const wrapper = createWrapper('(min-width: 768px)')
    expect(wrapper.vm.matches).toBe(false)

    // Simulasi perubahan media query
    listeners[0].handler({ matches: true })
    await nextTick()
    expect(wrapper.vm.matches).toBe(true)

    // Simulasi kembali ke false
    listeners[0].handler({ matches: false })
    await nextTick()
    expect(wrapper.vm.matches).toBe(false)
  })

  it('removes the event listener when the component is unmounted', () => {
    const wrapper = createWrapper('(min-width: 768px)')
    expect(listeners).toHaveLength(1)

    wrapper.unmount()
    expect(listeners).toHaveLength(0)
  })

  it('handles missing window.matchMedia gracefully (SSR)', () => {
    // Hapus matchMedia untuk simulasi SSR/environment tanpa matchMedia
    const original = window.matchMedia
    delete window.matchMedia

    const wrapper = createWrapper('(min-width: 768px)')
    expect(wrapper.vm.matches).toBe(false)

    // Restore
    window.matchMedia = original
  })
})
