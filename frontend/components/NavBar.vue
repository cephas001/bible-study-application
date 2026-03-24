<template>
  <UNavigationMenu
    orientation="vertical"
    :items="items"
    class="data-[orientation=vertical]:w-48 bg-black py-2 rounded-md text-white"
    :ui="{
      link: 'text-white',
      linkLeadingIcon: 'text-white',
    }"
  />
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const authStore = useAuthStore();
const { $auth } = useNuxtApp();

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: "Guide",
      icon: "i-lucide-book-open",
      children: [
        {
          label: "About",
          description: "Fully styled and customizable components for Nuxt.",
          icon: "i-lucide-house",
        },
        {
          label: "Installation",
          description:
            "Learn how to install and configure Nuxt UI in your application.",
          icon: "i-lucide-cloud-download",
        },
      ],
    },
  ],
  [
    {
      label: "Logout",
      icon: "i-lucide-log-out",
      to: "/logout",
      ui: {
        link: "text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300",
        linkLeadingIcon: "text-red-500 dark:text-red-400",
      },
    },
    {
      label: "Help",
      icon: "i-lucide-circle-help",
      disabled: true,
    },
  ],
]);
</script>
