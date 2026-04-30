<script setup>
import Container from './common/Container.vue'
import SectionHeading from './common/SectionHeading.vue'
import { testimonials, stats } from '../data/testimonials.js'
</script>

<template>
  <section class="bg-dark py-16 sm:py-20">
    <Container>
      <SectionHeading title="Trusted by teams that talk" :dark="true" />

      <!-- Testimonial Cards -->
      <div class="space-y-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-dark-light rounded-xl p-8 shadow-md"
          data-testid="testimonial-card"
        >
          <!-- Quote Icon -->
          <svg
            class="w-10 h-10 text-primary-400 mb-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.171 0-2.277-.566-2.917-1.179zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C20.591 11.69 22 13.166 22 15c0 1.933-1.567 3.5-3.5 3.5-1.171 0-2.277-.566-2.917-1.179z"
            />
          </svg>

          <!-- Quote Text -->
          <p class="text-gray-200 text-lg italic leading-relaxed">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author Info -->
          <div class="mt-6 flex items-center gap-4">
            <div
              class="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold"
            >
              {{ testimonial.author.charAt(0) }}
            </div>
            <div>
              <p class="text-white font-semibold">{{ testimonial.author }}</p>
              <p class="text-gray-400 text-sm">{{ testimonial.company }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
        <div
          v-for="stat in stats"
          :key="stat.id"
          class="text-center"
          data-testid="stat-card"
        >
          <p class="text-4xl font-bold text-primary-400 mb-2">{{ stat.value }}</p>
          <p class="text-gray-300 text-sm">{{ stat.label }}</p>
        </div>
      </div>
    </Container>
  </section>
</template>
