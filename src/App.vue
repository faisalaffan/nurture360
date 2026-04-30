<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import IndustrySection from './components/IndustrySection.vue'
import ChallengesSection from './components/ChallengesSection.vue'
import ChannelsSection from './components/ChannelsSection.vue'
import HowItWorksSection from './components/HowItWorksSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import CTABanner from './components/CTABanner.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="font-sans antialiased text-gray-900">
    <NavBar />
    <main>
      <HeroSection />
      <IndustrySection />
      <ChallengesSection />
      <ChannelsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTABanner />
    </main>
    <FooterSection />
  </div>
</template>
