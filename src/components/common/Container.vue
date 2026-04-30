<script setup>
defineProps({
  as: {
    type: String,
    default: 'div'
  },
  padding: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <component
    :is="as"
    class="max-w-7xl mx-auto"
    :class="{ 'px-4 sm:px-6 lg:px-8': padding }"
  >
    <slot />
  </component>
</template>
