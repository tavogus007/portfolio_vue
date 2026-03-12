<template>
  <div class="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10
              transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]">
    <div class="grid lg:grid-cols-2 items-center">

      <!-- VIDEO -->
      <iframe class="w-full h-72 rounded-2xl"
        :src="`https://www.youtube.com/embed/${project.videoId}`"
        :title="project.title"
        allowfullscreen />

      <!-- INFO -->
      <div class="flex flex-col gap-2 p-4">
        <h3 class="text-3xl font-bold">{{ project.title }}</h3>

        <p class="text-gray-300 leading-relaxed">{{ project.description }}</p>

        <p class="text-sm text-gray-400 underline">Frameworks and Techs</p>
        <div class="flex flex-wrap gap-1">
          <TechBadge v-for="tech in project.techs" :key="tech.label"
            :label="tech.label" :color="tech.color" />
        </div>

        <div class="flex justify-end gap-4">
          <a :href="project.docUrl"
            class="px-6 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all duration-300 features">
            Documentation
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import TechBadge from './TechBadge.vue'

defineProps({
  project: Object,
})
</script>