<script setup>
import Container from './common/Container.vue'
</script>

<template>
  <section class="bg-gradient-to-r from-primary-600 to-primary-800 py-16 sm:py-20">
    <Container>
      <div class="text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white max-w-3xl mx-auto mb-8">
          Bring your team and customers into one place that actually makes sense
        </h2>
        <a
          href="#signup"
          class="inline-flex items-center justify-center bg-white text-primary-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg min-h-[44px]"
          data-testid="cta-banner-button"
        >
          Start Your Free Trial
        </a>
      </div>
    </Container>
  </section>
</template>
