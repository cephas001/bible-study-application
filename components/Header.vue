<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass-nav border-0">
    <div
      class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between bg-black text-white"
    >
      <div class="flex items-center gap-2">
        <NuxtLink
          class="text-white text-xl font-bold tracking-tight flex items-center gap-2"
          to="/"
        >
          <IconsMenuBook />
          VerseFind</NuxtLink
        >
      </div>
      <nav class="hidden md:flex items-center gap-10">
        <a
          class="text-white/70 hover:text-white text-sm font-medium transition-colors"
          href="#"
          >About</a
        >
        <a
          class="text-white/70 hover:text-white text-sm font-medium transition-colors"
          href="#"
          >Features</a
        >
        <a
          class="text-white/70 hover:text-white text-sm font-medium transition-colors"
          href="#"
          >FAQ</a
        >
      </nav>
      <div class="flex items-center gap-4" v-if="false">
        <button
          class="hidden sm:flex text-white text-sm font-medium hover:text-primary transition-colors cursor-pointer"
        >
          Sign In
        </button>
        <button
          class="bg-primary hover:bg-primary/90 text-white text-sm font-bold px-5 py-2 rounded-xl transition-all shadow-lg shadow-primary/20 cursor-pointer"
        >
          Get Started
        </button>
      </div>
      <div class="flex items-center gap-4">
        <IconsSettings class="text-2xl" />

        <div
          class="h-9 w-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden"
        >
          <img
            alt="User Profile"
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.glass-nav {
  background: rgba(16, 25, 34, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>
