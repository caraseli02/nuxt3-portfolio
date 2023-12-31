<script setup>
const props = defineProps(['showModal', 'modal', 'categories'])

watch(() => props.modal, (val) => {
  if (val)
    document.body.style.overflow = 'hidden'

  else
    document.body.style.overflow = 'auto'
})
</script>

<template>
  <transition name="fade">
    <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
      <!-- Modal body background as backdrop -->
      <div v-show="modal" class="
          bg-filter bg-black bg-opacity-50
          fixed
          inset-0
          w-full
          h-full
          z-20
        " @click="showModal()" />
      <!-- Modal contents -->
      <main class="flex flex-col items-center justify-center h-full w-full">
        <transition name="fade-up-down">
          <div v-show="modal" class="modal-wrapper flex items-center z-30">
            <div class="
                modal
                max-w-md
                mx-5
                xl:max-w-xl
                lg:max-w-xl
                md:max-w-xl
                bg-secondary-light
                dark:bg-primary-dark
                max-h-screen
                shadow-lg
                flex-row
                rounded-lg
                relative
              ">
              <div class="
                  modal-header
                  flex
                  justify-between
                  gap-10
                  p-5
                  border-b border-ternary-light
                  dark:border-ternary-dark
                ">
                <h5 class="text-primary-dark dark:text-primary-light text-xl">
                  What project are you looking for?
                </h5>
                <button class="px-4 text-primary-dark dark:text-primary-light" @click="showModal()">
                  <i class="w-8 sm:w-12">x</i>
                </button>
              </div>
              <div class="modal-body p-5 w-full h-full">
                <form class="max-w-xl m-4 text-left" @submit="(e) => {
                  e.preventDefault;
                }
                  ">
                  <div class="mt-0">
                    <input id="name" class="
                        w-full
                        px-5
                        py-2
                        border-1 border-gray-200
                        dark:border-secondary-dark
                        rounded-md
                        text-md
                        bg-slate-100
                        dark:bg-ternary-dark
                        text-primary-dark
                        dark:text-ternary-light
                      " name="name" type="text" required="" placeholder="Name" aria-label="Name">
                  </div>
                  <div class="mt-6">
                    <input id="email" class="
                        w-full
                        px-5
                        py-2
                        border-1 border-gray-200
                        dark:border-secondary-dark
                        rounded-md
                        text-md
                        bg-slate-100
                        dark:bg-ternary-dark
                        text-primary-dark
                        dark:text-ternary-light
                      " name="email" type="text" required="" placeholder="Email" aria-label="Email">
                  </div>
                  <div class="mt-6">
                    <select id="subject" class="
                        w-full
                        px-5
                        py-2
                        border-1 border-gray-200
                        dark:border-secondary-dark
                        rounded-md
                        text-md
                        bg-slate-100
                        dark:bg-ternary-dark
                        text-primary-dark
                        dark:text-ternary-light
                      " name="subject" type="text" required="" aria-label="Project Category">
                      <option v-for="category in categories" :key="category.id" :value="category.value">
                        {{ category.name }}
                      </option>
                    </select>
                  </div>

                  <div class="mt-6">
                    <textarea id="message" class="
                        w-full
                        px-5
                        py-2
                        border-1 border-gray-200
                        dark:border-secondary-dark
                        rounded-md
                        text-md
                        bg-slate-100
                        dark:bg-ternary-dark
                        text-primary-dark
                        dark:text-ternary-light
                      " name="message" cols="14" rows="6" aria-label="Details" placeholder="Project description" />
                  </div>

                  <div class="mt-6 pb-4 sm:pb-1">
                    <Button title="Send Request" class="
                        px-4
                        sm:px-6
                        py-2
                        sm:py-2.5
                        text-white
                        bg-indigo-500
                        hover:bg-indigo-600
                        rounded-md
                        focus:ring-1 focus:ring-indigo-900
                        duration-500
                      " type="submit" aria-label="Submit Request" />
                  </div>
                </form>
              </div>
              <div class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
                <Button title="Close" class="
                    px-4
                    sm:px-6
                    py-2
                    bg-gray-600
                    text-primary-light
                    hover:bg-ternary-dark
                    dark:bg-gray-200
                    dark:text-secondary-dark
                    dark:hover:bg-primary-light
                    rounded-md
                    focus:ring-1 focus:ring-indigo-900
                    duration-500
                  " aria-label="Close Hire Me Modal" @click="showModal()" />
              </div>
            </div>
          </div>
        </transition>
      </main>
    </div>
  </transition>
</template>

<style>
.modal-body {
  max-height: 500px;
}

.bg-gray-800-opacity {
  background-color: #2d374850;
}

@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}

.fade-up-down-enter-active {
  transition: all 0.3s ease;
}

.fade-up-down-leave-active {
  transition: all 0.3s ease;
}

.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}

.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}

.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
