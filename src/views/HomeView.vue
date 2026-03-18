<template>
  <div class="flex flex-col lg:flex-row w-full min-h-screen items-center px-4 sm:px-6 lg:px-16 py-8 lg:py-0 gap-8 justify-center home">

    <!-- IZQUIERDA: Presentación + navegación -->
    <div class="flex flex-col justify-center gap-8 w-full lg:w-1/2">

      <!-- Encabezado -->
      <div class="flex flex-col gap-12">
        <div class="title text-center">
          <p class="text-blue-400 text-2xl sm:text-3xl lg:text-4xl tracking-[0.3em] uppercase mb-10">SYSTEM ENGINEER</p>
          <p class="text-blue-400 text-md tracking-[0.3em] uppercase mb-2">fullstack developer</p>
          <p class="text-indigo-400 text-2sm tracking-[0.3em] uppercase mt-5">Digital portfolio v1.0</p>
        </div>
        <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          GUSTAVO
          <span class="text-indigo-400">GUTIÉRREZ</span>
        </h1>
      </div>

      <!-- Botones de navegación -->
      <nav class="flex flex-col gap-10">
        <button
          v-for="item in navItems"
          :key="item.view"
          @click="handleNav(item.view)"
          class="group flex items-center gap-4 text-left w-fit"
        >
          <span class="h-px bg-indigo-500 transition-all duration-300 ease-out w-8 group-hover:w-16"
            :class="activePanel === item.view ? 'w-16' : 'w-8'" />
          <span class="text-4xl font-medium tracking-wide transition-colors duration-300 group-hover:text-white"
            :class="activePanel === item.view ? 'text-white' : 'text-gray-400'">
            {{ item.label }}
          </span>
        </button>
      </nav>

    </div>

    <!-- DERECHA: ThreeScene o SocialMediaPanel -->
    <div class="flex items-center justify-center w-full lg:w-1/2 h-64 lg:h-full">
      <Transition name="panel" mode="out-in">

        <!-- Social Media Panel -->
        <SocialMediaView v-if="activePanel === 'social'" key="social" />

        <!-- ThreeScene por defecto -->
        <ThreeScene v-else key="three" />

      </Transition>
      <!-- FOOTER -->
    <footer class="absolute bottom-6 left-0 w-full flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-600 text-xs tracking-wide px-6">
      <span>© {{ new Date().getFullYear() }} Gustavo Gutiérrez. All rights reserved.</span>
      <span class="hidden sm:block">·</span>
      <a href="mailto:gustavog095065@gmail.com" class="hover:text-indigo-400 transition-colors duration-300">
        gustavog095065@gmail.com
      </a>
    </footer>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNavigation } from '../composables/useNavigation'
import ThreeScene from '../components/ThreeScene.vue'
import SocialMediaView from './SocialMediaView.vue'

const { navigateTo } = useNavigation()
const activePanel = ref(null)

const navItems = [
  { label: 'My projects', view: 'projects' },
  { label: 'Resume',      view: 'resume'   },
  { label: 'Social media', view: 'social'  },
]

function handleNav(view) {
  if (view === 'social') {
    // toggle: si ya esta activo, lo cierra; si no, lo abre
    activePanel.value = activePanel.value === 'social' ? null : 'social'
  } else {
    navigateTo(view)
  }
}
</script>

<style scoped>
.home {
  padding: 80px;
}

.title {
  border: solid rgb(219, 219, 219);
  border-radius: 10px;
  padding-top: 10px;
  padding: 40px;
  display: inline-block;
  width: auto;
}

/* Transición suave entre ThreeScene y SocialMediaPanel */
.panel-enter-active,
.panel-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.panel-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.panel-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>