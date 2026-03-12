<template>
  <nav :class="[
    'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 sm:px-10 lg:px-16 py-5',
    scrolled ? 'bg-gray-950/70 backdrop-blur-md shadow-md' : 'bg-transparent'
  ]">
    <button @click="handleBack"
      class="flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 group">
      <span class="h-px bg-indigo-500 transition-all duration-300 ease-out w-8 group-hover:w-12" />
      <span class="text-sm tracking-widest uppercase">Volver</span>
    </button>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useNavigation } from '../composables/useNavigation'

const { navigateTo } = useNavigation()
const scrolled = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function handleBack() {
  navigateTo('home')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  // Maneja el boton atras del navegador / dispositivo movil
  history.pushState(null, '', location.href)
  window.addEventListener('popstate', handleBack)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('popstate', handleBack)
})
</script>