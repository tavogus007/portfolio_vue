<template>
  <div class="flex flex-col gap-8">

    <!-- ABOUT -->
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl font-bold text-white">{{ about.name }}</h2>
      <p class="text-indigo-400 tracking-widest text-sm uppercase">{{ about.role }}</p>
      <p class="text-gray-300 leading-relaxed mt-1">{{ about.bio }}</p>
    </div>

    <!-- EXPERIENCE -->
    <div class="flex flex-col gap-4">
      <h3 class="text-lg font-semibold text-indigo-400 uppercase tracking-widest border-b border-white/10 pb-2">
        Experience
      </h3>
      <div class="flex flex-col gap-5">
        <div v-for="exp in experience" :key="exp.id" class="flex gap-4">
          <!-- timeline dot -->
          <div class="flex flex-col items-center pt-1">
            <div class="w-2 h-2 rounded-full bg-indigo-500 shrink-0 mt-1" />
            <div class="w-px flex-1 bg-white/10 mt-2" />
          </div>
          <!-- content -->
          <div class="flex flex-col gap-1 pb-4">
            <p class="font-semibold text-white">{{ exp.role }}</p>
            <p class="text-sm text-indigo-300">{{ exp.company }}</p>
            <p class="text-xs text-gray-500 mb-1">{{ exp.period }}</p>
            <ul class="flex flex-col gap-1">
              <li v-for="bullet in exp.bullets" :key="bullet"
                class="text-sm text-gray-400 flex gap-2">
                <span class="text-indigo-500 mt-1 shrink-0">›</span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- EDUCATION -->
    <div class="flex flex-col gap-4">
      <h3 class="text-lg font-semibold text-indigo-400 uppercase tracking-widest border-b border-white/10 pb-2">
        Education
      </h3>
      <div v-for="edu in education" :key="edu.id" class="flex gap-4">
        <div class="flex flex-col items-center pt-1">
          <div class="w-2 h-2 rounded-full bg-emerald-500 shrink-0 mt-1" />
        </div>
        <div class="flex flex-col gap-0.5">
          <p class="font-semibold text-white">{{ edu.degree }}</p>
          <p class="text-sm text-emerald-400">{{ edu.institution }}</p>
          <p class="text-xs text-gray-500">{{ edu.period }}</p>
        </div>
      </div>
    </div>

    <!-- SKILLS -->
    <div class="flex flex-col gap-4">
      <h3 class="text-lg font-semibold text-indigo-400 uppercase tracking-widest border-b border-white/10 pb-2">
        Skills
      </h3>
      <div class="flex flex-col gap-3">
        <div v-for="group in skills" :key="group.category">
          <p class="text-xs text-gray-500 uppercase tracking-wider mb-2">{{ group.category }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in group.items" :key="skill"
              class="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- LANGUAGES -->
    <div class="flex flex-col gap-4">
      <h3 class="text-lg font-semibold text-indigo-400 uppercase tracking-widest border-b border-white/10 pb-2">
        Languages
      </h3>
      <div class="flex gap-4 flex-wrap">
        <div v-for="lang in languages" :key="lang.lang"
          class="flex flex-col items-center px-4 py-2 bg-white/5 rounded-2xl border border-white/10 gap-0.5">
          <span class="text-white text-sm font-semibold">{{ lang.lang }}</span>
          <span class="text-xs text-gray-400">{{ lang.level }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  about:      Object,
  experience: Array,
  education:  Array,
  skills:     Array,
  languages:  Array,
})
</script>