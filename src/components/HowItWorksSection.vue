<script setup>
import Container from './common/Container.vue'
import SectionHeading from './common/SectionHeading.vue'
import { steps } from '../data/steps.js'
</script>

<template>
  <section class="bg-gray-50 py-16 sm:py-20">
    <Container>
      <SectionHeading
        title="How it works"
        subtitle="Get started in three simple steps and transform the way your team communicates with customers."
      />

      <!-- Steps Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <!-- Connecting lines between steps (desktop only) -->
        <div
          class="hidden md:block absolute top-[72px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-0.5 border-t-2 border-dashed border-primary-300"
          aria-hidden="true"
        />

        <!-- Step Cards -->
        <div
          v-for="step in steps"
          :key="step.number"
          class="text-center relative"
          data-testid="step-card"
        >
          <!-- Step Icon -->
          <div class="flex justify-center mb-4">
            <!-- Link/chain icon for Connect -->
            <svg
              v-if="step.number === 1"
              class="w-8 h-8 text-primary-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>

            <!-- Users icon for Team -->
            <svg
              v-else-if="step.number === 2"
              class="w-8 h-8 text-primary-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>

            <!-- Chat icon for Conversations -->
            <svg
              v-else-if="step.number === 3"
              class="w-8 h-8 text-primary-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          <!-- Step Number Circle -->
          <div
            class="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mx-auto mb-4"
          >
            {{ step.number }}
          </div>

          <!-- Step Title -->
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            {{ step.title }}
          </h3>

          <!-- Step Description -->
          <p class="text-gray-600">
            {{ step.description }}
          </p>
        </div>
      </div>
    </Container>
  </section>
</template>
