<template>
    <div class="flex w-full h-full items-center px-16 gap-12">
  
      <!-- IZQUIERDA: Presentación + navegación -->
      <div class="flex flex-col justify-center gap-10 w-1/2">
  
        <!-- Encabezado -->
        <div class="flex flex-col gap-2">
          <span class="text-indigo-400 text-sm tracking-[0.3em] uppercase">Portafolio</span>
          <h1 class="text-white text-6xl font-bold leading-tight">
            Tu Nombre<br>
            <span class="text-indigo-400">Apellido</span>
          </h1>
          <p class="text-gray-400 text-lg mt-2">Desarrollador Full Stack · Diseñador UI</p>
        </div>
  
        <!-- Botones de navegación -->
        <nav class="flex flex-col gap-4">
          <button
            v-for="item in navItems"
            :key="item.view"
            @click="navigateTo(item.view)"
            class="group flex items-center gap-4 text-left w-fit"
          >
            <!-- Línea indicadora -->
            <span class="h-px bg-indigo-500 transition-all duration-300 ease-out w-8 group-hover:w-16" />
            <span class="text-gray-400 text-lg font-medium tracking-wide transition-colors duration-300 group-hover:text-white">
              {{ item.label }}
            </span>
          </button>
        </nav>
  
      </div>
  
      <!-- DERECHA: Elemento visual (placeholder por ahora) -->
      <div class="flex items-center justify-center w-1/2 h-full">
        <div class="relative w-80 h-80">
          <!-- Marco animado -->
          <div class="absolute inset-0 rounded-2xl border border-indigo-500/30 animate-pulse" />
          <div class="absolute inset-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm flex items-center justify-center">
            <span class="text-gray-500 text-sm tracking-widest">[ tu foto / video ]</span>
          </div>
          <!-- Decoración esquinas -->
          <span class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-indigo-400 rounded-tl-lg" />
          <span class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-indigo-400 rounded-tr-lg" />
          <span class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-indigo-400 rounded-bl-lg" />
          <span class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-indigo-400 rounded-br-lg" />
        </div>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { useNavigation } from '../composables/useNavigation'
  
  const { navigateTo } = useNavigation()
  
  const navItems = [
    { label: 'Sobre mí',   view: 'about'    },
    { label: 'Proyectos',  view: 'projects' },
    { label: 'Contacto',   view: 'contact'  },
  ]
  </script>