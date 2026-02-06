<script setup>
// State for search input
const searchQuery = ref("");

// Mock Data for "Recent Finds" (You can replace this with real data later)
const recentVerses = ref([
  {
    reference: "Philippians 4:6-7",
    time: "2h ago",
    text: '"Do not be anxious about anything, but in every situation, by prayer and petition..."',
    tags: ["Anxiety", "Peace"],
  },
  {
    reference: "Isaiah 41:10",
    time: "Yesterday",
    text: '"So do not fear, for I am with you; do not be dismayed, for I am your God..."',
    tags: ["Strength", "Fear"],
  },
  {
    reference: "Psalm 34:18",
    time: "2 days ago",
    text: '"The Lord is close to the brokenhearted and saves those who are crushed in spirit."',
    tags: ["Comfort"],
  },
]);

// Helper function for quick search chips
const quickSearch = (term) => {
  searchQuery.value = `I feel ${term.toLowerCase()}...`;
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main
      class="flex-1 max-w-360 mx-auto w-full flex flex-col lg:flex-row pt-20 md:pt-0 px-3 md:px-0 bg-primary_dark"
    >
      <div
        class="flex-1 flex flex-col items-center justify-center px-6 py-12 lg:py-24"
      >
        <div class="max-w-2xl w-full space-y-8">
          <div class="text-center space-y-2">
            <h2
              class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
            >
              How are you feeling today?
            </h2>
            <p class="text-slate-500 dark:text-slate-400 text-md mt-4">
              Speak from your heart, and find peace in the Word.
            </p>
          </div>

          <div class="relative group">
            <div
              class="absolute inset-y-0 left-4 flex items-center pointer-events-none"
            >
              <span
                class="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors"
                >mood</span
              >
            </div>
            <input
              v-model="searchQuery"
              class="w-full h-16 pl-12 pr-16 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 focus:border-primary dark:focus:border-primary rounded-2xl text-md transition-all outline-none shadow-sm dark:shadow-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
              placeholder="I'm feeling a bit overwhelmed by work and need some hope..."
              type="text"
            />
            <button
              class="absolute right-3 top-3 bottom-3 bg-primary text-white px-5 rounded-lg font-bold hover:brightness-110 transition-all flex items-center gap-2"
            >
              <span>Search</span>
              <span class="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>

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

          <div
            class="mt-12 p-6 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 flex gap-4 items-start"
          >
            <span class="material-symbols-outlined text-primary"
              >lightbulb</span
            >
            <div class="space-y-1">
              <h4 class="font-semibold text-slate-900 dark:text-white">
                Guided Tip
              </h4>
              <p
                class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
              >
                Try being specific like "I'm looking for a verse about patience
                while waiting for good news" to get more tailored scripture
                suggestions.
              </p>
            </div>
          </div>
        </div>
      </div>

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
              <span class="material-symbols-outlined text-slate-500"
                >bookmark</span
              >
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
    </main>

    <footer
      class="py-6 border-t border-slate-200 dark:border-slate-800 mt-auto"
    >
      <div
        class="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-xs text-slate-500 dark:text-slate-500">
          © 2024 VerseFind. AI-assisted Bible Discovery.
        </p>
        <div class="flex gap-6">
          <a
            class="text-xs text-slate-500 hover:text-primary transition-colors cursor-pointer"
            >Privacy Policy</a
          >
          <a
            class="text-xs text-slate-500 hover:text-primary transition-colors cursor-pointer"
            >Terms of Service</a
          >
          <a
            class="text-xs text-slate-500 hover:text-primary transition-colors cursor-pointer"
            >Support</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
}
</style>
