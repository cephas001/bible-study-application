<template>
  <aside class="w-full lg:w-96 p-8 flex flex-col gap-8 bg-primary_dark">
    <div>
      <div class="flex items-center justify-between mb-6">
        <div>
          <h3 class="text-lg font-bold">Discovery Hub</h3>
          <p class="text-xs text-slate-500 dark:text-slate-400">
            Your spiritual journey
          </p>
        </div>
        <button class="text-primary text-xs font-bold hover:underline">
          View All
        </button>
      </div>
      <div class="space-y-4">
        <div
          class="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/20 cursor-pointer"
        >
          <span class="material-symbols-outlined">schedule</span>
          <p class="text-sm font-medium">Recent Finds</p>
        </div>
        <div
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-600 dark:text-slate-300"
        >
          <span class="material-symbols-outlined text-slate-500">bookmark</span>
          <p class="text-sm font-medium">Saved Verses</p>
        </div>
        <div
          class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer text-slate-600 dark:text-slate-300"
        >
          <span class="material-symbols-outlined text-slate-500"
            >menu_book</span
          >
          <p class="text-sm font-medium">Guided Study</p>
        </div>
      </div>
    </div>

    <div class="flex-1 space-y-4">
      <h4
        class="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 px-1"
      >
        Previously Found
      </h4>

      <div
        v-for="(item, index) in recentVerses"
        :key="index"
        class="p-4 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 rounded-xl hover:shadow-md transition-shadow cursor-pointer group"
      >
        <div class="flex justify-between items-start mb-2">
          <span class="text-xs font-bold text-primary">{{
            item.reference
          }}</span>
          <span class="text-[10px] text-slate-400">{{ item.time }}</span>
        </div>
        <p
          class="text-xs text-slate-600 dark:text-slate-400 italic line-clamp-2"
        >
          {{ item.text }}
        </p>
        <div class="mt-3 flex gap-2">
          <span
            v-for="tag in item.tags"
            :key="tag"
            class="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-[10px]"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <button
      class="w-full bg-primary/10 hover:bg-primary/20 text-primary h-12 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
    >
      <span class="material-symbols-outlined text-[20px]">add</span>
      <span>New Reflection</span>
    </button>
  </aside>
</template>
