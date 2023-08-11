<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const props = defineProps<{
  isOpen: boolean
  showModal: () => void
  modal: boolean
  categories: string[]
}>()

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'About Me',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },

]

const route = useRoute()

const { $gsap } = useNuxtApp()
function beforeEnterList(el: any) {
  el.style.opacity = '0'
  el.style.transform = 'translateX(50px)'
}
function enterList(el: any, done: any) {
  $gsap.to(el, {
    opacity: 1,
    x: 0,
    transform: 'translateY(0px)',
    delay: el.dataset.index * 0.3,
    duration: 0.8,
    onComplete: done,
  })
}

const breakpoints = useBreakpoints(breakpointsTailwind)

const smAndLarger = breakpoints.greaterOrEqual('sm') // sm and larger
const largerThanSm = breakpoints.greater('sm') // only larger than sm
const lgAndSmaller = breakpoints.smallerOrEqual('lg') // lg and smaller
const smallerThanLg = breakpoints.smaller('lg') // only smaller than lg

const showMenu = computed(() => {
  if (largerThanSm.value)
    return true
  else return props.isOpen
})
</script>

<template>
    <!-- App header navigation links -->
    <div
      v-show="showMenu" :class="isOpen ? 'block bg-secondary-light dark:bg-primary-dark' : 'hidden'"
      class="
      font-general-regular
      m-0
      sm:ml-4
      mt-5
      sm:mt-3 sm:flex
      p-5
      sm:p-0
      justify-center
      items-center
      shadow-lg
      sm:shadow-none
    "
    >
      <!-- <NuxtLink to="/projects" class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
      " aria-label="Projects">Projects</NuxtLink> -->
      <TransitionGroup :key="showMenu" appear @enter="enterList" @before-enter="beforeEnterList">
        <NuxtLink
          v-for="(link, index) in links" :key="link.path" :to="link.path" :data-index="index" class="
        block
        text-left text-lg text-primary-dark
        dark:text-ternary-light
        hover:text-secondary-dark
        dark:hover:text-secondary-light
        sm:mx-4
        mb-2
        sm:py-2
        pt-3
        sm:pt-2 sm:border-t-0
        dark:border-secondary-dark
      " :aria-label="link.name" :class="{ 'font-bold': link.path == route.path }"
        >
          {{ link.name }}
        </NuxtLink>
        <div
          key="button" data-index="5" class="
        font-general-regular
        border-t-2
        pt-3
        sm:pt-0 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      "
        >
          <button
            class="
          sm:hidden
          block
          text-left text-md
          bg-indigo-500
          hover:bg-indigo-600
          text-white
          shadow-sm
          rounded-md
          px-4
          py-2
          mt-2
        " aria-label="Hire Me Button" @click="showModal()"
          >
            Hire Me
          </button>
        </div>
      </TransitionGroup>
    </div>
</template>

<style scoped>
#nav .nuxt-link-exact-active,
#nav .nuxt-link-active {
  @apply text-indigo-700 dark:text-indigo-400;
}

.fade-enter-active {
  animation: coming 0.4s;
  animation-delay: 0.2s;
  opacity: 0;
}

.fade-leave-active {
  animation: going 0.4s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-10px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-30px)
}

.slide-enter-active {
  transition: opacity 1s ease-out,
    transform 1s ease-out;
  transition-delay: .8s;
}
</style>
