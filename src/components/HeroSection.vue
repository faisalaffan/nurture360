<script setup>
import Container from './common/Container.vue'
import BaseButton from './common/BaseButton.vue'
</script>

<template>
  <section class="relative pt-16 bg-white overflow-hidden">
    <!-- Decorative gradient blobs -->
    <div
      class="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-r from-primary-100 to-primary-50 rounded-full blur-3xl opacity-50"
      aria-hidden="true"
    />
    <div
      class="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-primary-50 to-primary-100 rounded-full blur-3xl opacity-40"
      aria-hidden="true"
    />

    <Container class="relative py-16 sm:py-20 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Text Content -->
        <div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Connect every message,
            <span class="text-primary-600">Delight</span> every customer
          </h1>
          <p class="text-lg sm:text-xl text-gray-600 mt-6 max-w-xl">
            Unify all your messaging channels into one powerful platform. Deliver seamless customer experiences across WhatsApp, Instagram, Telegram, and more.
          </p>
          <div class="flex flex-wrap gap-4 mt-8">
            <BaseButton variant="primary" size="lg" href="#signup">
              Get Started Free
            </BaseButton>
            <BaseButton variant="outline" size="lg" href="#demo">
              Book a Demo
            </BaseButton>
          </div>
        </div>

        <!-- Right: Hero Illustration -->
        <div class="flex justify-center lg:justify-end">
          <svg
            class="w-full max-w-md lg:max-w-lg"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Messaging dashboard illustration with chat bubbles and channel icons"
          >
            <!-- Background circle -->
            <circle cx="200" cy="200" r="180" fill="#f5f3ff" />
            <circle cx="200" cy="200" r="150" fill="#ede9fe" opacity="0.5" />

            <!-- Central dashboard mockup -->
            <rect x="120" y="110" width="160" height="180" rx="12" fill="white" stroke="#ddd6fe" stroke-width="2" />
            <!-- Dashboard header bar -->
            <rect x="120" y="110" width="160" height="32" rx="12" fill="#7c3aed" />
            <rect x="132" y="120" width="50" height="6" rx="3" fill="white" opacity="0.8" />
            <rect x="132" y="130" width="30" height="4" rx="2" fill="white" opacity="0.5" />
            <!-- Dots in header -->
            <circle cx="260" cy="126" r="4" fill="white" opacity="0.6" />
            <circle cx="248" cy="126" r="4" fill="white" opacity="0.6" />

            <!-- Chat bubbles inside dashboard -->
            <!-- Incoming message -->
            <rect x="134" y="154" width="80" height="24" rx="8" fill="#ede9fe" />
            <rect x="140" y="161" width="50" height="4" rx="2" fill="#7c3aed" opacity="0.5" />
            <rect x="140" y="168" width="35" height="4" rx="2" fill="#7c3aed" opacity="0.3" />

            <!-- Outgoing message -->
            <rect x="186" y="186" width="80" height="24" rx="8" fill="#7c3aed" />
            <rect x="192" y="193" width="50" height="4" rx="2" fill="white" opacity="0.8" />
            <rect x="192" y="200" width="35" height="4" rx="2" fill="white" opacity="0.5" />

            <!-- Incoming message 2 -->
            <rect x="134" y="218" width="70" height="20" rx="8" fill="#ede9fe" />
            <rect x="140" y="225" width="45" height="4" rx="2" fill="#7c3aed" opacity="0.5" />

            <!-- Outgoing message 2 -->
            <rect x="196" y="246" width="70" height="20" rx="8" fill="#7c3aed" />
            <rect x="202" y="253" width="45" height="4" rx="2" fill="white" opacity="0.8" />

            <!-- Input bar -->
            <rect x="132" y="274" width="136" height="8" rx="4" fill="#f5f3ff" />

            <!-- WhatsApp channel icon (top-left) -->
            <circle cx="80" cy="130" r="26" fill="#25D366" />
            <path d="M80 112a18 18 0 0 0-15.6 27l-2.4 8.8 9-2.3A18 18 0 1 0 80 112z" fill="white" opacity="0.9" />
            <text x="80" y="135" text-anchor="middle" fill="white" font-size="14" font-weight="bold">W</text>

            <!-- Instagram channel icon (top-right) -->
            <circle cx="320" cy="130" r="26" fill="#E1306C" />
            <rect x="306" y="118" width="28" height="28" rx="7" fill="none" stroke="white" stroke-width="2.5" opacity="0.9" />
            <circle cx="320" cy="132" r="7" fill="none" stroke="white" stroke-width="2.5" opacity="0.9" />
            <circle cx="331" cy="121" r="2.5" fill="white" opacity="0.9" />

            <!-- Telegram channel icon (bottom-left) -->
            <circle cx="70" cy="280" r="24" fill="#0088cc" />
            <text x="70" y="286" text-anchor="middle" fill="white" font-size="16" font-weight="bold">T</text>

            <!-- Facebook channel icon (bottom-right) -->
            <circle cx="330" cy="280" r="24" fill="#1877F2" />
            <text x="330" y="287" text-anchor="middle" fill="white" font-size="18" font-weight="bold">f</text>

            <!-- User avatar (top center) -->
            <circle cx="200" cy="60" r="22" fill="#c4b5fd" />
            <circle cx="200" cy="54" r="8" fill="white" />
            <path d="M186 72a14 14 0 0 1 28 0" fill="white" />

            <!-- User avatar (bottom center) -->
            <circle cx="200" cy="350" r="20" fill="#a78bfa" />
            <circle cx="200" cy="344" r="7" fill="white" />
            <path d="M188 360a12 12 0 0 1 24 0" fill="white" />

            <!-- Decorative connection lines -->
            <line x1="102" y1="140" x2="120" y2="160" stroke="#ddd6fe" stroke-width="1.5" stroke-dasharray="4 3" />
            <line x1="298" y1="140" x2="280" y2="160" stroke="#ddd6fe" stroke-width="1.5" stroke-dasharray="4 3" />
            <line x1="90" y1="268" x2="120" y2="250" stroke="#ddd6fe" stroke-width="1.5" stroke-dasharray="4 3" />
            <line x1="310" y1="268" x2="280" y2="250" stroke="#ddd6fe" stroke-width="1.5" stroke-dasharray="4 3" />
            <line x1="200" y1="82" x2="200" y2="110" stroke="#ddd6fe" stroke-width="1.5" stroke-dasharray="4 3" />
            <line x1="200" y1="330" x2="200" y2="290" stroke="#ddd6fe" stroke-width="1.5" stroke-dasharray="4 3" />

            <!-- Small decorative dots -->
            <circle cx="55" cy="200" r="4" fill="#c4b5fd" opacity="0.6" />
            <circle cx="345" cy="200" r="4" fill="#c4b5fd" opacity="0.6" />
            <circle cx="130" cy="60" r="3" fill="#ddd6fe" />
            <circle cx="270" cy="60" r="3" fill="#ddd6fe" />
            <circle cx="130" cy="340" r="3" fill="#ddd6fe" />
            <circle cx="270" cy="340" r="3" fill="#ddd6fe" />
          </svg>
        </div>
      </div>
    </Container>
  </section>
</template>
