<template>
  <div class="w-full min-h-screen relative bg-gray-950 overflow-x-hidden overflow-y-auto">
    <AnimatedBackground />

    <div class="relative z-10 w-full h-full">
      <Transition :name="transitionName" mode="out-in">
        <component :is="currentComponent" :key="currentView" />
      </Transition>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import AnimatedBackground from './components/AnimatedBackground.vue'
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ResumeView from './views/ResumeView.vue'
import SocialMediaView from './views/SocialMediaView.vue'
import { useNavigation } from './composables/useNavigation'

const { currentView, direction } = useNavigation()

// Mapa de nombre → componente
const views = {
  home:    HomeView,
  projects: ProjectsView,
  resume: ResumeView,
  social: SocialMediaView,

  // Cuando agregues más vistas, solo las registras aquí
  // projects: ProjectsView,
  // contact:  ContactView,
}

const currentComponent = computed(() => views[currentView.value])
const transitionName   = computed(() =>
  direction.value === 'forward' ? 'slide-left' : 'slide-right'
)
</script>

<style>

/* Transición hacia adelante (nuevo contenido entra por la derecha) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-left-enter-from { opacity: 0; transform: translateX(50px); }
.slide-left-leave-to   { opacity: 0; transform: translateX(-50px); }

/* Transición hacia atrás (nuevo contenido entra por la izquierda) */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.45s ease, transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-right-enter-from { opacity: 0; transform: translateX(-50px); }
.slide-right-leave-to   { opacity: 0; transform: translateX(50px); }

* {
  font-family: 'goldman', sans-serif;
}

</style>