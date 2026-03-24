// stores/auth.ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const { $auth } = useNuxtApp();

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

    const loginWithGoogle = async () => {
      try {
        // Grab the auth instance we provided in the plugin
        const provider = new GoogleAuthProvider();

        // Trigger the Google popup
        const result = await signInWithPopup($auth, provider);
        const user = result.user;

        // 2. Get the secure JWT (JSON Web Token) from Firebase
        const idToken = await user.getIdToken();

        // 3. Send the token to your new server route
        await $fetch("/api/auth/session", {
          method: "POST",
          body: { token: idToken },
        });

        const userToSave = {
          userId: user.uid,
          username: user.displayName,
          email: user.email,
          profilePicture: user.photoURL,
          verifiedEmail: user.emailVerified,
        };

        setUser(userToSave);

        console.log("Success! Logged in as:", user.displayName);

        // Redirect to your Discovery Hub dashboard
        navigateTo("/discovery");
      } catch (error) {
        console.error("Error logging in:", error.message);
      }
    };

    const loginWithEmail = async (email, password) => {
      try {
        // 1. Authenticate with Firebase
        const result = await signInWithEmailAndPassword($auth, email, password);
        const user = result.user;

        // 2. Get the secure JWT token
        const idToken = await user.getIdToken();

        // 3. Save the token in your HTTP-only cookie
        await $fetch("/api/auth/session", {
          method: "POST",
          body: { token: idToken },
        });

        console.log("Success! Logged in as:", user.email);

        // 4. Redirect to your Discovery Hub
        navigateTo("/discovery");
      } catch (error) {
        console.error("Login failed:", error);

        // Handle common Firebase error codes to show friendly messages
        if (
          error.code === "auth/invalid-credential" ||
          error.code === "auth/user-not-found" ||
          error.code === "auth/wrong-password"
        ) {
          throw new Error("Invalid email or password. Please retry.");
        } else {
          throw new Error(
            "An error occurred during login. Please try again later.",
          );
        }
      }
    };

    // 4. Return everything you want to be public
    return {
      user,
      isLoading,
      isAuthenticated,
      setUser,
      clearUser,
      loginWithGoogle,
      loginWithEmail,
    };
  },
  {
    persist: true,
  },
);
