<script setup>
import Container from './common/Container.vue'
import SectionHeading from './common/SectionHeading.vue'
import { challenges } from '../data/challenges.js'
</script>

<template>
  <section class="bg-white py-16 sm:py-20">
    <Container>
      <SectionHeading
        title="Common challenges across industries"
        subtitle="Businesses everywhere face the same messaging hurdles — scattered tools, broken workflows, and limited visibility into customer conversations."
      />

      <div class="space-y-16 sm:space-y-20">
        <div
          v-for="(challenge, index) in challenges"
          :key="challenge.id"
          data-testid="challenge-card"
          class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <!-- Image -->
          <div
            :class="{ 'md:order-last': index % 2 !== 0 }"
            class="flex justify-center"
          >
            <!-- Looking for a new tool: magnifying glass / search icon -->
            <svg
              v-if="challenge.id === 'new-tool'"
              class="w-full max-w-xs sm:max-w-sm"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              :aria-label="challenge.title"
            >
              <rect width="400" height="300" rx="16" fill="#f5f3ff" />
              <!-- Magnifying glass -->
              <circle cx="180" cy="140" r="55" stroke="#7c3aed" stroke-width="5" fill="#ede9fe" />
              <line x1="220" y1="180" x2="270" y2="230" stroke="#7c3aed" stroke-width="6" stroke-linecap="round" />
              <!-- Search lines inside glass -->
              <rect x="155" y="120" width="50" height="5" rx="2" fill="#c4b5fd" />
              <rect x="155" y="135" width="40" height="5" rx="2" fill="#c4b5fd" />
              <rect x="155" y="150" width="30" height="5" rx="2" fill="#c4b5fd" />
              <!-- Floating tool icons -->
              <rect x="280" y="60" width="50" height="50" rx="10" fill="#ddd6fe" />
              <rect x="295" y="75" width="20" height="5" rx="2" fill="#7c3aed" />
              <rect x="295" y="85" width="14" height="5" rx="2" fill="#a78bfa" />
              <rect x="60" y="80" width="45" height="45" rx="10" fill="#ddd6fe" />
              <circle cx="82" cy="102" r="10" fill="#a78bfa" />
              <rect x="300" y="180" width="40" height="40" rx="8" fill="#ede9fe" />
              <path d="M312 195l8 8m0-8l-8 8" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" />
              <!-- Question marks -->
              <text x="90" cy="60" y="60" fill="#c4b5fd" font-size="24" font-weight="bold">?</text>
              <text x="320" y="150" fill="#c4b5fd" font-size="20" font-weight="bold">?</text>
              <!-- Decorative dots -->
              <circle cx="50" cy="240" r="5" fill="#c4b5fd" opacity="0.5" />
              <circle cx="350" cy="250" r="6" fill="#ddd6fe" opacity="0.6" />
            </svg>

            <!-- Disorganized workflow: scattered papers -->
            <svg
              v-if="challenge.id === 'disorganized'"
              class="w-full max-w-xs sm:max-w-sm"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              :aria-label="challenge.title"
            >
              <rect width="400" height="300" rx="16" fill="#f5f3ff" />
              <!-- Scattered paper 1 (tilted left) -->
              <g transform="rotate(-12 120 130)">
                <rect x="80" y="80" width="80" height="100" rx="6" fill="white" stroke="#c4b5fd" stroke-width="2" />
                <rect x="92" y="95" width="45" height="4" rx="2" fill="#ddd6fe" />
                <rect x="92" y="107" width="55" height="4" rx="2" fill="#ddd6fe" />
                <rect x="92" y="119" width="35" height="4" rx="2" fill="#ddd6fe" />
                <rect x="92" y="131" width="50" height="4" rx="2" fill="#ede9fe" />
              </g>
              <!-- Scattered paper 2 (tilted right) -->
              <g transform="rotate(8 260 120)">
                <rect x="220" y="70" width="80" height="100" rx="6" fill="white" stroke="#c4b5fd" stroke-width="2" />
                <rect x="232" y="85" width="50" height="4" rx="2" fill="#ddd6fe" />
                <rect x="232" y="97" width="40" height="4" rx="2" fill="#ddd6fe" />
                <rect x="232" y="109" width="55" height="4" rx="2" fill="#ddd6fe" />
                <rect x="232" y="121" width="30" height="4" rx="2" fill="#ede9fe" />
              </g>
              <!-- Center paper (main, straight) -->
              <rect x="150" y="100" width="100" height="120" rx="8" fill="white" stroke="#7c3aed" stroke-width="2" />
              <rect x="165" y="118" width="60" height="5" rx="2" fill="#c4b5fd" />
              <rect x="165" y="132" width="70" height="5" rx="2" fill="#c4b5fd" />
              <rect x="165" y="146" width="45" height="5" rx="2" fill="#c4b5fd" />
              <rect x="165" y="160" width="55" height="5" rx="2" fill="#ede9fe" />
              <rect x="165" y="174" width="40" height="5" rx="2" fill="#ede9fe" />
              <!-- Arrows showing chaos -->
              <path d="M140 160c-20 10-40 30-50 10" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" fill="none" />
              <path d="M260 160c20 15 35 25 45 5" stroke="#a78bfa" stroke-width="2" stroke-linecap="round" fill="none" />
              <!-- Warning icon -->
              <circle cx="200" cy="260" r="16" fill="#7c3aed" />
              <text x="195" y="267" fill="white" font-size="20" font-weight="bold">!</text>
              <!-- Decorative dots -->
              <circle cx="60" cy="50" r="5" fill="#c4b5fd" opacity="0.5" />
              <circle cx="340" cy="260" r="4" fill="#ddd6fe" opacity="0.6" />
            </svg>

            <!-- Limited Conversation: broken chain -->
            <svg
              v-if="challenge.id === 'limited-conversation'"
              class="w-full max-w-xs sm:max-w-sm"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              :aria-label="challenge.title"
            >
              <rect width="400" height="300" rx="16" fill="#f5f3ff" />
              <!-- Left chain link -->
              <rect x="70" y="110" width="80" height="50" rx="25" fill="none" stroke="#7c3aed" stroke-width="5" />
              <!-- Right chain link (separated - broken) -->
              <rect x="180" y="110" width="80" height="50" rx="25" fill="none" stroke="#c4b5fd" stroke-width="5" stroke-dasharray="8 4" />
              <!-- Break indicator -->
              <path d="M150 125l10 20m5-22l10 20" stroke="#a78bfa" stroke-width="3" stroke-linecap="round" />
              <!-- Chat bubble left (connected) -->
              <rect x="60" y="50" width="70" height="40" rx="10" fill="#7c3aed" />
              <path d="M90 90l-8 10 14 0z" fill="#7c3aed" />
              <rect x="72" y="62" width="40" height="4" rx="2" fill="white" opacity="0.8" />
              <rect x="72" y="72" width="30" height="4" rx="2" fill="white" opacity="0.5" />
              <!-- Chat bubble right (disconnected, faded) -->
              <rect x="200" y="50" width="70" height="40" rx="10" fill="#ddd6fe" />
              <path d="M230 90l-8 10 14 0z" fill="#ddd6fe" />
              <rect x="212" y="62" width="40" height="4" rx="2" fill="#a78bfa" opacity="0.5" />
              <rect x="212" y="72" width="30" height="4" rx="2" fill="#a78bfa" opacity="0.3" />
              <!-- Siloed platforms -->
              <rect x="280" y="90" width="60" height="60" rx="12" fill="#ede9fe" stroke="#c4b5fd" stroke-width="2" />
              <circle cx="310" cy="115" r="12" fill="#c4b5fd" />
              <rect x="300" y="108" width="20" height="4" rx="2" fill="white" />
              <rect x="306" y="115" width="8" height="10" rx="2" fill="white" />
              <!-- Repeat icon (customer repeating) -->
              <path d="M160 200a30 30 0 0 1 60 0" stroke="#7c3aed" stroke-width="3" fill="none" />
              <path d="M220 200l-6-8 8-2" fill="#7c3aed" />
              <path d="M220 200a30 30 0 0 1-60 0" stroke="#7c3aed" stroke-width="3" fill="none" />
              <path d="M160 200l6 8-8 2" fill="#7c3aed" />
              <!-- Decorative dots -->
              <circle cx="50" cy="240" r="5" fill="#c4b5fd" opacity="0.5" />
              <circle cx="350" cy="250" r="6" fill="#ddd6fe" opacity="0.6" />
              <circle cx="190" cy="260" r="4" fill="#ede9fe" />
            </svg>
          </div>

          <!-- Text -->
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              {{ challenge.title }}
            </h3>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ challenge.description }}
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
