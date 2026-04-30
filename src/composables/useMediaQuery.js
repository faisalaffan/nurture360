import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable yang mengembalikan reactive boolean mengikuti media query.
 * Menggunakan window.matchMedia API dengan cleanup otomatis pada onUnmounted.
 *
 * @param {string} query - Media query string, contoh: '(min-width: 768px)'
 * @returns {import('vue').Ref<boolean>} Reactive ref yang bernilai true jika media query cocok
 */
export function useMediaQuery(query) {
  const matches = ref(false)
  let mediaQueryList = null

  function handleChange(event) {
    matches.value = event.matches
  }

  onMounted(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return
    }

    mediaQueryList = window.matchMedia(query)
    matches.value = mediaQueryList.matches

    mediaQueryList.addEventListener('change', handleChange)
  })

  onUnmounted(() => {
    if (mediaQueryList) {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  })

  return matches
}
