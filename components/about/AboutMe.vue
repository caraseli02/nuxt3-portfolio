<script setup lang="ts">
const cards = [{ title: 'About', text: 'I\'m a highly skilled and motivated freelance developer specializing in Vue.js and Nuxt.js. With a strong focus on building robust and efficient components, I take pride in creating visually appealing and user-friendly front-end applications.' },
{
  title: 'Skills', text: `JavaScript and TypeScript for dynamic and interactive component development.
Proficiency in Vue.js 3 and Nuxt.js 3, leveraging core concepts and best practices.
Expertise in CSS, Sass, and Tailwind CSS to create visually polished styles.
Experience with Vitest and Cypress for comprehensive testing and bug-free code.
Competence in Figma and Storybook to collaborate with design teams and maintain a component library.`,
},
{ title: 'Experience', text: 'As a freelance developer, I have successfully collaborated with diverse teams to conceptualize and design reusable Vue.js components, ensuring consistent quality and adherence to coding standards. My portfolio showcases projects where I optimized existing features and implemented new functionalities to enhance user experience and application performance.' },
{ title: 'Passion', text: 'I am passionate about writing clean, well-documented code and always strive to deliver elegant and efficient solutions. My attention to detail helps me craft visually appealing interfaces that offer a seamless user journey.' },
{ title: 'Goal', text: 'I aim to continue contributing my Vue.js and Nuxt.js expertise to exciting projects, collaborating with clients to build innovative web applications that exceed expectations. As a remote developer, I thrive in a flexible environment, efficiently managing project timelines while delivering exceptional results.' },
]

const showText = ref('About')
function changeText(text: string) {
  showText.value = text
}
</script>

<template>
  <div class="flex flex-col lg:flex-row items-center sm:gap-10 min-h-[85vh] mt-[15vh]">
    <!-- About profile image -->
    <div class=" h-2/3 w-[40vw] flex items-center">
      <img src="/fotoProfile.png" class="w-[80vw] lg:w-[35vw] rounded-lg clipt-path" alt="">
    </div>

    <!-- About details -->
    <section class="flex flex-col shrink-0 overflow-scroll flex-1">
      <div v-for="item in cards" :key="item.title"
        class="cursor-pointer min-w-[320x] block lg:max-w-md p-2 lg:p-6 bg-white border-b border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        @click="changeText(item.title)">
        <h5 class=" mb-2 text.xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ item.title }}
        </h5>
        <Transition name="slide-fade">
          <p v-if="showText === item.title" class="font-normal text-xs lg:text-base text-gray-700 dark:text-gray-400">
            {{ item.text }}
          </p>
        </Transition>
      </div>
    </section>
  </div>
</template>

<style scoped>
.clipt-path {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 50%, rgba(65, 184, 131, 1) 100%);
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.01s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
  height: 0px;
  display: hidden;
}
</style>
