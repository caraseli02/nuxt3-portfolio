<template>
  <div class="grid min-h-scree place-items-center">

    <!-- The iPhone shell -->
    <div
      class="mx-auto h-[712px] w-[350px] bg-black rounded-[60px] border-[14px] border-black relative overflow-hidden shadow-xl">

      <img class="absolute inset-0 h-full w-full object-cover"
        src="https://wallpapers.hector.me/wavey/Rainbow%20iPhone%20P3.jpg" />
      <div class="absolute top-0 inset-x-0">
        <div class="mx-auto bg-black h-8 w-32 rounded-3xl mt-2"></div>
      </div>
      <div class="relative">
        <div
          class="flex flex-col justify-center items-start ml-2 mt-12 absolute p-4 bg-white/40 h-24 backdrop-blur-md rounded-3xl shadow text-slate-700">
          <span class="text-3xl">
            Hi 👋
          </span>
          <span class="text-xl">I'm Vladislav </span>
        </div>
        <!-- Small icons on top right -->
        <div class="mr-5 mt-2 flex justify-end space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
              clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            <path
              d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
          </svg>
        </div>
        <div class="h-0.5 w-10 mt-1.5 mr-7 bg-white rounded ml-auto"></div>
        <div class="relative mt-4 mx-2">
          <!-- Stacked panels (sitting below) -->
          <div
            class="absolute -bottom-4 scale-[0.85] origin-bottom inset-x-0 h-full w-full bg-white/10 backdrop-blur-md rounded-2xl">
          </div>
          <div
            class="absolute -bottom-2 scale-95 origin-bottom inset-x-0 h-full w-full bg-white/30 backdrop-blur-md rounded-3xl shadow-sm">
          </div>
          <!-- Main, current panel -->
          <div class="p-4 bg-white/40 h-96 backdrop-blur-md rounded-3xl shadow mt-32">
            <section class="flex justify-center items-center ml-4">
              <div class="w-32 h-32 shadow-inner shadow-green-400 overflow-hidden p-1 rounded-full">
                <div class="flex h-full w-full items-center  justify-center back rounded-full">
                  <img src="~/assets/img/man.png" alt="Man" class="w-full h-auto rounded-full profile-img">
                </div>
              </div>
            </section>
            <section class="text-slate-600 grid grid-cols-1 justify-items-center items-center mt-8 h-40 relative">
              <h2 class="font-semibold text-gray-900 text-xl uppercase text-center absolute top-0 h-8 overflow-hidden">
                <div class="text-wrapper leading-[0] mt-4 text-stone-100">
                  <p class="title-role drop-shadow-2xl">Frontend Developer</p>
                  <p class="title-role">UI/UX enthusiast</p>
                  <p class="title-role">Webapps Tester</p>
                </div>
              </h2>
              <div class="text-slate-600 text-lg h-10 flex justify-center flex-wrap">
                <Icon v-for="icon in logos" :key="icon" :name="icon" class="h-10 w-10 mr-2 mb-2 skill-icons" />
              </div>
              <!-- <span class="text-gray-700 text-xs mt-4 px-2">
                After all, when you really LOVE WHAT YOU DO, it doesn’t seem like work,
                does it?
              </span>
              <AtomsFlags /> -->
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SplitTextJS from 'split-text-js';
const logos = ['logos:vueuse', 'logos:vue', 'logos:pinia', 'logos:nuxt-icon', 'logos:cypress-icon', 'logos:tailwindcss-icon', 'logos:vitest', 'logos:vitejs', 'logos:firebase', 'skill-icons:typescript']

const { $gsap } = useNuxtApp()

onMounted(() => {
  const title = $gsap.utils.toArray('.title-role')
  const skillIcons = $gsap.utils.toArray('.skill-icons')
  const tl = $gsap.timeline({ repeat: -1 })

  title.forEach(async (title) => {
    const splitTitle = new SplitTextJS(title)
    tl
      .from(splitTitle.chars, {
        opacity: 0,
        y: 80,
        rotateX: -90,
        stagger: 0.035,
        ease: "power1.inOut",
      }, '<')
      .to(splitTitle.chars, {
        opacity: 0,
        y: -80,
        rotateX: 90,
        stagger: 0.035,
        ease: "power1.inOut",
        delay: 5,
      }, "<1"); // Add a delay of 2 seconds between switches
  })

  tl.to(".profile-img", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    scale: 1.1,
    duration: 1.4,
  })
})
</script>

<style scoped>
</style>
