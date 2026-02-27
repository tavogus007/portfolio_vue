<template>
    <div class="flex w-full h-full items-center px-16 gap-12">
  
      <!-- IZQUIERDA: Contenido -->
      <div class="flex flex-col justify-center gap-8 w-1/2">
  
        <!-- Botón volver -->
        <button
          @click="navigateTo('home')"
          class="group flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 w-fit"
        >
          <svg class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span class="text-sm tracking-widest uppercase">Volver</span>
        </button>
  
        <!-- Contenido de la vista -->
        <div class="flex flex-col gap-4">
          <span class="text-indigo-400 text-sm tracking-[0.3em] uppercase">01 — Sobre mí</span>
          <h2 class="text-white text-5xl font-bold">Hola, soy<br><span class="text-indigo-400">Tu Nombre</span></h2>
          <p class="text-gray-400 text-base leading-relaxed max-w-md">
            Aquí va una descripción sobre ti. Puedes hablar de tu experiencia,
            tus tecnologías favoritas, tu enfoque de trabajo, lo que sea que
            quieras que la gente sepa de ti como profesional.
          </p>
        </div>
  
        <!-- Stack de tecnologías (ejemplo) -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in techs"
            :key="tech"
            class="px-3 py-1 text-xs text-indigo-300 border border-indigo-500/40 rounded-full bg-indigo-500/10"
          >
            {{ tech }}
          </span>
        </div>
  
      </div>
  
      <!-- DERECHA: Espacio visual -->
      <div class="flex items-center justify-center w-1/2 h-full">
        <div class="text-gray-700 text-8xl font-black select-none opacity-20">
          &lt;/&gt;
        </div>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { useNavigation } from '../composables/useNavigation'
  
  const { navigateTo } = useNavigation()
  
  const techs = ['Vue 3', 'Tailwind', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker']
  </script>