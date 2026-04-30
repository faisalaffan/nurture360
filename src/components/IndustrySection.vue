<script setup>
import { ref, computed } from 'vue'
import Container from './common/Container.vue'
import SectionHeading from './common/SectionHeading.vue'
import { industries } from '../data/industries.js'

const activeTab = ref('ecommerce')

const activeIndustry = computed(() =>
  industries.find((i) => i.id === activeTab.value)
)
</script>

<template>
  <section class="bg-gray-50 py-16 sm:py-20">
    <Container>
      <SectionHeading
        title="A solution made for every Industry"
        subtitle="Tailored messaging experiences designed to meet the unique needs of your business sector."
      />

      <!-- Tab Navigation -->
      <div class="flex justify-center">
        <div
          class="flex gap-2 overflow-x-auto pb-2 sm:pb-0 sm:justify-center w-full sm:w-auto"
          role="tablist"
          aria-label="Industry tabs"
        >
          <button
            v-for="industry in industries"
            :key="industry.id"
            role="tab"
            :aria-selected="activeTab === industry.id"
            :aria-controls="`panel-${industry.id}`"
            :id="`tab-${industry.id}`"
            class="flex-shrink-0 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap"
            :class="
              activeTab === industry.id
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            "
            @click="activeTab = industry.id"
          >
            {{ industry.label }}
          </button>
        </div>
      </div>

      <!-- Tab Content -->
      <div
        v-if="activeIndustry"
        :id="`panel-${activeIndustry.id}`"
        role="tabpanel"
        :aria-labelledby="`tab-${activeIndustry.id}`"
        class="mt-10"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <!-- Illustration -->
          <div class="flex justify-center">
            <!-- E-Commerce: Shopping cart illustration -->
            <svg
              v-if="activeIndustry.id === 'ecommerce'"
              class="w-full max-w-sm lg:max-w-md"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              :aria-label="`${activeIndustry.label} illustration`"
            >
              <rect width="400" height="300" rx="16" fill="#f5f3ff" />
              <!-- Shopping cart -->
              <path d="M120 100h20l30 80h100l20-50H170" stroke="#7c3aed" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              <circle cx="180" cy="200" r="10" fill="#7c3aed" />
              <circle cx="260" cy="200" r="10" fill="#7c3aed" />
              <!-- Product boxes -->
              <rect x="190" y="120" width="40" height="40" rx="6" fill="#ede9fe" stroke="#c4b5fd" stroke-width="2" />
              <rect x="240" y="130" width="35" height="30" rx="6" fill="#ddd6fe" stroke="#c4b5fd" stroke-width="2" />
              <!-- Chat bubble -->
              <rect x="260" y="60" width="100" height="50" rx="12" fill="#7c3aed" />
              <path d="M280 110l-10 15 20 0z" fill="#7c3aed" />
              <rect x="275" y="75" width="50" height="5" rx="2" fill="white" opacity="0.8" />
              <rect x="275" y="85" width="70" height="5" rx="2" fill="white" opacity="0.5" />
              <!-- Stars -->
              <text x="195" y="148" fill="#7c3aed" font-size="16">★</text>
              <text x="210" y="148" fill="#7c3aed" font-size="16">★</text>
              <!-- Decorative dots -->
              <circle cx="100" cy="60" r="5" fill="#c4b5fd" opacity="0.5" />
              <circle cx="340" cy="240" r="6" fill="#ddd6fe" opacity="0.6" />
              <circle cx="80" cy="220" r="4" fill="#ede9fe" />
            </svg>

            <!-- Hospitality: Suitcase / hotel illustration -->
            <svg
              v-if="activeIndustry.id === 'hospitality'"
              class="w-full max-w-sm lg:max-w-md"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              :aria-label="`${activeIndustry.label} illustration`"
            >
              <rect width="400" height="300" rx="16" fill="#f5f3ff" />
              <!-- Suitcase body -->
              <rect x="130" y="110" width="140" height="100" rx="12" fill="#7c3aed" />
              <!-- Suitcase handle -->
              <rect x="175" y="85" width="50" height="30" rx="8" fill="none" stroke="#7c3aed" stroke-width="4" />
              <!-- Suitcase straps -->
              <rect x="130" y="145" width="140" height="8" fill="#6d28d9" />
              <!-- Suitcase buckle -->
              <rect x="188" y="140" width="24" height="18" rx="4" fill="#ede9fe" />
              <rect x="194" y="146" width="12" height="6" rx="2" fill="#7c3aed" />
              <!-- Wheels -->
              <circle cx="160" cy="218" r="8" fill="#4c1d95" />
              <circle cx="240" cy="218" r="8" fill="#4c1d95" />
              <!-- Chat bubble -->
              <rect x="270" y="70" width="100" height="50" rx="12" fill="#8b5cf6" />
              <path d="M290 120l-10 12 18 0z" fill="#8b5cf6" />
              <rect x="285" y="83" width="55" height="5" rx="2" fill="white" opacity="0.8" />
              <rect x="285" y="93" width="70" height="5" rx="2" fill="white" opacity="0.5" />
              <!-- Location pin -->
              <circle cx="80" cy="130" r="20" fill="#ede9fe" />
              <path d="M80 115a10 10 0 0 0-10 10c0 8 10 18 10 18s10-10 10-18a10 10 0 0 0-10-10z" fill="#7c3aed" />
              <circle cx="80" cy="124" r="4" fill="white" />
              <!-- Decorative dots -->
              <circle cx="340" cy="240" r="5" fill="#c4b5fd" opacity="0.5" />
              <circle cx="60" cy="220" r="4" fill="#ddd6fe" />
            </svg>

            <!-- Education: Book / graduation illustration -->
            <svg
              v-if="activeIndustry.id === 'education'"
              class="w-full max-w-sm lg:max-w-md"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              :aria-label="`${activeIndustry.label} illustration`"
            >
              <rect width="400" height="300" rx="16" fill="#f5f3ff" />
              <!-- Open book -->
              <path d="M200 100v120" stroke="#7c3aed" stroke-width="3" />
              <path d="M200 100c-20-10-60-15-80 0v120c20-12 60-8 80 0z" fill="#ede9fe" stroke="#7c3aed" stroke-width="2" />
              <path d="M200 100c20-10 60-15 80 0v120c-20-12-60-8-80 0z" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2" />
              <!-- Book lines (left page) -->
              <line x1="140" y1="130" x2="190" y2="125" stroke="#c4b5fd" stroke-width="2" />
              <line x1="140" y1="150" x2="190" y2="145" stroke="#c4b5fd" stroke-width="2" />
              <line x1="140" y1="170" x2="190" y2="165" stroke="#c4b5fd" stroke-width="2" />
              <!-- Book lines (right page) -->
              <line x1="210" y1="125" x2="260" y2="130" stroke="#c4b5fd" stroke-width="2" />
              <line x1="210" y1="145" x2="260" y2="150" stroke="#c4b5fd" stroke-width="2" />
              <line x1="210" y1="165" x2="260" y2="170" stroke="#c4b5fd" stroke-width="2" />
              <!-- Graduation cap -->
              <polygon points="310,80 350,100 310,120 270,100" fill="#7c3aed" />
              <line x1="310" y1="120" x2="310" y2="145" stroke="#7c3aed" stroke-width="2" />
              <path d="M290 108v25c0 0 10 10 20 10s20-10 20-10v-25" fill="none" stroke="#7c3aed" stroke-width="2" />
              <circle cx="350" cy="100" r="3" fill="#4c1d95" />
              <line x1="350" y1="100" x2="350" y2="135" stroke="#4c1d95" stroke-width="2" />
              <rect x="345" y="132" width="10" height="6" rx="2" fill="#4c1d95" />
              <!-- Chat bubble -->
              <rect x="60" y="70" width="90" height="45" rx="12" fill="#8b5cf6" />
              <path d="M120 115l10 12-18 0z" fill="#8b5cf6" />
              <rect x="75" y="82" width="50" height="5" rx="2" fill="white" opacity="0.8" />
              <rect x="75" y="92" width="60" height="5" rx="2" fill="white" opacity="0.5" />
              <!-- Decorative dots -->
              <circle cx="80" cy="240" r="5" fill="#c4b5fd" opacity="0.5" />
              <circle cx="340" cy="230" r="6" fill="#ddd6fe" opacity="0.6" />
              <circle cx="200" cy="260" r="4" fill="#ede9fe" />
            </svg>
          </div>

          <!-- Description -->
          <div class="text-center lg:text-left">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              {{ activeIndustry.label }}
            </h3>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ activeIndustry.description }}
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
