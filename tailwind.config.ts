import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        "primary-dark": "#1A1A1A",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",

        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#4ade80',
        'nav': '#3b82f6',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
}
