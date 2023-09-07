import type { Config } from 'tailwindcss'
const FormKitVariants = require('@formkit/themes/tailwindcss')

export default <Partial<Config>>{
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './assets/*.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#F7F8FC',
        'secondary-light': '#FFFFFF',
        'ternary-light': '#f6f7f8',

        'primary-dark': '#1A1A1A',
        'secondary-dark': '#102D44',
        'ternary-dark': '#1E3851',

        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#4ade80',
        'nav': '#3b82f6',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        "fade-out-down": {
          from: { transform: 'translateY(0)', opacity: "1" },
          to: { transform: 'translateY(40%), opacity: "0"' },
        },
        "make-it-bigger": {
          "0%": {
            transform: 'translateY(0%)'
          },
          "80%": {
            transform: 'translateY(-30%)'
          },
          "90%": {
            transform: 'translateY(-10%) scale(1.75)'
          },
          "100%": {
            transform: 'translateY(0) scale(2)'
          },
        }
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
        "fade-out-down": "fade-out-down liniar forwards",
        "make-it-bigger": "make-it-bigger liniar forwards"
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  content: [
    ...
    './tailwind-theme.js',
  ],
  plugins: [FormKitVariants],
}
