<script>
export default {
  components: {},
  data() {
    return {
      userScrollPosition: 0,
    }
  },
  computed: {
    isScrolled() {
      return this.userScrollPosition > 100
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScrollPosition)
  },
  updated() {
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.updateScrollPosition)
  },
  methods: {
    updateScrollPosition() {
      this.userScrollPosition = window.scrollY
    },
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<template>
  <!-- Scroll to top -->
  <transition name="fade">
    <div v-show="isScrolled" class="
        transition
        duration-500
        transform
        hover:scale-110
        rounded-full
        cursor-pointer
        flex
        p-2
        mr-4
        bg-indigo-500
        hover:bg-indigo-600
        text-white
        items-center
        hover:shadow-sm
        border-none
        ring-none
        outline-none
      " @click="backToTop">
      <Icon name="tabler:chevron-up" class="w-6 h-6" />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
</style>
