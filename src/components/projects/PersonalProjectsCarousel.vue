<template>
  <section class="flex flex-col gap-2 w-full">
    <div class="relative w-full overflow-x-auto pb-6 custom-scrollbar">
      <div class="flex gap-3 w-full scroll-smooth p-4">
        <PersonalProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          @open-image="selectedImg = $event" />
      </div>
    </div>

    <ProjectLightbox :img="selectedImg" @close="selectedImg = null" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import PersonalProjectCard from './PersonalProjectCard.vue'
import ProjectLightbox from './ProjectLightbox.vue'

defineProps({ projects: Array })

const selectedImg = ref(null)
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar        { height: 4px; }
.custom-scrollbar::-webkit-scrollbar-track  { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb  { background: rgba(99,102,241,0.4); border-radius: 999px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(99,102,241,0.7); }
</style>