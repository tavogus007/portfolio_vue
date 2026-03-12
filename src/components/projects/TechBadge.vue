<template>
  <span :class="[
    'w-fit px-3 py-1 rounded-full text-sm features',
    color === 'indigo'
      ? 'bg-indigo-500/20 text-indigo-400'
      : 'bg-blue-500/20 text-blue-400'
  ]">
    {{ label }}
  </span>
</template>

<script setup>
defineProps({
  label: String,
  color: { type: String, default: 'indigo' },
})
</script>