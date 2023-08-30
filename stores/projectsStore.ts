import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import type { Project } from '~/types'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projectsHeading: 'Projects Portfolio',
    projectsDescription: 'Some of the projects I have successfully completed',
    projects: [
      {
        id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdb',
        title: 'Real Estate Web Application',
        category: 'Front-End UI/UX',
        img: 'santandrea0.png',
        publishDate: 'Feb 01, 2023',
        tag: 'UI / Frontend',
        clientTitle: 'Santandrea Top Properties',
        objectivesTitle: 'Migrate from nuxt 2 to nuxt 3 and improve UI UX',
        objectivesDetails:
          'Update the codebase in configuration, pages, layouts, plugins and modules. Performance improvements in client-side rendering and image optimization. Accessibility (a11y), responsive design, consistent design, and user flows improvements.',
        techTitle: 'Tools & Technologies',
        detailsTitle: 'Challenge',
        socialTitle: 'Share This',
        projectImages: [
          {
            id: uuidv4(),

            title: 'Santandrea Top Properties',
            img: '/santandrea1.png',
          },
          {
            id: uuidv4(),
            title: 'Santandrea Top Properties',
            img: '/santandrea2.png',
          },
          {
            id: uuidv4(),
            title: 'Santandrea Top Properties',
            img: '/santandrea3.png',
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: 'Name',
            details: 'Santandrea Top Properties',
          },
          {
            id: uuidv4(),
            title: 'Services',
            details: 'UI Design & Frontend Development',
          },
          {
            id: uuidv4(),
            title: 'Website',
            details: 'santandreatopproperties.com',
          },
          {
            id: uuidv4(),
            title: 'Phone',
            details: '+39 02 775 5260',
          },
        ],
        technologies: [
          'HTML',
          'CSS',
          'TailwindCSS',
          'JavaScript',
          'Nuxt.js',
          'Pinia',
          'Figma',
          'Vitest',
          'Cypress',
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              'Embark on a transformative journey as we delve into the realm of modern web development with a triumphant migration from Nuxt 2 to Nuxt 3. In this captivating narrative, we uncover the secrets behind a seamless migration process that not only retains the essence of your existing web application but also unleashes the power of new possibilities offered by Nuxt 3.',
          },
          {
            id: uuidv4(),
            details:
              'As the migration journey unfolds, witness firsthand the thoughtful code refactorings, intelligent component updates, and harmonious integration of the latest tools and features that Nuxt 3 offers. The narrative weaves through the challenges encountered and conquered – from adapting to the new rendering engine, harnessing the power of Composition API, to optimizing performance through the enhanced build process.',
          },
          {
            id: uuidv4(),
            details:
              'But this isn\'t just a tale of technical feats. It\'s a testament to collaboration and adaptability. The development team collaborates seamlessly, drawing from their wealth of experience and the robust Nuxt 3 documentation. The developers creative prowess breathes life into revamped UI components, resulting in an interface that’s both aesthetically pleasing and functionally intuitive.',
          },
        ],
        socialSharings: [
          {
            id: uuidv4(),
            name: 'Twitter',
            icon: 'twitter',
            url: 'https://twitter.com/realstoman',
          },
          {
            id: uuidv4(),
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://linkedin.com/in/realstoman',
          },
          {
            id: uuidv4(),
            name: 'Facebook',
            icon: 'facebook',
            url: 'https://facebook.com',
          },
          {
            id: uuidv4(),
            name: 'Instagram',
            icon: 'instagram',
            url: 'https://instagram.com',
          },
        ],
      },
      {
        id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdc',
        title: 'Components Library',
        category: 'Front-End UI/UX',
        img: '/componentLib0.png',
        publishDate: 'Jun 01, 2022',
        tag: 'UI / Frontend Components',
        clientTitle: 'Innovation Strategies',
        objectivesTitle: 'Component library for Microfrontends',
        objectivesDetails:
          'Establish consistent design patterns, coding standards, and UI/UX elements across different microfrontends.',
        techTitle: 'Tools & Technologies',
        detailsTitle: 'Challenge',
        socialTitle: 'Share This',
        projectImages: [
          {
            id: uuidv4(),
            title: 'Storybook Components Library',
            img: '/componentLib1.png',
          },
          {
            id: uuidv4(),
            title: 'Storybook Components Library',
            img: '/componentLib2.png',
          },
          {
            id: uuidv4(),
            title: 'Storybook Components Library',
            img: '/componentLib3.png',
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: 'Name',
            details: 'Innovation Strategies',
          },
          {
            id: uuidv4(),
            title: 'Services',
            details: 'UI & Frontend Development',
          },
          {
            id: uuidv4(),
            title: 'Website',
            details: 'https://www.innovation.es/',
          },
          {
            id: uuidv4(),
            title: 'Phone',
            details: '(+34) 971 770 877',
          },
        ],
        technologies: [
          'HTML',
          'CSS',
          'Scss',
          'JavaScript',
          'TypeScript',
          'Vue.js',
          'PrimeVue',
          'Azure DevOps',
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              'Ensuring that different microfrontends can smoothly integrate and upgrade to newer versions of the component library without causing conflicts or breaking changes can be challenging.',
          },
          {
            id: uuidv4(),
            details:
              'Ensuring that components work seamlessly across various browsers, devices, and screen sizes requires thorough testing. Setting up automated testing processes and maintaining a high level of quality can be resource-intensive.',
          },
          {
            id: uuidv4(),
            details:
              'Creating comprehensive and up-to-date documentation that explains how to use each component effectively is crucial. However, maintaining this documentation as the library evolves can become a challenge.',
          },
          {
            id: uuidv4(),
            details:
              'Components must be optimized for speed and minimal resource consumption, especially in scenarios where multiple microfrontends are loaded simultaneously.',
          },
        ],
        socialSharings: [
          {
            id: uuidv4(),
            name: 'Twitter',
            icon: 'twitter',
            url: 'https://twitter.com/realstoman',
          },
          {
            id: uuidv4(),
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://linkedin.com/in/realstoman',
          },
          {
            id: uuidv4(),
            name: 'Facebook',
            icon: 'facebook',
            url: 'https://facebook.com',
          },
          {
            id: uuidv4(),
            name: 'Instagram',
            icon: 'instagram',
            url: 'https://instagram.com',
          },
        ],
      },
      {
        id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdy',
        title: 'Vue Micro Frontends',
        category: 'Front-End',
        img: '/microfront0.png',
        publishDate: 'Nov 04, 2021',
        tag: 'UI / Frontend',
        clientTitle: 'Innovation Strategies',
        objectivesTitle: 'Microfrontends Development',
        objectivesDetails:
          'Break down monolithic legacy applications into independently developed, scalable, and reusable components, enabling faster iterations, team autonomy, and improved user experiences.',
        techTitle: 'Tools & Technologies',
        detailsTitle: 'Challenge',
        socialTitle: 'Share This',
        projectImages: [
          {
            id: uuidv4(),
            title: 'Project Management UI',
            img: '/microfront1.png',
          },
          {
            id: uuidv4(),
            title: 'Project Management UI',
            img: '/microfront2.png',
          },
          {
            id: uuidv4(),
            title: 'Project Management UI',
            img: '/microfront3.png',
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: 'Name',
            details: 'Innovation Strategies',
          },
          {
            id: uuidv4(),
            title: 'Services',
            details: 'UI & Frontend Development',
          },
          {
            id: uuidv4(),
            title: 'Website',
            details: 'https://www.innovation.es/',
          },
          {
            id: uuidv4(),
            title: 'Phone',
            details: '(+34) 971 770 877',
          },
        ],
        technologies: [
          'HTML',
          'CSS',
          'Scss',
          'JavaScript',
          'TypeScript',
          'Vue.js',
          'Azure DevOps',
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              'Coordinating version updates across various microfrontends can vas complex, as different components rely on different versions of shared libraries or APIs. Ensuring backward and forward compatibility without causing disruptions requires careful planning and communication.',
          },
          {
            id: uuidv4(),
            details:
              'Integrating multiple microfrontends into a seamless application experience requires robust orchestration, routing, and cross-communication mechanisms. Dealing with state management, navigation, and data sharing among different components was difficult.',
          },
          {
            id: uuidv4(),
            details:
              'Managing the build, testing, and deployment of numerous microfrontends can be intricate. Coordinating these processes while ensuring minimal downtime and smooth transitions necessitates a robust DevOps strategy.',
          },
          {
            id: uuidv4(),
            details:
              'Loading multiple microfrontends can impact the overall performance and user experience. Implementing strategies like lazy loading, code splitting, and optimizing network requests become essential to maintain acceptable performance levels. The Vue 3 framework provides a very good solution for this problem.',
          },
        ],
        socialSharings: [
          {
            id: uuidv4(),
            name: 'Twitter',
            icon: 'twitter',
            url: 'https://twitter.com/realstoman',
          },
          {
            id: uuidv4(),
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://linkedin.com/in/realstoman',
          },
          {
            id: uuidv4(),
            name: 'Facebook',
            icon: 'facebook',
            url: 'https://facebook.com',
          },
          {
            id: uuidv4(),
            name: 'Instagram',
            icon: 'instagram',
            url: 'https://instagram.com',
          },
        ],
      },
      {
        id: '260d1271-f1f2-4bc9-a5eb-05a89c8ccc99',
        title: 'Skipso Startup Platform',
        category: 'Front-End',
        img: '/skipso0.png',
        publishDate: 'Oct 01, 2021',
        tag: 'Web / Frontend',
        clientTitle: 'Skipso is an innovation management platform',
        objectivesTitle: 'Objective',
        objectivesDetails:
          'As a frontend Vue.js developer I worked on innovative feature development, creating responsive user-centric designs, and collaborating with cross-functional teams to build efficient and performant web interfaces. I was also mantaing and improving components library.',
        techTitle: 'Tools & Technologies',
        detailsTitle: 'Challenge',
        socialTitle: 'Share This',
        projectImages: [
          {
            id: uuidv4(),
            title: 'Cloud Storage Platform',
            img: '/skipso1.png',
          },
          {
            id: uuidv4(),
            title: 'Cloud Storage Platform',
            img: '/skipso2.png',
          },
          {
            id: uuidv4(),
            title: 'Cloud Storage Platform',
            img: '/skipso3.png',
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: 'Name',
            details: 'Skipso',
          },
          {
            id: uuidv4(),
            title: 'Services',
            details: 'Frontend Development',
          },
          {
            id: uuidv4(),
            title: 'Website',
            details: 'http://www.skipso.com',
          },
          {
            id: uuidv4(),
            title: 'Phone',
            details: '',
          },
        ],
        technologies: [
          'HTML',
          'CSS',
          'Scss',
          'JavaScript',
          'Vue.js',
          'AdobeXD',
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              'Striking the right balance between implementing innovative user interface designs and ensuring the functionality aligns with the startups business goals can be challenging, especially when design ideas might impact development timelines or vice versa.',
          },
          {
            id: uuidv4(),
            details:
              'Effective collaboration with designers, backend developers, product managers, and other team members is crucial. Overcoming communication barriers, aligning expectations, and integrating frontend components seamlessly with backend systems can be complex.',
          },
          {
            id: uuidv4(),
            details:
              'Ensuring that your Vue.js application works consistently across different browsers and devices can be time-consuming, especially when considering the varying capabilities and limitations of each platform.',
          },
          {
            id: uuidv4(),
            details:
              'Ensuring a smooth user experience while rapidly iterating and adding new features is a delicate balance, requiring careful consideration of how changes impact usability.',
          },
        ],
        socialSharings: [
          {
            id: uuidv4(),
            name: 'Twitter',
            icon: 'twitter',
            url: 'https://twitter.com/realstoman',
          },
          {
            id: uuidv4(),
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://linkedin.com/in/realstoman',
          },
          {
            id: uuidv4(),
            name: 'Facebook',
            icon: 'facebook',
            url: 'https://facebook.com',
          },
          {
            id: uuidv4(),
            name: 'Instagram',
            icon: 'instagram',
            url: 'https://instagram.com',
          },
        ],
      },
      {
        id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdm',
        title: 'Apimosa Attendance App',
        category: 'Front-End UI/UX',
        img: '/apimosa.png',
        publishDate: 'Nov 04, 2021',
        tag: 'UI / Mobile',
        clientTitle: 'Painting company from Sevilla',
        objectivesTitle: 'Objective',
        objectivesDetails:
          'Provide a user-friendly digital solution for tracking and managing employee or student attendance efficiently.',
        techTitle: 'Tools & Technologies',
        detailsTitle: 'Challenge',
        socialTitle: 'Share This',
        projectImages: [
          {
            id: uuidv4(),
            title: 'Uber Social App',
            img: '/apimosa1.png',
          },
          {
            id: uuidv4(),
            title: 'Uber Social App',
            img: '/apimosa2.png',
          },
          {
            id: uuidv4(),
            title: 'Uber Social App',
            img: '/apimosa3.png',
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: 'Name',
            details: 'Apimosa',
          },
          {
            id: uuidv4(),
            title: 'Services',
            details: 'UI/UX Design & Frontend Development',
          },
          {
            id: uuidv4(),
            title: 'Website',
            details: 'https://www.apimosa.es/',
          },
          {
            id: uuidv4(),
            title: 'Phone',
            details: '+34 674227938',
          },
        ],
        technologies: [
          'HTML',
          'CSS',
          'JavaScript',
          'Vuej.js',
          'TailwindCSS',
          'AdobeXD',
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              'Maintaining accurate and up-to-date attendance records in real-time is crucial. Ensuring that attendance information is reliably captured, recorded, and reflected instantly can be complex, especially during peak usage times. Firebase provides a great solution for this problem.',
          },
          {
            id: uuidv4(),
            details:
              'Designing the app to function seamlessly across various devices (smartphones, tablets, desktops) and different operating systems can be challenging. Ensuring a consistent user experience across these platforms is important. One of the problems we faced was PWA support on IOS.',
          },
          {
            id: uuidv4(),
            details:
              'Designing an intuitive and user-friendly interface that encourages user adoption can be complex. Balancing simplicity with necessary features while catering to various user preferences requires thoughtful design and testing.',
          },
          {
            id: uuidv4(),
            details:
              'Implementing secure user authentication and authorization mechanisms to ensure that only authorized individuals can mark attendance or access attendance records was a critical challenge. However, firebase auth provides a great solution for this problem.',
          },
        ],
        socialSharings: [
          {
            id: uuidv4(),
            name: 'Twitter',
            icon: 'twitter',
            url: 'https://twitter.com/realstoman',
          },
          {
            id: uuidv4(),
            name: 'LinkedIn',
            icon: 'linkedin',
            url: 'https://linkedin.com/in/realstoman',
          },
          {
            id: uuidv4(),
            name: 'Facebook',
            icon: 'facebook',
            url: 'https://facebook.com',
          },
          {
            id: uuidv4(),
            name: 'Instagram',
            icon: 'instagram',
            url: 'https://instagram.com',
          },
        ],
      },
    ],
    clientsHeading: 'Some of the brands I worked with',
    clients: [
      {
        id: uuidv4(),
        title: 'Amazon',
        img: '../brands/amazon_gray.png',
      },
      {
        id: uuidv4(),
        title: 'Sony',
        img: '../brands/sony_gray.png',
      },
      {
        id: uuidv4(),
        title: 'Adidas',
        img: '../brands/adidas_gray.png',
      },
      {
        id: uuidv4(),
        title: 'FILA',
        img: '../brands/fila_gray.png',
      },
      {
        id: uuidv4(),
        title: 'NB',
        img: '../brands/nb_gray.png',
      },
      {
        id: uuidv4(),
        title: 'SAMSUNG',
        img: '../brands/samsung_gray.png',
      },
      {
        id: uuidv4(),
        title: 'CANON',
        img: '../brands/canon_gray.png',
      },
      {
        id: uuidv4(),
        title: 'PUMA',
        img: '../brands/puma_gray.png',
      },
    ],
    copyrightDate: new Date().getFullYear(),
    socialProfiles: [
      {
        id: uuidv4(),
        name: 'GitHub',
        icon: 'github',
        url: 'https://github.com/realstoman',
      },
      {
        id: uuidv4(),
        name: 'Twitter',
        icon: 'twitter',
        url: 'https://twitter.com/realstoman',
      },
      {
        id: uuidv4(),
        name: 'Linkedin',
        icon: 'linkedin',
        url: 'https://linkedin.com/in/realstoman',
      },
      {
        id: uuidv4(),
        name: 'Youtube',
        icon: 'youtube',
        url: 'https://youtube.com/c/realstoman',
      },
    ],
    categories: [
      {
        id: uuidv4(),
        value: 'web',
        name: 'Web Application',
      },
      {
        id: uuidv4(),
        value: 'mobile',
        name: 'Mobile Applicaiton',
      },
      {
        id: uuidv4(),
        value: 'ui-ux',
        name: 'UI/UX Design',
      },
      {
        id: uuidv4(),
        value: 'branding',
        name: 'Branding & Animations',
      },
    ],
  }),

  // Add your getters, mutations, and actions here
  getters: {
    getProjectById: (state: any) => (id: string) => {
      return state.projects.find((project: Project) => project.id === id)
    },
  },
})
