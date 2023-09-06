// formkit.config.js
import { generateClasses } from '@formkit/themes'
import myTailwindTheme from './assets/tailwind-theme.js'

export default {
    config: {
      classes: generateClasses(myTailwindTheme),
    },
  }
