<template>
  <div class="relative w-full min-h-screen text-white pt-32 pb-24 flex justify-center home">
    <button @click="navigateTo('home')"
      class="fixed top-8 left-8 flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 z-50 group">
      <span class="h-px bg-indigo-500 transition-all duration-300 ease-out w-8 group-hover:w-12" />
      <span class="text-sm tracking-widest uppercase">Volver</span>
    </button>
    <div class="w-full max-w-6xl flex flex-col gap-3 px-6 sm:px-10 lg:px-16">
      <!-- ========================= -->
      <!-- Victoria Falls Section -->
      <!-- ========================= -->
      <h2 class="text-3xl font-semibold tracking-wide text-indigo-400">
        Featured Projects
      </h2>
      <section class="flex flex-col gap-6">
        <div class="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10
                    transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] ">
          <div class="grid lg:grid-cols-2 items-center">
            <!-- IMAGE -->
            <img src="../assets/imgs/vfri.png" alt="Victoria-falls" class="rounded-3xl w-full h-full object-cover" />
            <!-- INFO -->
            <div class="flex flex-col gap-2 p-4">
              <h3 class="text-3xl font-bold">
                Victoria Falls
              </h3>
              <p class="text-gray-300 leading-relaxed">
                Responsable for the frontend development of the website for the institute.
              </p>
              <div class="flex justify-center">
                <a href="https://victoriafalls.netlify.app/" target="_blank"
                  class="w-fit px-6 py-2 bg-emerald-600 rounded-xl hover:bg-emerald-500 transition-all duration-300 features">
                  Visit Live System
                </a>
              </div>
              <p class="text-sm text-gray-400 underline">Frameworks and Techs</p>
              <div class="flex flex-wrap gap-1">
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Angular
                  v19</span>
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postman</span>
                <span class="w-fit px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm features">
                  Bootstrap</span>
              </div>

              <div class="flex justify-end gap-4">
                <a href="#"
                  class="px-6 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all duration-300 features">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ========================= -->
      <!-- SIAI -->
      <!-- ========================= -->
       <section class="flex flex-col">
        <div class="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10
                    transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] ">
          <div class="grid lg:grid-cols-2 items-center">
            <!-- IMAGE -->
            <img src="../assets/imgs/siai.png" alt="Victoria-falls" class="rounded-3xl w-full h-full object-cover" />
            <!-- INFO -->
            <div class="flex flex-col gap-2 p-4">
              <h3 class="text-3xl font-bold">
                SIAI
              </h3>
              <p class="text-gray-300 leading-relaxed">
                 Contributed to the development of the SIAI system, including feature implementation, testing, documentation, and full-stack support.
              </p>
              <div class="flex justify-center">
                <a href="https://siai.produccion.gob.bo/" target="_blank"
                  class="w-fit px-6 py-2 bg-emerald-600 rounded-xl hover:bg-emerald-500 transition-all duration-300 features">
                  Visit Live System
                </a>
              </div>
              <p class="text-sm text-gray-400 underline">Frameworks and Techs</p>
              <div class="flex flex-wrap gap-1">
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Vue3</span>
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">NestJS</span>
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postgres</span>
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postman</span>
                <span class="w-fit px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm features">
                  Tailwind CSS</span>
              </div>

              <div class="flex justify-end gap-4">
                <a href="#"
                  class="px-6 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all duration-300 features">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ========================= -->
      <!-- MEDICO EN TU CASA -->
      <!-- ========================= -->
      <h3 class="text-2xl font-bold py-3">Médico en tu Casa</h3>
      <section class="flex flex-col">
        <div class="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10
                    transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] ">
          <div class="grid lg:grid-cols-2 items-center">
            <iframe class="w-full h-72 rounded-2xl" src="https://www.youtube.com/embed/OT3ogavLews"
              title="Proyecto de Grado" allowfullscreen>
            </iframe>
            <div class="flex flex-col gap-2 p-4">
              <h3 class="text-3xl font-bold">
                MEC - iGOB 24/7 Section
              </h3>
              <p class="text-gray-300 leading-relaxed">
                 Section developed to be used in the website iGOB 24/7 of the municipality. Focused in the management of
              medical appointments.
              </p>
              <p class="text-sm text-gray-400 underline">Frameworks and Techs</p>
              <div class="flex flex-wrap gap-1">
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">AngularJS</span>
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">NestJS</span>
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postgres</span>
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postman</span>
              </div>
              <div class="flex justify-end gap-4">
                <a href="#"
                  class="px-6 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all duration-300 features">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col">
        <div class="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10
                    transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] ">
          <div class="grid lg:grid-cols-2 items-center">
            <iframe class="w-full h-72 rounded-2xl" src="https://www.youtube.com/embed/N5yVZ0D1Bkw"
              title="Proyecto de Grado" allowfullscreen>
            </iframe>
            <div class="flex flex-col gap-2 p-4">
              <h3 class="text-3xl font-bold">
                MEC - Web Portal Section
              </h3>
              <p class="text-gray-300 leading-relaxed">
                 Section developed to be used in the new version of the central web portal of the SIIS (Sistema Integrado
              de Información en Salud) of the municipality. Oriented to the management of the hosptital's
              functionalities.
              </p>
              <p class="text-sm text-gray-400 underline">Frameworks and Techs</p>
              <div class="flex flex-wrap gap-1">
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Angular v18</span>
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">NestJS</span>
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postgres</span>
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postman</span>
                <span class="w-fit px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm features">Bootstrap</span>
              </div>
              <div class="flex justify-end gap-4">
                <a href="#"
                  class="px-6 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all duration-300 features">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex flex-col">
        <div class="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10
                    transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,197,94,0.25)] ">
          <div class="grid lg:grid-cols-2 items-center">
            <iframe class="w-full h-72 rounded-2xl" src="https://www.youtube.com/embed/ClhHKYBlyhk"
              title="Proyecto de Grado" allowfullscreen>
            </iframe>
            <div class="flex flex-col gap-2 p-4">
              <h3 class="text-3xl font-bold">
                MEC - smartwatch Section
              </h3>
              <p class="text-gray-300 leading-relaxed">
                 Demonstration of the app developed for the web portal of the SIIS. Developed for patients with special
              needs.
              </p>
              <p class="text-sm text-gray-400 underline">Frameworks and Techs</p>
              <div class="flex flex-wrap gap-1">
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Kotlin</span>
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postgres</span>
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postman</span>
                <span class="w-fit px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm features">Android Studio</span>
                <span class="w-fit px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm features">Wear OS</span>
              </div>
              <div class="flex justify-end gap-4">
                <a href="#"
                  class="px-6 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all duration-300 features">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ========================= -->
      <!-- PROFESSIONAL EXPERIENCE -->
      <!-- ========================= -->
      <section class="flex flex-col gap-12 w-full">

        <h2 class="text-3xl font-semibold tracking-wide text-indigo-400">
          Chatbots & Automation (Comming soon)
        </h2>

        <div class="relative w-full">

          <div class="flex gap-6 overflow-x-auto w-full pb-4 scroll-smooth">

            <!-- CARD -->
            <div class="flex-shrink-0 w-[280px] sm:w-[320px] bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10
                  transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]">

              <iframe class="w-full h-44 rounded-xl mb-4" src="https://www.youtube.com/embed/TU_VIDEO_ID"
                allowfullscreen>
              </iframe>

              <h4 class="text-lg font-semibold mb-2">AI Sales Chatbot (Comming soon)</h4>

              <p class="text-gray-400 text-sm">
                Flujo automatizado con n8n + integración API externa.
              </p>

            </div>

            <!-- CARD 2 -->
            <div class="flex-shrink-0 w-[280px] sm:w-[320px] bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10
                  transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]">

              <img src="" class="w-full h-44 object-cover rounded-xl mb-4" />

              <h4 class="text-lg font-semibold mb-2">n8n Automation Flow (Comming soon)</h4>

              <p class="text-gray-400 text-sm">
                Sistema de automatización con múltiples integraciones. (Comming soon)
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  </div>
</template>

<script setup>
import { useNavigation } from '../composables/useNavigation'
const { navigateTo } = useNavigation()
</script>

<style scoped>
.home {
  padding: 60px 30px 30px 30px;
}

.features {
  padding: 5px 10px;
}
</style>