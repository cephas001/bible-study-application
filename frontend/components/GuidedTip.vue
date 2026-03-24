<template>
  <div
    class="mt-9 p-6 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 flex gap-4 items-start"
    v-if="showTip"
  >
    <div>
      <IconsBulb class="text-primary text-2xl mt-0.5" />
    </div>
    <div class="space-y-1">
      <h4 class="font-semibold text-slate-900 dark:text-white">Guided Tip</h4>
      <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        {{ tip }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tip: {
    type: String,
    required: true,
  },
  showTip: {
    type: Boolean,
    default: true,
  },
});
</script>
