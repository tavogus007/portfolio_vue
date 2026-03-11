<template>
  <Transition name="fade">
    <div v-if="img"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      @click="$emit('close')">
      <Transition name="zoom">
        <img v-if="img" :src="img"
          class="max-w-[90vw] max-h-[85vh] rounded-3xl border border-purple-400/40 shadow-[0_0_60px_rgba(99,102,241,0.3)]"
          @click.stop />
      </Transition>
    </div>
  </Transition>
</template>

<script setup>
defineProps({ img: String })
defineEmits(['close'])
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }

.zoom-enter-active, .zoom-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
}
.zoom-enter-from, .zoom-leave-to {
  transform: scale(0.85);
  opacity: 0;
}
</style>