// plugins/firebase.client.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  // 1. Your Firebase configuration using the public environment variables
  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: config.public.firebaseAuthDomain,
    projectId: config.public.firebaseProjectId,
    storageBucket: config.public.firebaseStorageBucket,
    messagingSenderId: config.public.firebaseMessagingSenderId,
    appId: config.public.firebaseAppId,
  };

  // 2. Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // 3. Initialize services you need (like Auth)
  const auth = getAuth(app);

  // 4. "Provide" it so you can use it anywhere in your app
  return {
    provide: {
      auth, // Now accessible via $auth
    },
  };
});
