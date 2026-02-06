<template>
  <div class="absolute inset-0 z-0">
    <div
      class="absolute inset-0 bg-linear-to-b from-background-dark/60 via-background-dark/80 to-background-dark z-10 bg-black/70"
    ></div>
    <img
      alt="Peaceful nature backdrop"
      class="w-full h-full object-cover object-top"
      :src="
        !props.relativeImageSource
          ? imageSource
          : `/images/${props.imageSource}`
      "
      :alt="props.altText"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const image = ref(null);

const props = defineProps({
  imageSource: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    default: "Background image",
  },
  relativeImageSource: {
    type: Boolean,
    default: false,
  },
});
</script>
