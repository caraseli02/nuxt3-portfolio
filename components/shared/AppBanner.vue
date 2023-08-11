<script setup>
const { $gsap } = useNuxtApp()
const showAnimation = ref(false)
const enterTitle = (el) => {
  $gsap.to(el, { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0, duration: 1.2 })
}
onMounted(() => {
  showAnimation.value = true
})
</script>

<template>
  <section class="
      flex flex-col
      sm:justify-between
      items-center
      sm:flex-row
      h-screen
      pt-40
    ">
    <!-- Banner left contents -->
    <Transition appear @before-enter="enterTitle">
      <div v-show="showAnimation" class="title w-full lg:w-1/3 text-left self-start lg:self-center">
        <p class="
            font-general-semibold
            text-lg
            text-center
            sm:text-left
            text-gray-400
            uppercase
          ">
          Hey, I am Vlad
        </p>
        <h1 class="
            title
            font-general-medium
            mt-2
            text-4xl
            2xl:text-5xl
            text-center
            sm:text-left
            leading-none
            text-ternary-dark
            dark:text-primary-light
          ">
          Web & Components <i class="font-bold text-indigo-500">unique</i> solutions
        </h1>
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
            <Icon name="uil:down-arrow" class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"></Icon>
            <span class="text-sm sm:text-lg font-general-medium duration-100">Download CV</span>
          </a>
        </div>
      </div>
    </Transition>
    <!-- Banner right illustration -->
    <div class="img-container w-full md:w-2/3 text-right float-right absolute bottom-0 right-0 max-h-[90vh]">
      <img class="inline-flex" src="/fotoProfile.png" alt="Developer Light" />
    </div>
  </section>
</template>

<style scoped>
</style>
