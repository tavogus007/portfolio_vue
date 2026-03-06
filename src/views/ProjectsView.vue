<template>
  <div class="relative w-full min-h-screen text-white pt-32 pb-24 flex justify-center home">
    <button @click="navigateTo('home')"
      class="fixed top-8 left-4 sm:left-8 lg:left-16 flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 z-50 group">
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
                Contributed to the development of the SIAI system, including feature implementation, testing,
                documentation, and full-stack support.
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
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">NestJS</span>
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postgres</span>
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
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">AngularJS</span>
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">NestJS</span>
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postgres</span>
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
                <span class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Angular
                  v18</span>
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">NestJS</span>
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postgres</span>
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postman</span>
                <span
                  class="w-fit px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm features">Bootstrap</span>
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
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Kotlin</span>
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postgres</span>
                <span
                  class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Postman</span>
                <span class="w-fit px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm features">Android
                  Studio</span>
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
      <h3 class="text-2xl font-bold py-2">Personal projects</h3>

      <section class="flex flex-col gap-2 w-full">
        <div class="relative w-full overflow-x-auto pb-6 custom-scrollbar">
          <div class="flex gap-3 w-full scroll-smooth p-4">
            <!-- CARD 1 -->
            <div class="shrink-0 w-70 sm:w-[320px] bg-white/5 backdrop-blur-xl p-3 rounded-2xl border border-white/10
                  transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] gap-3">
              <img :src="chatbot1" alt="chatbot1"
                class="rounded-3xl w-full h-44 object-cover mb-3 border border-purple-400/40 cursor-pointer"
                @click="selectedImg = chatbot1" />
              <h4 class="text-2xl">Chatbot - Meta</h4>
              <div class="p-1">
                <p class="text-gray-300 leading-relaxed">
                  The chatbot was develop usying the Meta services.
                </p>
                <p class="text-sm text-gray-400 underline pb-1">Techs</p>
                <div class="flex flex-wrap gap-1 p-1">
                  <span
                    class="w-fit px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm features">Node</span>
                  <span
                    class="w-fit px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm features">JavaScript</span>
                  <span class="w-fit px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm features">Meta
                    Services</span>
                </div>
                <div class="flex justify-end gap-4">
                  <a href="#"
                    class="px-6 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all duration-300 features">
                    Documentation
                  </a>
                </div>
              </div>
            </div>
            <!-- CARD 2 -->
            <div class="shrink-0 w-70 sm:w-[320px] bg-white/5 backdrop-blur-xl p-3 rounded-2xl border border-white/10
                  transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] gap-3">
              <img :src="chatbot2" alt="chatbot2"
                class="rounded-3xl w-full h-44 object-cover mb-3 border border-purple-400/40 cursor-pointer"
                @click="selectedImg = chatbot2" />
              <h4 class="text-2xl">Chatbot Telegram - BotFather</h4>
              <div class="p-1">
                <p class="text-gray-300 leading-relaxed">
                  The chatbot was develop usying BotFather for telegram.
                </p>
                <p class="text-sm text-gray-400 underline pb-1">Techs</p>
                <div class="flex flex-wrap gap-1 p-1">
                  <span
                    class="w-fit px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm features">BotFather</span>
                  <span class="w-fit px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm features">n8n</span>
                </div>
                <div class="flex justify-end gap-4">
                  <a href="#"
                    class="px-6 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all duration-300 features">
                    Documentation
                  </a>
                </div>
              </div>
            </div>

            <!-- CARD 3 -->
            <div class="shrink-0 w-70 sm:w-[320px] bg-white/5 backdrop-blur-xl p-3 rounded-2xl border border-white/10
                  transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] gap-3">
              <img src="../assets/imgs/workflow1.png" alt="workflow1"
                class="rounded-3xl w-full h-44 object-cover mb-3 border border-purple-400/40" />
              <h4 class="text-2xl">n8n workflow 1</h4>
              <div class="p-1">
                <p class="text-gray-300 leading-relaxed">
                  asdasd.
                </p>
                <p class="text-sm text-gray-400 underline pb-1">Techs</p>
                <div class="flex flex-wrap gap-1 p-1">
                  <span class="w-fit px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm features">n8n</span>
                </div>
                <div class="flex justify-end gap-4">
                  <a href="#"
                    class="px-6 py-2 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all duration-300 features">
                    Documentation
                  </a>
                </div>
              </div>
            </div>

            <!-- CARD 4 -->
            <div class="shrink-0 w-70 sm:w-[320px] bg-white/5 backdrop-blur-xl p-3 rounded-2xl border border-white/10
                  transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] gap-3">
              <img src="../assets/imgs/workflow1.png" alt="workflow2"
                class="rounded-3xl w-full h-44 object-cover mb-3 border border-purple-400/40" />
              <h4 class="text-2xl">n8n workflow 2</h4>
              <div class="p-1">
                <p class="text-gray-300 leading-relaxed">
                  asdasd.
                </p>
                <p class="text-sm text-gray-400 underline pb-1">Techs</p>
                <div class="flex flex-wrap gap-1 p-1">
                  <span class="w-fit px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm features">n8n</span>
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
        </div>

      </section>
    </div>
    <!-- LIGHTBOX -->
    <Transition name="fade">
      <div v-if="selectedImg" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        @click="selectedImg = null">
        <Transition name="zoom">
          <img v-if="selectedImg" :src="selectedImg"
            class="max-w-[90vw] max-h-[85vh] rounded-3xl border border-purple-400/40 shadow-[0_0_60px_rgba(99,102,241,0.3)]"
            @click.stop />
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { useNavigation } from "../composables/useNavigation"
import chatbot1 from '../assets/imgs/chatbot1.png'
import chatbot2 from '../assets/imgs/chatbot2.png'
import { ref } from 'vue'
const { navigateTo } = useNavigation()
const selectedImg = ref(null)
</script>

<style scoped>
.home {
  padding: 60px 30px 30px 30px;
}

.features {
  padding: 5px 10px;
}

.custom-scrollbar::-webkit-scrollbar {
  height: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.4);
  border-radius: 999px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(99, 102, 241, 0.7);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
}

.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0.85);
  opacity: 0;
}
</style>