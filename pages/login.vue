<template>
  <section class="flex min-h-[90vh] w-full overflow-hidden">
    <div class="hidden lg:flex w-1/2 relative">
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        data-alt="Open Bible on wooden table in sunlight"
        style="
          background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuCc4AZtvP1mmTzFb5de5VhhkBPC4mIXNyQV4maP9AP4k8wtr99YM5V7D0X3b0Pat42lv66IggcTM4c8CR7-uJRX88f5nUmJemlyhnXDUh8g2WkD69XpZxs8hJ-PAQNdQzMgIW4--kyJBQEBokj14WkeBwQGC258z9sdI7g5uuahEKExllfU6L0ie2DOFAZEbek1VQfhXWDrvy225FbMM6OR8My7gJWIOl3Xqltj9KbP5U_CWtoA7PFNvmzVIBeqNAExtWgFw0I3-rBD&quot;);
        "
      >
        <div class="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
        <div
          class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"
        ></div>
      </div>

      <div
        class="relative z-10 flex flex-col justify-end p-16 h-full text-white"
      >
        <h2 class="text-4xl font-bold leading-tight mb-4 drop-shadow-md">
          Find comfort and wisdom tailored to your heart.
        </h2>
        <p class="text-lg opacity-90 font-medium drop-shadow-sm">
          Let scripture guide your emotions and context today.
        </p>
      </div>
    </div>

    <div
      class="w-full lg:w-1/2 flex items-center justify-center py-12 px-6 bg-background-light dark:bg-background-dark overflow-y-auto"
    >
      <div class="w-full max-w-120 flex flex-col gap-8">
        <div class="flex flex-col gap-2 items-center text-center">
          <div class="flex gap-2">
            <div
              class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-2"
              @click="$router.back()"
            >
              <IconsArrowBack class="text-2xl" />
            </div>
            <div
              class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-2"
              @click="$router.back()"
            >
              <IconsMenuBook class="text-2xl" />
            </div>
          </div>
          <h1
            class="text-black text-3xl font-bold mb-2 tracking-tight flex gap-2 items-center mt-2"
          >
            VerseFind
          </h1>
          <p class="text-black text-base font-normal">
            Welcome back! Please enter your details.
          </p>
        </div>

        <div class="flex flex-col gap-4">
          <button
            @click="loginWithGoogle"
            class="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <IconsGoogleIcon />
            <span
              class="text-base font-bold text-black group-hover:text-slate-900 dark:group-hover:text-slate-900"
            >
              Sign in with Google
            </span>
          </button>

          <div class="relative flex items-center py-2">
            <div class="grow border-t border-slate-200"></div>
            <span class="shrink-0 mx-4 text-sm font-medium text-slate-400"
              >OR</span
            >
            <div class="grow border-t border-slate-200"></div>
          </div>

          <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-bold text-black" for="email"
                >Email</label
              >
              <div class="relative">
                <input
                  v-model="email"
                  class="form-input block w-full rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary py-3 px-4 text-base shadow-sm"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  required
                />
              </div>
            </div>

            <div class="flex flex-col gap-1.5">
              <label class="text-sm font-bold text-black" for="password"
                >Password</label
              >
              <div class="relative">
                <input
                  v-model="password"
                  class="form-input block w-full rounded-xl border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary py-3 px-4 text-base shadow-sm"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  required
                />
              </div>
            </div>

            <div class="flex items-center justify-end">
              <a
                class="text-sm font-semibold text-primary hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              class="mt-2 flex w-full cursor-pointer items-center justify-center rounded-xl bg-primary px-5 py-3.5 text-base font-bold text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Sign in
            </button>
          </form>
        </div>

        <div class="text-center">
          <p class="text-sm text-slate-500 dark:text-slate-400">
            Don't have an account?
            <NuxtLink
              to="/signup"
              class="font-bold text-primary hover:text-blue-600 dark:hover:text-blue-400 hover:underline cursor-pointer"
            >
              Sign up for free
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Form state
const email = ref("");
const password = ref("");

// Handle form submission
const handleLogin = () => {
  console.log("Logging in with:", email.value, password.value);
  // Add your MongoDB/Google Auth logic here later
};

const loginWithGoogle = () => {
  console.log("Initiating Google Login...");
};
</script>
