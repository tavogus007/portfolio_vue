<template>
  <div class="relative w-full min-h-screen text-white pt-16 pb-24 flex justify-center">

    <!-- BACK BUTTON -->
    <BackNavbar />

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
import BackNavbar from '../components/BackNavbar.vue'

const { navigateTo } = useNavigation()
</script>