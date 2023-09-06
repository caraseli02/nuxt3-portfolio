<script setup>
const { $gsap } = useNuxtApp()
const showAnimation = ref(false)
function enterTitle(el) {
  $gsap.to(el, { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 'opacity': 1, 'y': 0, 'duration': 1.8 })
}
onMounted(() => {
  showAnimation.value = true
})
</script>

<template>
  <section class="
      flex flex-col
      sm:justify-between
      items-start
      sm:flex-row
      h-screen
      max-w-screen
      w-full
      overflow-hidden
    ">
    <!-- Banner left contents -->
    <Transition appear @before-enter="enterTitle">
      <div v-show="showAnimation" class="
            title  self-start lg:self-center 
            md:ml-24 pt-40
            dark:text-primary-light text-ternary-dark
            text-bold text-left
            max-w-xs md:max-w-screen-sm w-full lg:w-2/3 mx-auto
            flex flex-col gap-5
            ">
        <h4 class="
            font-general-semibold
            text-2xl
            text-center
            sm:text-left
            text-ternary-dark
            dark:text-primary-light
            uppercase
            font-semibold
          ">
          Hey, I am Vlad
        </h4>
        <h1 class="
            title
            font-general-medium
            mt-2
            text-4xl
            2xl:text-6xl
            text-center
            sm:text-left
            leading-none

          ">
          Web & Components <i class="font-bold text-indigo-500">unique</i> solutions
        </h1>
        <p class="lg:text-xl">
          I'm a highly skilled and motivated freelance developer specializing in Vue.js and Nuxt.js. With a strong focus
          on building robust and efficient components.
        </p>
        <div class="flex justify-center sm:block">
          <a href="/VladResume.pdf" download="" class="
              flex
              justify-center
              items-center
              w-36
              sm:w-48
              mt-12
              mb-6
              sm:mb-0
              text-lg
              border border-indigo-200
              dark:border-ternary-dark
              py-2.5
              sm:py-3
              shadow-lg
              rounded-lg
              bg-indigo-50
              dark:bg-slate-800
              focus:ring-1 focus:ring-indigo-900
              hover:bg-indigo-500
              text-gray-500
              hover:text-white
              duration-500
            " aria-label="Download Resume">
            <Icon name="uil:down-arrow" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100" />
            <span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
          </a>
        </div>
      </div>
    </Transition>
    <div v-show="showAnimation"
      class="absolute left-0 right-0 bottom-48 lg:bottom-0 -mx-2 -rotate-[4.5deg] flex gap-8 py-3 my-12 border-t-2 border-b-2 border-t-teal-500 border-b-teal-900 self-start">
      <marqueeList />
    </div>
    <!-- Banner right illustration -->
    <div class="img-container w-full lg:w-2/3 text-right float-right absolute bottom-0 right-0 max-h-[90vh]">
      <img class="inline-flex" src="/fotoProfile.png" alt="Developer Light">
    </div>
  </section>
</template>

<style scoped>
</style>
