<template>
  <div
    class="min-h-screen bg-slate-50 flex flex-col items-center py-20 px-6 justify-center"
  >
    <h1 class="text-4xl font-bold text-black text-center mb-2">
      Bible Context Search
    </h1>
    <p class="text-slate-600 mb-8 text-center">
      Find verses for a feeling or a forgotten phrase.
    </p>

    <div class="w-full max-w-lg bg-white p-6 rounded-xl shadow-lg">
      <textarea
        v-model="input"
        class="w-full p-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-black outline-none transition resize-none"
        placeholder="e.g. I feel lost and need guidance..."
        rows="5"
      ></textarea>

      <button
        @click="handleSearch"
        :disabled="loading"
        class="w-full mt-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ loading ? "Searching Scripture..." : "Find Verses" }}
      </button>
    </div>

    <div
      class="mt-5 w-full max-w-lg bg-white p-6 rounded-xl shadow border-l-4 border-emerald-500"
      v-if="result"
    >
      <pre
        class="whitespace-pre-wrap font-sans text-black leading-relaxed flex justify-between">{{
        result
      }}<img src="/cancel-svgrepo-com.svg" alt="" class="w-5" @click="result = ''"></pre>
    </div>
  </div>
</template>

<script setup>
const input = ref("");
const result = ref("");
const loading = ref(false);

const handleSearch = async () => {
  if (!input.value) return;

  loading.value = true;
  result.value = "";

  try {
    const { data, error } = await useFetch("/api/search", {
      method: "POST",
      body: { query: input.value },
    });

    if (error.value) {
      result.value = "Sorry, we couldn't find that.";
    } else {
      result.value = data.value.result;
    }
  } catch (e) {
    result.value = "An unexpected error occurred.";
  } finally {
    loading.value = false;
  }
};
</script>
