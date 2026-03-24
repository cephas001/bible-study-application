<template></template>

<script setup>
const { $auth } = useNuxtApp();
const authStore = useAuthStore();
const handleLogout = async () => {
  try {
    // Clear Firebase session
    await $auth.signOut();

    // Clear local Pinia state
    authStore.clearUser();

    // Tell the server to delete the secure HTTP-only cookie
    await $fetch("/api/auth/session", {
      method: "POST",
      body: { token: null },
    });

    // Redirect to the login page
    navigateTo("/login");
  } catch (error) {
    navigateTo("/");
    console.error("Error during logout:", error);
  }
};

onMounted(async () => {
  await handleLogout();
});
</script>
