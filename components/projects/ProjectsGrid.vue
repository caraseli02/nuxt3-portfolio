<script setup>
import { storeToRefs } from 'pinia'
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

import { useProjectsStore } from '@/stores/projectsStore' // Adjust the path

const projectStore = useProjectsStore()
const { projectsHeading, projectsDescription } = storeToRefs(projectStore)
function filterProjectsByCategory(projects, selectedProject) {
  const category = selectedProject.charAt(0).toUpperCase() + selectedProject.slice(1)
  return projects.filter(item => item.category.includes(category))
}

function filterProjectsBySearch(projects, searchProject) {
  const projectRegExp = new RegExp(searchProject, 'i')
  return projects.filter(el => el.title.match(projectRegExp))
}

const breakpoints = useBreakpoints(breakpointsTailwind)
const smallerThanLg = breakpoints.smaller('lg') // only smaller than lg

const route = useRoute()
const filteredProjects = computed(() => {
  const { selectedProject, searchProject, projects } = projectStore

  if (selectedProject) {
    return filterProjectsByCategory(projects, selectedProject)
  }

  else if (route.path === '/') {
    if (smallerThanLg.value)
      return filterProjectsBySearch(projects, searchProject).slice(0, 2)

    return filterProjectsBySearch(projects, searchProject).slice(0, 3)
  }

  else if (searchProject) {
    return filterProjectsBySearch(projects, searchProject)
  }

  return projects
})
</script>

<template>
  <section :key="route.path" class="flex flex-col">
    <div class="pt-10 sm:pt-20 md:pt-24 bg-transparent">
      <!-- Projects grid header -->
      <div class="text-center">
        <p class="
          font-general-semibold
          text-2xl
          sm:text-5xl
          font-semibold
          mb-2
          md:mb-12
          mt-12
          md:mt-0
          text-ternary-dark
          dark:text-ternary-light
        ">
          {{ projectsHeading }}
        </p>
        <!-- Note: This description is commented out, but if you want to see it, just uncomment this -->
        <p class="hidden lg:block text-lg sm:text-xl text-gray-500 dark:text-ternary-light">
          {{ projectsDescription }}
        </p>
      </div>

      <!-- Projects grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
      </div>
    </div>
    <!-- View more projects button -->
    <div class="my-5 sm:mt-14 flex justify-center">
      <NuxtLink to="/projects" class="
          font-general-medium
          flex
          items-center
          px-6
          py-3
          rounded-lg
          shadow-lg
          hover:shadow-xl
          bg-indigo-500
          hover:bg-indigo-600
          focus:ring-1 focus:ring-indigo-900
          text-white text-lg
          sm:text-xl
          duration-300
        " aria-label="More Projects">
        <Button title="More Projects" />
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
</style>
