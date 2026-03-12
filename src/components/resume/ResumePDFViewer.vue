<template>
  <div class="flex flex-col gap-3 h-full">

    <!-- CONTROLS -->
    <div class="flex items-center justify-between px-4 py-2 bg-white/5 rounded-2xl border border-white/10">
      <span class="text-sm text-gray-400 tracking-wide uppercase">Curriculum Vitae</span>
      <div class="flex gap-2">

        <!-- Abrir en nueva pestaña -->
        <a :href="cvPath" target="_blank"
          class="p-2 rounded-xl hover:bg-white/10 transition-all duration-200 text-gray-400 hover:text-white"
          title="Abrir en nueva pestaña">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <!-- Descargar -->
        <a :href="cvPath" download
          class="p-2 rounded-xl hover:bg-white/10 transition-all duration-200 text-gray-400 hover:text-white"
          title="Descargar CV">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </a>

        <!-- Expandir / contraer -->
        <button @click="expanded = !expanded"
          class="p-2 rounded-xl hover:bg-white/10 transition-all duration-200 text-gray-400 hover:text-white"
          :title="expanded ? 'Contraer' : 'Expandir'">
          <svg v-if="!expanded" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9 9V4m0 0H4m5 0L3 10m12-6v5m0 0h5m-5 0l6-6M9 15v5m0 0H4m5 0l-6 6m12-6h5m-5 0v5m0-5l6 6" />
          </svg>
        </button>

      </div>
    </div>

    <!-- PDF IFRAME (normal) -->
    <div v-if="!expanded"
      class="relative flex-1 min-h-[500px] lg:min-h-0 bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
      <iframe
        :src="`${cvPath}#toolbar=0&navpanes=0&scrollbar=1&zoom=110`"
        class="w-full h-full min-h-[500px] lg:h-full rounded-xl"
        type="application/pdf"
      />
    </div>

    <!-- PDF IFRAME (expandido - fullscreen) -->
    <Transition name="fade">
      <div v-if="expanded"
        class="fixed inset-0 z-50 flex flex-col gap-3 bg-gray-950/95 backdrop-blur-xl p-4">

        <!-- cerrar -->
        <div class="flex justify-end">
          <button @click="expanded = false"
            class="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <iframe
          :src="`${cvPath}#toolbar=0&navpanes=0&scrollbar=1&zoom=160`"
          class="w-full flex-1 rounded-2xl"
          type="application/pdf"
        />
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ cvPath: String })

const expanded = ref(false)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to       { opacity: 0; }
</style>