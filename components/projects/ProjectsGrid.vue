<script setup>
import { storeToRefs } from 'pinia'

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

const filteredProjects = computed(() => {
  const { selectedProject, searchProject, projects } = projectStore

  if (selectedProject)
    return filterProjectsByCategory(projects, selectedProject)

  else if (searchProject)
    return filterProjectsBySearch(projects, searchProject)

  return projects
})
</script>

<template>
  <div class="pt-10 sm:pt-20 md:pt-24 bg-transparent">
    <!-- Projects grid header -->
    <div class="text-center">
      <p class="
          font-general-semibold
          text-2xl
          sm:text-5xl
          font-semibold
          mb-2
          text-ternary-dark
          dark:text-ternary-light
        ">
        {{ projectsHeading }}
      </p>
      <!-- Note: This description is commented out, but if you want to see it, just uncomment this -->
      <p class="text-lg sm:text-xl text-gray-500 dark:text-ternary-light">
        {{ projectsDescription }}
      </p>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <div v-for="project in filteredProjects" :key="project.id" class="
          rounded-xl
          shadow-lg
          hover:shadow-xl
          cursor-pointer
          mb-10
          sm:mb-0
          bg-secondary-light
          dark:bg-ternary-dark
        " aria-label="Single Project">
        <NuxtLink :to="`/projects/${project.id}`">
          <div>
            <img :src="project.img" :alt="project.title" class="rounded-t-xl border-none">
          </div>
          <div class="text-center px-4 py-6">
            <p class="
                font-general-semibold
                text-xl text-ternary-dark
                dark:text-ternary-light
                font-semibold
                mb-2
              ">
              {{ project.title }}
            </p>
            <span class="
                font-general-medium
                text-lg text-ternary-dark
                dark:text-ternary-light
              ">{{ project.category }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
