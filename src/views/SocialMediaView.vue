<template>
    <div class="relative w-full min-h-screen home">
        
        <button @click="navigateTo('home')"
            class="fixed lg:absolute top-8 left-4 sm:left-8 lg:left-16 flex items-center gap-3 text-gray-500 hover:text-white transition-colors duration-300 z-10 group">
            <!-- Línea decorativa (opcional, para mantener estilo con el menú) -->
            <span class="h-px bg-indigo-500 transition-all duration-300 ease-out w-8 group-hover:w-12" />
            <span class="text-sm tracking-widest uppercase">Volver</span>
        </button>
        <div
            class="flex flex-col lg:flex-row w-full min-h-screen items-center px-4 sm:px-6 lg:px-16 py-8 lg:py-0 gap-8 justify-center home">
            <h1 class="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                SOCIAL
                <span class="text-indigo-400">MEDIA</span>
            </h1>
    
        </div>
    </div>


</template>

<script setup>
import { useNavigation } from "../composables/useNavigation";
const { navigateTo } = useNavigation()
</script>
<style scoped>
.home {
    padding: 30px;
    /* Ajusta según necesites, aunque el botón usa posicionamiento fijo/absoluto */
}
</style>