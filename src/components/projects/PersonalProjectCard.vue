<template>
  <div class="shrink-0 w-70 sm:w-[320px] bg-white/5 backdrop-blur-xl p-3 rounded-2xl border border-white/10
              transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]">

    <!-- PDF embed -->
    <iframe
      v-if="project.pdfUrl"
      :src="project.pdfUrl"
      class="rounded-2xl w-full h-44 mb-3 border border-purple-400/40"
      frameborder="0"
    />

    <!-- Video YouTube -->
<iframe
  v-else-if="project.videoId"
  :src="`https://www.youtube.com/embed/${project.videoId}`"
  class="rounded-2xl w-full h-44 mb-3 border border-purple-400/40"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>

    <!-- Imagen normal -->
    <img
      v-else-if="project.image"
      :src="project.image"
      :alt="project.title"
      class="rounded-3xl w-full h-44 object-cover mb-3 border border-purple-400/40 cursor-pointer"
      @click="$emit('open-image', project.image)"
    />

    <!-- Placeholder si no hay ni imagen ni PDF -->
    <div
      v-else
      class="rounded-2xl w-full h-44 mb-3 border border-purple-400/40 bg-white/5 flex items-center justify-center text-gray-500 text-sm"
    >
      No preview
    </div>

    <h4 class="text-2xl">{{ project.title }}</h4>

    <div class="p-1">
      <p class="text-gray-300 leading-relaxed">{{ project.description }}</p>

      <p class="text-sm text-gray-400 underline pb-1">Techs</p>
      <div class="flex flex-wrap gap-1 p-1">
        <TechBadge v-for="tech in project.techs" :key="tech.label"
          :label="tech.label" :color="tech.color" />
      </div>

      <div class="flex justify-end gap-4">
        <!-- Botón activo -->
        <a
          v-if="project.docUrl"
          :href="project.docUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all duration-300"
        >
          Documentation
        </a>

        <!-- Botón deshabilitado -->
        <span
          v-else
          class="px-6 py-2 bg-white/10 text-gray-500 rounded-xl cursor-not-allowed select-none"
          title="Documentation not available yet"
        >
          Documentation
        </span>
      </div>
    </div>

  </div>
</template>

<script setup>
import TechBadge from './TechBadge.vue'

defineProps({ project: Object })
defineEmits(['open-image'])
</script>