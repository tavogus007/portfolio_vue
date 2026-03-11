<template>
  <div class="relative w-full min-h-screen text-white pt-32 pb-24 flex justify-center home">

    <!-- BACK BUTTON -->
    <button @click="navigateTo('home')"
      class="fixed top-8 left-4 sm:left-8 lg:left-16 flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 z-50 group">
      <span class="h-px bg-indigo-500 transition-all duration-300 ease-out w-8 group-hover:w-12" />
      <span class="text-sm tracking-widest uppercase">Volver</span>
    </button>

    <div class="w-full max-w-6xl flex flex-col gap-3 px-6 sm:px-10 lg:px-16">

      <!-- ── Featured Projects ── -->
      <h2 class="text-3xl font-semibold tracking-wide text-indigo-400">Featured Projects</h2>
      <section class="flex flex-col gap-6">
        <FeaturedProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
      </section>

      <!-- ── Médico en tu Casa ── -->
      <h3 class="text-2xl font-bold py-3">Médico en tu Casa</h3>
      <section class="flex flex-col gap-6">
        <VideoProjectCard v-for="project in mecProjects" :key="project.id" :project="project" />
      </section>

      <!-- ── Personal Projects ── -->
      <h3 class="text-2xl font-bold py-2">Personal Projects</h3>
      <PersonalProjectsCarousel :projects="personalProjects" />

    </div>
  </div>
</template>

<script setup>
import { useNavigation } from '../composables/useNavigation'
import { featuredProjects, mecProjects, personalProjects } from '../data/projects.js'
import FeaturedProjectCard from '../components/projects/FeaturedProjectCard.vue'
import VideoProjectCard from '../components/projects/VideoProjectCard.vue'
import PersonalProjectsCarousel from '../components/projects/PersonalProjectsCarousel.vue'

const { navigateTo } = useNavigation()
</script>