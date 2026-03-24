<template>
  <div class="flex flex-col items-center gap-4">
    <span
      class="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500"
      >Quick Start</span
    >
    <div class="flex flex-wrap justify-center gap-3">
      <button
        v-for="emotion in ['Anxious', 'Joyful', 'Grateful', 'Lost']"
        :key="emotion"
        @click="quickSearch(emotion)"
        class="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary hover:text-primary transition-all text-sm font-medium shadow-sm"
      >
        {{ emotion }}
      </button>
    </div>
  </div>
</template>

<script setup></script>
