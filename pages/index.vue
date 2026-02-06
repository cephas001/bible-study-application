<template>
  <div>
    <Header />

    <main class="relative pt-16">
      <section
        class="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <BackgroundImage
          imageSource="homepage_first_section_2.avif"
          altText="Serene nature background with a person reading a book"
          :relativeImageSource="true"
        />

        <div class="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <FeatureBadge />

          <h1
            class="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8 mt-5"
          >
            Find Comfort in the Word,
            <span
              class="bg-linear-to-r from-blue-300 via-blue-500 to-blue-700 bg-clip-text text-transparent"
              >Tailored to Your Moment.</span
            >
          </h1>
          <p
            class="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Experience a deeper connection with scripture through AI-powered
            insights that understand your emotions and current life context.
          </p>
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <NuxtLink
              class="group flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all w-full sm:w-auto shadow-xl cursor-pointer"
              to="/discovery"
            >
              <IconsGoogleIcon class="w-5 h-5" />
              Sign in with Google
            </NuxtLink>
            <button
              class="flex items-center justify-center gap-2 text-white/80 hover:text-white px-8 py-4 font-semibold transition-all cursor-pointer"
              @click="scrollToNextSection"
            >
              Explore Features
              <span class="material-symbols-outlined"
                ><IconsArrowDown class="text-xl"
              /></span>
            </button>
          </div>
        </div>
      </section>

      <section
        class="py-24 bg-background-light dark:bg-background-dark"
        ref="targetSection"
      >
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex flex-col items-center text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-black text-white mb-6">
              Deepen Your Spiritual Journey
            </h2>
            <p class="text-slate-400 text-lg max-w-2xl">
              Our AI helps you navigate the Bible with precision and empathy,
              bridging ancient wisdom with modern daily life.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              class="group p-8 rounded-2xl bg-[#1c2127] border border-white/5 hover:border-primary/50 transition-all hover:translate-y-1"
            >
              <div
                class="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform"
              >
                <span class="material-symbols-outlined text-[28px]"
                  >psychology</span
                >
              </div>

              <h3 class="text-white text-xl font-bold mb-3">
                AI-Driven Insights
              </h3>
              <p class="text-slate-400 leading-relaxed">
                Deep learning that connects the context of your life with the
                wisdom of the Bible, providing personalized interpretations.
              </p>
            </div>
            <div
              class="group p-8 rounded-2xl bg-[#1c2127] border border-white/5 hover:border-primary/50 transition-all hover:translate-y-1"
            >
              <div
                class="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform"
              >
                <span class="material-symbols-outlined text-[28px]"
                  >favorite</span
                >
              </div>
              <h3 class="text-white text-xl font-bold mb-3">
                Emotional Context
              </h3>
              <p class="text-slate-400 leading-relaxed">
                Search by how you feel—whether you are seeking peace, strength,
                or gratitude. Our AI understands human sentiment.
              </p>
            </div>
            <div
              class="group p-8 rounded-2xl bg-[#1c2127] border border-white/5 hover:border-primary/50 transition-all hover:translate-y-1"
            >
              <div
                class="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform"
              >
                <span class="material-symbols-outlined text-[28px]"
                  >menu_book</span
                >
              </div>
              <h3 class="text-white text-xl font-bold mb-3">
                Personal Journaling
              </h3>
              <p class="text-slate-400 leading-relaxed">
                Save verses and record your reflections in a private, secure
                digital sanctuary designed for deep contemplation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 px-6">
        <div
          class="max-w-5xl mx-auto bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div
            class="absolute -top-24 -right-24 size-64 bg-white/10 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute -bottom-24 -left-24 size-64 bg-black/10 rounded-full blur-3xl"
          ></div>
          <div class="relative z-10">
            <h2
              class="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight"
            >
              Ready to find your verse?
            </h2>
            <p class="text-white/90 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of believers using AI to enhance their study and
              find daily peace through scripture.
            </p>
            <div class="flex justify-center">
              <button
                class="bg-white text-primary font-bold text-lg px-10 py-4 rounded-xl shadow-2xl shadow-black/20 hover:bg-slate-50 transition-all transform hover:scale-105 active:scale-95"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
const targetSection = ref(null);

const scrollToNextSection = () => {
  // Check if the element exists first
  if (targetSection.value) {
    targetSection.value.scrollIntoView({
      behavior: "smooth",
      block: "start", // Aligns top of element with top of viewport
    });
  }
};
</script>
