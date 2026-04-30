<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  align: {
    type: String,
    default: 'center',
    validator: (v) => ['left', 'center'].includes(v)
  },
  dark: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div
    class="mb-12"
    :class="align === 'center' ? 'text-center' : 'text-left'"
  >
    <h2
      class="text-3xl sm:text-4xl font-bold mb-4"
      :class="dark ? 'text-white' : 'text-gray-900'"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="text-lg max-w-3xl"
      :class="[
        dark ? 'text-gray-300' : 'text-gray-600',
        align === 'center' ? 'mx-auto' : ''
      ]"
    >
      {{ subtitle }}
    </p>
  </div>
</template>
