<template>
  <div class="text-center space-y-2">
    <h2
      class="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
    >
      {{ titleText }}
    </h2>
    <p
      class="text-slate-500 dark:text-slate-400 text-md mt-4"
      v-if="paragraphText"
    >
      {{ paragraphText }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  titleText: {
    type: String,
    required: true,
  },
  paragraphText: {
    type: String,
    required: false,
  },
});
</script>
