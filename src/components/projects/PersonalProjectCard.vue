<template>
  <div class="shrink-0 w-70 sm:w-[320px] bg-white/5 backdrop-blur-xl p-3 rounded-2xl border border-white/10
              transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]">

    <img :src="project.image" :alt="project.title"
      class="rounded-3xl w-full h-44 object-cover mb-3 border border-purple-400/40 cursor-pointer"
      @click="$emit('open-image', project.image)" />

    <h4 class="text-2xl">{{ project.title }}</h4>

    <div class="p-1">
      <p class="text-gray-300 leading-relaxed">{{ project.description }}</p>

      <p class="text-sm text-gray-400 underline pb-1">Techs</p>
      <div class="flex flex-wrap gap-1 p-1">
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
</template>

<script setup>
import TechBadge from './TechBadge.vue'

defineProps({ project: Object })
defineEmits(['open-image'])
</script>