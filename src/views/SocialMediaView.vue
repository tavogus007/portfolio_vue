<template>
  <div class="flex flex-col gap-6 w-full h-full justify-center">

    <!-- Professional -->
    <div class="flex flex-col gap-3">
      <p class="text-xs text-gray-500 uppercase tracking-widest pl-1">Professional</p>
      <div class="flex flex-col gap-3">
        <a v-for="link in professionalLinks" :key="link.id"
          :href="link.url" target="_blank"
          :class="[
            'flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm',
            'transition-all duration-300 group',
            link.color
          ]">
          <img :src="link.logo" :alt="link.label"
            class="w-10 h-10 rounded-xl object-contain bg-white p-1"
            @error="e => e.target.style.display='none'" />
          <div class="flex flex-col">
            <span class="text-white font-semibold group-hover:text-white transition-colors">{{ link.label }}</span>
            <span class="text-xs text-gray-400">{{ link.description }}</span>
          </div>
          <svg class="ml-auto w-4 h-4 text-gray-600 group-hover:text-gray-300 transition-colors"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Learning -->
    <div class="flex flex-col gap-3">
      <p class="text-xs text-gray-500 uppercase tracking-widest pl-1">Learning</p>
      <div class="flex flex-col gap-3">
        <a v-for="link in learningLinks" :key="link.id"
          :href="link.url" target="_blank"
          :class="[
            'flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm',
            'transition-all duration-300 group',
            link.color
          ]">
          <img :src="link.logo" :alt="link.label"
            class="w-10 h-10 rounded-xl object-contain bg-white p-1"
            @error="e => e.target.style.display='none'" />
          <div class="flex flex-col">
            <span class="text-white font-semibold group-hover:text-white transition-colors">{{ link.label }}</span>
            <span class="text-xs text-gray-400">{{ link.description }}</span>
          </div>
          <svg class="ml-auto w-4 h-4 text-gray-600 group-hover:text-gray-300 transition-colors"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>

  </div>
</template>

<script setup>
import { professionalLinks, learningLinks } from '../data/social'
</script>