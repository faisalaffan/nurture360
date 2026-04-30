<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'outline'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v)
  },
  href: {
    type: String,
    default: null
  }
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-primary-100 text-primary-700 hover:bg-primary-200',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'
  }
  return variants[props.variant]
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  return sizes[props.size]
})

const tag = computed(() => (props.href ? 'a' : 'button'))
</script>

<template>
  <component
    :is="tag"
    :href="href || undefined"
    class="inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-200 min-h-[44px] min-w-[44px]"
    :class="[variantClasses, sizeClasses]"
  >
    <slot />
  </component>
</template>
