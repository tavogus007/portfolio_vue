<template>
  <div class="relative w-full min-h-screen text-white pt-24 pb-16 flex justify-center">

    <BackNavbar />

    <div class="w-full max-w-[95rem] px-4 sm:px-4 lg:px-8">

      <!-- GRID: izquierda + derecha -->
      <!-- en mobile: columna unica / en desktop: dos columnas -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:h-[calc(100vh-8rem)]">

        <!-- IZQUIERDA — info scrolleable en mobile, fija en desktop -->
        <div class="lg:overflow-y-auto lg:pr-2 scrollbar-none">
          <ResumeLeft
            :about="aboutMe"
            :experience="experience"
            :education="education"
            :skills="skills"
            :languages="languages"
          />
        </div>

        <!-- DERECHA — PDF viewer -->
        <div class="flex flex-col lg:h-full lg:-mr-16 lg:pr-[25px]">
          <ResumePDFViewer :cv-path="aboutMe.cvPath" :cv-path-es="aboutMe.cvPathEs" />
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import BackNavbar from '../components/BackNavbar.vue'
import ResumeLeft from '../components/resume/ResumeLeft.vue'
import ResumePDFViewer from '../components/resume/ResumePDFViewer.vue'
import { aboutMe, experience, education, skills, languages } from '../data/resume.js'
</script>

<style scoped>
.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
</style>