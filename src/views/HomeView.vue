<template>
    <div class="flex flex-col lg:flex-row w-full min-h-screen items-center px-4 sm:px-6 lg:px-16 py-8 lg:py-0 gap-8 justify-center home">
  
      <!-- IZQUIERDA: Presentación + navegación -->
      <div class="flex flex-col justify-center gap-8 w-full lg:w-1/2">
  
        <!-- Encabezado -->
        <div class="flex flex-col gap-12">
          <div class="title text-center">
            <p class="text-blue-400 text-2xl sm:text-3xl lg:text-4xl tracking-[0.3em] uppercase mb-10">SYSTEM ENGINEER</p>
            <p class="text-blue-400 text-md tracking-[0.3em] uppercase mb-2">fullstack developer</p>
            <p class="text-indigo-400 text-sm tracking-[0.3em] uppercase mt-5">Digital portfolio v1</p>   
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
            @click="navigateTo(item.view)"
            class="group flex items-center gap-4 text-left w-fit"
          >
            <!-- Línea indicadora -->
            <span class="h-px bg-indigo-500 transition-all duration-300 ease-out w-8 group-hover:w-16" />
            <span class="text-gray-400 text-4xl font-medium tracking-wide transition-colors duration-300 group-hover:text-white">
              {{ item.label }}
            </span>
          </button>
        </nav>
  
      </div>
  
      <!-- DERECHA: Elemento visual (placeholder por ahora) -->
      <div class="flex items-center justify-center w-full lg:w-1/2 h-64 lg:h-full">
        <ThreeScene />
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { useNavigation } from '../composables/useNavigation'
  import ThreeScene from '../components/ThreeScene.vue'
  
  const { navigateTo } = useNavigation()
  
  const navItems = [
    { label: 'My projects',   view: 'projects'    },  
    { label: 'Resume',  view: 'resume' },
    { label: 'Social media',   view: 'social'  },
  ]
  </script>

<style scoped>

  .home{
    padding: 80px;
  }

  .title{
    border: solid rgb(219, 219, 219);
    border-radius: 10px;
    padding-top: 10px;
    padding: 40px;
    display: inline-block;
    width: auto;
  }
</style>