<script setup>
import Container from './common/Container.vue'
import SectionHeading from './common/SectionHeading.vue'
import { channels, features } from '../data/channels.js'

const channelColors = {
  whatsapp: '#25D366',
  instagram: '#E1306C',
  tiktok: '#000000',
  telegram: '#0088cc',
  facebook: '#1877F2',
  line: '#00B900'
}
</script>

<template>
  <section class="bg-white py-16 sm:py-20">
    <Container>
      <SectionHeading title="One platform, Infinite ways to talk" />

      <!-- Channel Icons Grid -->
      <div class="grid grid-cols-3 sm:grid-cols-6 gap-6 max-w-2xl mx-auto">
        <div
          v-for="channel in channels"
          :key="channel.id"
          class="flex flex-col items-center gap-2"
          data-testid="channel-icon"
        >
          <div
            class="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-xl font-bold text-white transition-transform duration-200 hover:scale-110"
            :style="{ backgroundColor: channelColors[channel.id] || '#6b7280' }"
          >
            {{ channel.name.charAt(0) }}
          </div>
          <span class="text-sm text-gray-600 text-center">{{ channel.name }}</span>
        </div>
      </div>

      <!-- Feature Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="bg-dark rounded-xl p-6 shadow-md transition-colors duration-200 hover:bg-dark-light"
          data-testid="feature-card"
        >
          <!-- Feature Icon -->
          <div class="mb-4">
            <!-- Inbox icon -->
            <svg
              v-if="feature.icon === 'inbox'"
              class="w-8 h-8 text-primary-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
              <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
            </svg>

            <!-- Routing arrows icon -->
            <svg
              v-else-if="feature.icon === 'routing'"
              class="w-8 h-8 text-primary-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="18" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <path d="M6 21V9a9 9 0 0 0 9 9" />
              <path d="M18 3v12a9 9 0 0 1-9-9" />
            </svg>

            <!-- Analytics / chart icon -->
            <svg
              v-else-if="feature.icon === 'analytics'"
              class="w-8 h-8 text-primary-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>

            <!-- Automation / gear icon -->
            <svg
              v-else-if="feature.icon === 'automation'"
              class="w-8 h-8 text-primary-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>

          <h3 class="text-lg font-semibold text-white mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-gray-300 text-sm">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>
