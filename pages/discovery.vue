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
          <TextBlock
            titleText="Hi Peter, how are you feeling today?"
            paragraphText="Speak from your heart, and find peace in the Word."
          />

          <div class="relative group">
            <div
              class="absolute inset-y-0 left-4 flex items-center pointer-events-none"
            >
              <IconsSmile class="text-2xl ml-0.5 mb-1" />
            </div>

            <textarea
              v-model="searchQuery"
              class="w-full h-auto py-5 pl-15 pr-16 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 focus:border-primary dark:focus:border-primary rounded-2xl text-md transition-all outline-none shadow-sm dark:shadow-none placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none"
              placeholder="I'm feeling a bit overwhelmed by work and need some hope..."
            />
            <button
              class="absolute right-0 top-3 bottom-3 bg-transparent text-white px-5 rounded-lg font-bold hover:brightness-110 transition-all flex items-center gap-2"
            >
              <IconsSend class="text-2xl" />
            </button>
          </div>

          <GuidedTip
            tip="Try being specific, such as asking, 'I am looking for a verse about patience while waiting for good news,' to get more tailored scripture suggestions."
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// State for search input
const searchQuery = ref("");
</script>
