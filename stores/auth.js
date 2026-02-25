// stores/auth.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore(
  "auth",
  () => {
    // 1. State (refs)
    const user = ref(null);
    const isLoading = ref(false);

    // 2. Getters (computed)
    const isAuthenticated = computed(() => !!user.value);

    // 3. Actions (functions)
    const setUser = (userData) => {
      user.value = userData;
    };

    const clearUser = () => {
      user.value = null;
    };

    // 4. Return everything you want to be public
    return {
      user,
      isLoading,
      isAuthenticated,
      setUser,
      clearUser,
    };
  },
  {
    persist: true,
  },
);
