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
</script>

<template>
  <div class="relative flex min-h-screen w-full flex-col overflow-hidden">
    <Header />

    <main class="flex-1 flex flex-col lg:flex-row h-full pt-20">
      <div
        class="max-w-md px-8 pt-6 pb-10 bg-linear-to-t from-blue-900/50 to-transparent lg:bg-linear-to-r lg:from-transparent lg:to-blue-900/50"
      >
        <h1
          class="text-2xl lg:text-4xl font-bold text-black mb-4 leading-tight"
        >
          Find solace in scriptures tailored to your heart.
        </h1>
        <p class="text-black text-md leading-relaxed">
          Join thousands who use VerseFind to discover biblical wisdom that
          speaks directly to their current emotions and life situations.
        </p>
      </div>

      <div
        class="lg:w-1/2 flex flex-col justify-center items-center p-6 pt-10 lg:p-16 xl:p-24 bg-background-light"
      >
        <div
          class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6"
        >
          <IconsMenuBook class="text-2xl" />
        </div>
        <div class="w-full max-w-120 flex flex-col gap-8">
          <div class="text-center lg:text-left">
            <h2 class="text-2xl font-bold text-slate-900 mb-2">
              Create your account
            </h2>
            <p class="text-slate-500">
              Start your journey to deeper spiritual connection.
            </p>
          </div>

          <button
            @click="registerWithGoogle"
            class="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition-all hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <IconsGoogleIcon />
            <span
              class="text-base font-bold text-black group-hover:text-slate-900 dark:group-hover:text-slate-900"
            >
              Sign up with Google
            </span>
          </button>

          <div class="relative flex py-2 items-center">
            <div class="grow border-t border-slate-200"></div>
            <span class="shrink-0 mx-4 text-slate-400 text-sm"
              >Or register with email</span
            >
            <div class="grow border-t border-slate-200"></div>
          </div>

          <form @submit.prevent="handleRegister" class="flex flex-col gap-5">
            <label class="flex flex-col gap-1.5">
              <span class="text-sm font-semibold text-black">Full Name</span>
              <div class="relative">
                <input
                  v-model="fullName"
                  class="w-full h-12 px-4 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-black"
                  placeholder="Enter your full name"
                  type="text"
                  required
                />
              </div>
            </label>

            <label class="flex flex-col gap-1.5">
              <span class="text-sm font-semibold text-black"
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
              </div>
            </label>

            <label class="flex flex-col gap-1.5">
              <span class="text-sm font-semibold text-black"
                >Create Password</span
              >
              <div class="flex items-center gap-1">
                <input
                  v-model="password"
                  class="w-full h-12 px-4 rounded-xl bg-white border border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-slate-400 text-slate-900 pr-12"
                  placeholder="Min. 8 characters"
                  :type="showPassword ? 'text' : 'password'"
                  required
                />
                <button
                  @click.prevent="togglePasswordVisibility"
                  class="text-black/90 hover:text-slate-600 transition-colors"
                  type="button"
                >
                  <IconsShowPassword class="text-lg" v-if="!showPassword" />
                  <IconsHidePassword class="text-lg" v-if="showPassword" />
                </button>
              </div>
            </label>

            <label class="flex items-start gap-3 mt-2 cursor-pointer group">
              <div class="relative flex items-center">
                <UCheckbox
                  v-model="agreeTerms"
                  class="peer cursor-pointer appearance-none rounded bg-white transition-all"
                />
              </div>
              <span class="text-sm text-slate-500 select-none">
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
              class="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary hover:bg-primary-hover text-black text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-lg shadow-blue-500/30"
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
