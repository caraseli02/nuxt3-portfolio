<script setup lang="ts">
const items = [
  {
    icon: 'logos:vue',
    text: 'VueJs',
  },
  {
    icon: 'logos:vueuse',
    text: 'VueUse',
  },
  {
    icon: 'logos:pinia',
    text: 'Pinia',
  },
  {
    icon: 'logos:vitejs',
    text: 'Vitejs',
  },
  {
    icon: 'logos:vitest',
    text: 'Vitest',
  },
  {
    icon: 'logos:cypress-icon',
    text: 'Cypress',
  },
  {
    icon: 'logos:tailwindcss-icon',
    text: 'TailwindCSS',
  },
  {
    icon: 'logos:firebase',
    text: 'TailwindCSS',
  },
  {
    icon: 'logos:figma',
    text: 'Figma',
  },
]
</script>

<template>
  <article class="wrapper">
    <div class="marquee">
      <div class="marquee__group">
        <Icon v-for="item in items" :key="item.icon" :name="item.icon" class="w-16 h-16" />
      </div>

      <div aria-hidden="true" class="marquee__group">
        <Icon v-for="item in items" :key="item.icon" :name="item.icon" class="w-16 h-16" />
      </div>
    </div>
  </article>
</template>

<style scoped>
*,
::before,
::after {
  --color-bg-accent: #transparent;
  --size: clamp(10rem, 1rem + 40vmin, 30rem);
  --gap: calc(var(--size) / 14);
  --duration: 60s;
  --scroll-start: 0;
  --scroll-end: calc(-100% - var(--gap));
}

.marquee {
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
  mask-image: linear-gradient(var(--mask-direction, to right),
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 20%,
      hsl(0 0% 0% / 1) 80%,
      hsl(0 0% 0% / 0));
}

.marquee__group {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: var(--gap);
  min-width: 100%;
  animation: scroll-x var(--duration) linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .marquee__group {
    animation-play-state: paused;
  }
}

@keyframes scroll-x {
  from {
    transform: translateX(var(--scroll-start));
  }

  to {
    transform: translateX(var(--scroll-end));
  }
}

@keyframes scroll-y {
  from {
    transform: translateY(var(--scroll-start));
  }

  to {
    transform: translateY(var(--scroll-end));
  }
}

/* Element styles */
.marquee svg {
  display: grid;
  place-items: center;
  width: var(--size);
  height: clamp(5rem, 1rem + 15vmin, 25rem);
  ;
  aspect-ratio: 16/9;
  padding: calc(var(--size) / 10);
  border-radius: 0.5rem;
}

/* Parent wrapper */
.wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  margin: auto;
  max-width: 100vw;
}
</style>
