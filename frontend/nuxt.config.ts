// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: "Bible Study App",
    },
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],

  runtimeConfig: {
    // Private keys go here (Server only)
    geminiApiKey: "",

    public: {
      // Public keys go here (Client & Server)
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID,
    },
  },
});
