<script setup>
const isOpen = ref(false)
const modal = ref(false)
const categories = [
  {
    id: 1,
    value: 'web',
    name: 'Web Application',
  },
  {
    id: 2,
    value: 'mobile',
    name: 'Mobile Applicaiton',
  },
  {
    id: 3,
    value: 'ui-ux',
    name: 'UI/UX Design',
  },
  {
    id: 4,
    value: 'branding',
    name: 'Branding & Animations',
  },
]

const colorMode = useColorMode()
function themeSwitcher() {
  colorMode.preference
    = colorMode.value === 'light' ? 'dark' : 'light'
}

function showModal() {
  if (modal.value) {
    // Stop screen scrolling
    document
      .getElementsByTagName('html')[0]
      .classList.remove('overflow-y-hidden')
    modal.value = false
  }
  else {
    document
      .getElementsByTagName('html')[0]
      .classList.add('overflow-y-hidden')
    modal.value = true
  }
}
console.log(colorMode.value);
</script>

<template>
  <nav id="nav" class="z-10 sm:container sm:mx-auto absolute top-0 left-0 right-0">
    <!-- Header -->
    <div class="
        max-w-screen-lg
        xl:max-w-screen-2xl
        block
        sm:flex sm:justify-between sm:items-center
        py-6
      ">
      <!-- Header menu links and small screen hamburger menu -->
      <div class="flex justify-between items-center px-6 sm:px-0">
        <!-- Header logos -->
        <div v-if="colorMode.value">
          <NuxtLink to="/">
            <img v-if="colorMode.value === 'light'" src="/logo-light.svg" class="w-36" alt="Light Logo">

            <img v-if="colorMode.value === 'dark'" src="/logo-dark.svg" alt="Color Logo" class="w-36">
          </NuxtLink>
        </div>

        <!-- Theme switcher small screen -->
        <button class="
            sm:hidden
            ml-8
            bg-primary-light
            dark:bg-ternary-dark
            px-2
            py-1.5
            sm:px-3 sm:py-2
            shadow-sm
            rounded-xl
            cursor-pointer
          " @click="themeSwitcher">
          <!-- Dark mode icon -->
          <svg v-if="$colorMode.value == 'light'" xmlns="http://www.w3.org/2000/svg" class="
              text-liText-ternary-dark
              hover:text-gray-400
              dark:text-liText-ternary-light
              dark:hover:text-liBorder-primary-light
              w-6
              h-6
            " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <!-- Light mode icon -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="text-gray-200 hover:text-gray-50 w-6 h-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </button>

        <!-- Small screen hamburger menu -->
        <div class="sm:hidden">
          <button type="button" class="focus:outline-none" aria-label="Hamburger Menu" @click="isOpen = !isOpen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="
                h-7
                w-7
                mt-1
                fill-current
                text-secondary-dark
                dark:text-ternary-light
              ">
              <path v-if="isOpen" fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                clip-rule="evenodd" />
              <path v-if="!isOpen" fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Header links -->
      <AppNavigation :is-open="isOpen" :show-modal="showModal" :modal="modal" :categories="categories" />

      <!-- Header right section buttons -->
      <div :key="+isOpen" class="hidden sm:flex justify-between items-center flex-col md:flex-row">
        <!-- Hire me button -->
        <div class="font-general-medium hidden md:block">
          <button class="
          text-indigo-700 hover:text-white border border-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-indigo-00 dark:text-indigo-200 dark:hover:text-white dark:hover:bg-indigo-500 dark:focus:ring-indigo-900
          bg-white-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40
          " aria-label="Hire Me Button" @click="showModal()">
            Hire Me
          </button>
        </div>

        <!-- Theme switcher large screen -->
        <button class="
            sm:ml-6
            bg-primary-light
            dark:bg-ternary-dark
            px-2
            py-2
            shadow-sm
            rounded-lg
            cursor-pointer
          " @click="themeSwitcher">
          <!-- Dark mode icon -->
          <svg v-if="$colorMode.value == 'light'" xmlns="http://www.w3.org/2000/svg" class="
              text-liText-ternary-dark
              hover:text-gray-400
              dark:text-liText-ternary-light
              dark:hover:text-liBorder-primary-light
              w-6
              h-6
            " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          <!-- Light mode icon -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="text-gray-200 hover:text-gray-50 w-6 h-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Hire me modal -->
    <HireMeModal :show-modal="showModal" :modal="modal" :categories="categories" aria-modal="Hire Me Modal" />
  </nav>
</template>
