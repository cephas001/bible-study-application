<script setup>
import { ref } from "vue";

// Form state
const fullName = ref("");
const email = ref("");
const password = ref("");
const agreeTerms = ref(false);
const showPassword = ref(false);

// Toggle password visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

// Handle form submission
const handleRegister = () => {
  if (!agreeTerms.value) {
    alert("Please agree to the Terms of Service.");
    return;
  }
  console.log("Registering:", fullName.value, email.value, password.value);
  // Add your MongoDB/Google Auth registration logic here
};

const registerWithGoogle = () => {
  console.log("Initiating Google Signup...");
};

// SEO & Head Config
useHead({
  title: "VerseFind - Create Account",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { charset: "utf-8" },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    },
  ],
  // Inject Tailwind config if you haven't moved this to a nuxt.config module
  script: [
    { src: "https://cdn.tailwindcss.com?plugins=forms,container-queries" },
    {
      innerHTML: `
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "primary": "#3b82f6", 
                "primary-hover": "#60a5fa",
                "background-light": "#f8fafc",
                "background-dark": "#1e293b",
                "surface-light": "#ffffff",
                "surface-dark": "#334155",
                "surface-border": "#cbd5e1",
                "surface-border-dark": "#475569",
                "text-main": "#0f172a",
                "text-secondary": "#64748b",
                "accent-blue": "#eff6ff"
              },
              fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"]
              },
              borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px"},
            },
          },
        }
      `,
    },
  ],
  bodyAttrs: {
    class:
      "bg-background-light text-text-main min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white",
  },
});
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-hidden">
    <header
      class="flex items-center justify-between whitespace-nowrap border-b border-solid border-surface-border px-6 md:px-10 py-4 bg-white z-10"
    >
      <NuxtLink to="/" class="flex items-center gap-3">
        <div class="size-8 text-primary">
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2
          class="text-slate-900 text-xl font-bold leading-tight tracking-tight"
        >
          VerseFind
        </h2>
      </NuxtLink>

      <div class="hidden md:flex items-center gap-8">
        <nav class="flex items-center gap-6 lg:gap-8">
          <NuxtLink
            to="/"
            class="text-slate-600 hover:text-primary text-sm font-medium transition-colors"
            >Home</NuxtLink
          >
          <a
            href="#"
            class="text-slate-600 hover:text-primary text-sm font-medium transition-colors"
            >Features</a
          >
          <a
            href="#"
            class="text-slate-600 hover:text-primary text-sm font-medium transition-colors"
            >About</a
          >
        </nav>
        <div class="flex gap-3">
          <NuxtLink
            to="/login"
            class="flex items-center justify-center overflow-hidden rounded-lg h-9 px-5 bg-transparent hover:bg-slate-100 text-slate-700 text-sm font-bold transition-all"
          >
            Log In
          </NuxtLink>
        </div>
      </div>
      <button class="md:hidden p-2 text-slate-900">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </header>

    <main class="flex-1 flex flex-col lg:flex-row h-full">
      <div
        class="lg:w-1/2 relative min-h-[300px] lg:min-h-0 lg:h-auto overflow-hidden group"
      >
        <div
          class="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
          data-alt="Peaceful nature scene with mountains and lake"
          style="
            background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuB896R0GJ6_PB5F0F_RLuLTH9Z5Mu7X1HUktFzfSBdAeWUSB04ThFKobJl7EtWMf8qfv4wo3Kz7wyC75zWf4QFBsLobvaq8sdt95HQUAZyHZfDRg4R8GduzbE_WIhvu1_Z6UbRyakJFdbCRWRX45wTmZE1Lx2q9V3GDaOKH0lnwnEEpKZTewZhlizcbvlS0RwJHtNcUjPsSSTy5Mawu0Xs85x1JKs0YIVw4h12RzO8oEb52srTuTa9tXU-bP4JDVJw45H2ljqBOSGBr&quot;);
          "
        ></div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-blue-900/90 lg:via-blue-900/30"
        ></div>
        <div
          class="absolute bottom-0 left-0 right-0 p-8 lg:p-16 flex flex-col justify-end h-full"
        >
          <div class="max-w-md">
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-white text-xs font-bold mb-6 shadow-sm"
            >
              <span class="material-symbols-outlined text-sm"
                >auto_awesome</span
              >
              <span>AI-Powered Insights</span>
            </div>
            <h1
              class="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            >
              Find solace in scriptures tailored to your heart.
            </h1>
            <p class="text-blue-100 text-lg leading-relaxed">
              Join thousands who use VerseFind to discover biblical wisdom that
              speaks directly to their current emotions and life situations.
            </p>
          </div>
        </div>
      </div>

      <div
        class="lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-16 xl:p-24 bg-background-light"
      >
        <div class="w-full max-w-[480px] flex flex-col gap-8">
          <div class="text-center lg:text-left">
            <h2 class="text-3xl font-bold text-slate-900 mb-2">
              Create your account
            </h2>
            <p class="text-slate-500">
              Start your journey to deeper spiritual connection.
            </p>
          </div>

          <button
            @click="registerWithGoogle"
            class="group flex items-center justify-center gap-3 w-full h-12 bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50 rounded-xl text-slate-700 font-medium transition-all shadow-sm hover:shadow-md"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            <span>Sign up with Google</span>
          </button>

          <div class="relative flex py-2 items-center">
            <div class="flex-grow border-t border-slate-200"></div>
            <span class="flex-shrink-0 mx-4 text-slate-400 text-sm"
              >Or register with email</span
            >
            <div class="flex-grow border-t border-slate-200"></div>
          </div>

          <form @submit.prevent="handleRegister" class="flex flex-col gap-5">
            <label class="flex flex-col gap-1.5">
              <span class="text-sm font-semibold text-slate-700"
                >Full Name</span
              >
              <div class="relative">
                <input
                  v-model="fullName"
                  class="w-full h-12 px-4 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-slate-900"
                  placeholder="Enter your full name"
                  type="text"
                  required
                />
                <span
                  class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]"
                  >person</span
                >
              </div>
            </label>

            <label class="flex flex-col gap-1.5">
              <span class="text-sm font-semibold text-slate-700"
                >Email Address</span
              >
              <div class="relative">
                <input
                  v-model="email"
                  class="w-full h-12 px-4 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-slate-900"
                  placeholder="name@example.com"
                  type="email"
                  required
                />
                <span
                  class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]"
                  >mail</span
                >
              </div>
            </label>

            <label class="flex flex-col gap-1.5">
              <span class="text-sm font-semibold text-slate-700"
                >Create Password</span
              >
              <div class="relative">
                <input
                  v-model="password"
                  class="w-full h-12 px-4 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-slate-900 pr-12"
                  placeholder="Min. 8 characters"
                  :type="showPassword ? 'text' : 'password'"
                  required
                />
                <button
                  @click.prevent="togglePasswordVisibility"
                  class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  type="button"
                >
                  <span class="material-symbols-outlined text-[20px]">
                    {{ showPassword ? "visibility" : "visibility_off" }}
                  </span>
                </button>
              </div>
            </label>

            <label class="flex items-start gap-3 mt-2 cursor-pointer group">
              <div class="relative flex items-center">
                <input
                  v-model="agreeTerms"
                  class="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 bg-white checked:border-primary checked:bg-primary transition-all"
                  type="checkbox"
                />
                <span
                  class="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 text-[16px] pointer-events-none font-bold"
                  >check</span
                >
              </div>
              <span class="text-sm text-slate-500 pt-0.5 select-none">
                I agree to the
                <a class="text-primary hover:underline font-medium" href="#"
                  >Terms of Service</a
                >
                and
                <a class="text-primary hover:underline font-medium" href="#"
                  >Privacy Policy</a
                >
              </span>
            </label>

            <button
              type="submit"
              class="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary hover:bg-primary-hover text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-blue-500/30"
            >
              Create Account
            </button>
          </form>

          <div class="text-center mt-2">
            <p class="text-slate-500 text-sm">
              Already have an account?
              <NuxtLink
                to="/login"
                class="text-primary hover:text-blue-600 font-bold ml-1 transition-colors"
              >
                Log In
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
