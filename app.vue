<template>
  <AppHeader />
  <div>
      <NuxtPage />
    <!-- Go back to top when scrolled down -->
    <div class="
        flex
        space-x-2
        mr-8
        mb-6
        right-0
        bottom-0
        z-50
        fixed
        items-center
        sm:space-x-4
      ">
      <BackToTop />
    </div>
  </div>
</template>

<script setup>
</script>

<style>
html, body , #__nuxt{
  @apply m-0 p-0 h-screen bg-secondary-light dark:bg-primary-dark min-h-screen flex flex-col
}

.vue-back-to-top {
  @apply p-2 sm:p-4 bg-indigo-500 hover:bg-indigo-600 text-white;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
</style>
