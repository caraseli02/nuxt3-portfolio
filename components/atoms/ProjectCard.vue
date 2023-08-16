<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import type { Project } from '~/types'

defineProps<{
  project: Project
}>()
const cardTarget = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  cardTarget,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
  },
)

const { $gsap } = useNuxtApp()
function beforeEnterList(el) {
  el.style.opacity = '0'
  el.style.transform = 'translateX(50px)'
}
function enterList(el, done) {
  $gsap.to(el, {
    opacity: 1,
    x: 0,
    transform: 'translateY(0px)',
    delay: el.dataset.index * 0.3,
    duration: 0.8,
    onComplete: done,
  })
  stop()
}
</script>

<template>
  <section ref="cardTarget" class="mx-auto mb-4 sm:mb-0">
    <Transition appear @enter="enterList" @before-enter="beforeEnterList">
      <div v-if="targetIsVisible"
        class="max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <NuxtLink class="overflow-hidden aspect-[10/16]" :to="`/projects/${project.id}`">
          <NuxtImg class="rounded-t-lg w-full object-cover hover:scale-105 transition-all duration-400" :src="project.img"
            :alt="project.title" width="200" height="200" />
        </NuxtLink>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ project.title }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ project.category }}
          </p>
          <NuxtLink :to="`/projects/${project.id}`"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
</style>
