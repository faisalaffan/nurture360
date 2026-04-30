<script setup>
import { ref } from 'vue'
import Container from './common/Container.vue'
import BaseButton from './common/BaseButton.vue'
import { navLinks, ctaButtons } from '../data/navigation.js'

const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
    aria-label="Main navigation"
  >
    <Container class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-2 text-xl font-bold text-primary-600">
        <svg
          class="w-8 h-8"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="32" height="32" rx="8" fill="currentColor" />
          <path
            d="M8 12C8 10.8954 8.89543 10 10 10H22C23.1046 10 24 10.8954 24 12V18C24 19.1046 23.1046 20 22 20H18L14 24V20H10C8.89543 20 8 19.1046 8 18V12Z"
            fill="white"
          />
        </svg>
        Nurture360
      </a>

      <!-- Desktop Nav Links (hidden on mobile) -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="link.href"
            class="text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm font-medium"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Desktop CTA Buttons (hidden on mobile) -->
      <div class="hidden md:flex items-center gap-3">
        <BaseButton
          v-for="btn in ctaButtons"
          :key="btn.id"
          :variant="btn.variant"
          :href="btn.href"
          size="sm"
        >
          {{ btn.label }}
        </BaseButton>
      </div>

      <!-- Hamburger Button (visible on mobile only) -->
      <button
        class="md:hidden flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-100 transition-colors duration-200"
        :aria-expanded="isMobileMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="toggleMobileMenu"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            v-if="!isMobileMenuOpen"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </Container>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2 max-h-0"
      enter-to-class="opacity-100 translate-y-0 max-h-96"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 max-h-96"
      leave-to-class="opacity-0 -translate-y-2 max-h-0"
    >
      <div
        v-show="isMobileMenuOpen"
        id="mobile-menu"
        class="md:hidden border-t border-gray-100 bg-white overflow-hidden"
      >
        <Container class="py-4">
          <ul class="flex flex-col gap-1">
            <li v-for="link in navLinks" :key="link.id">
              <a
                :href="link.href"
                class="flex items-center px-3 py-3 min-h-[44px] rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
          <div class="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
            <BaseButton
              v-for="btn in ctaButtons"
              :key="btn.id"
              :variant="btn.variant"
              :href="btn.href"
              size="sm"
            >
              {{ btn.label }}
            </BaseButton>
          </div>
        </Container>
      </div>
    </Transition>
  </nav>
</template>
