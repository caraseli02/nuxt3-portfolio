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
        category: 'Web Application',
        img: 'santandrea.png',
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
            img: '/santandrea.png',
          },
          {
            id: uuidv4(),
            title: 'Santandrea Top Properties',
            img: '/santandrea.png',
          },
          {
            id: uuidv4(),
            title: 'Santandrea Top Properties',
            img: '/santandrea.png',
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
        title: 'Santandrea Top Properties',
        category: 'Web Application',
        img: '/santandrea.png',
        publishDate: 'Nov 04, 2021',
        tag: 'UI / Frontend',
        clientTitle: 'About Client',
        objectivesTitle: 'Objective',
        objectivesDetails:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
        techTitle: 'Tools & Technologies',
        detailsTitle: 'Challenge',
        socialTitle: 'Share This',
        projectImages: [
          {
            id: uuidv4(),
            title: 'Phoenix Digital Agency',
            img: '/santandrea.png',
          },
          {
            id: uuidv4(),
            title: 'Phoenix Digital Agency',
            img: '/santandrea.png',
          },
          {
            id: uuidv4(),
            title: 'Phoenix Digital Agency',
            img: '/santandrea.png',
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: 'Name',
            details: 'Company Ltd',
          },
          {
            id: uuidv4(),
            title: 'Services',
            details: 'UI Design & Frontend Development',
          },
          {
            id: uuidv4(),
            title: 'Website',
            details: 'https://company.com',
          },
          {
            id: uuidv4(),
            title: 'Phone',
            details: '555 8888 888',
          },
        ],
        technologies: [
          'HTML',
          'CSS',
          'JavaScript',
          'Nuxt.js',
          'TailwindCSS',
          'AdobeXD',
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
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
        title: 'Project Management UI',
        category: 'UI/UX Design',
        img: '/santandrea.png',
        publishDate: 'Nov 04, 2021',
        tag: 'UI / Frontend',
        clientTitle: 'About Client',
        objectivesTitle: 'Objective',
        objectivesDetails:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
        techTitle: 'Tools & Technologies',
        detailsTitle: 'Challenge',
        socialTitle: 'Share This',
        projectImages: [
          {
            id: uuidv4(),
            title: 'Project Management UI',
            img: '/santandrea.png',
          },
          {
            id: uuidv4(),
            title: 'Project Management UI',
            img: '/santandrea.png',
          },
          {
            id: uuidv4(),
            title: 'Project Management UI',
            img: '/santandrea.png',
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: 'Name',
            details: 'Company Ltd',
          },
          {
            id: uuidv4(),
            title: 'Services',
            details: 'UI Design & Frontend Development',
          },
          {
            id: uuidv4(),
            title: 'Website',
            details: 'https://company.com',
          },
          {
            id: uuidv4(),
            title: 'Phone',
            details: '555 8888 888',
          },
        ],
        technologies: [
          'HTML',
          'CSS',
          'JavaScript',
          'Nuxt.js',
          'TailwindCSS',
          'AdobeXD',
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
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
        title: 'Cloud Storage Platform',
        category: 'UI/UX Design',
        img: '/santandrea.png',
        publishDate: 'Nov 04, 2021',
        tag: 'Web / Frontend',
        clientTitle: 'About Client',
        objectivesTitle: 'Objective',
        objectivesDetails:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
        techTitle: 'Tools & Technologies',
        detailsTitle: 'Challenge',
        socialTitle: 'Share This',
        projectImages: [
          {
            id: uuidv4(),
            title: 'Cloud Storage Platform',
            img: '/santandrea.png',
          },
          {
            id: uuidv4(),
            title: 'Cloud Storage Platform',
            img: '/santandrea.png',
          },
          {
            id: uuidv4(),
            title: 'Cloud Storage Platform',
            img: '/santandrea.png',
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: 'Name',
            details: 'Company Ltd',
          },
          {
            id: uuidv4(),
            title: 'Services',
            details: 'UI Design & Frontend Development',
          },
          {
            id: uuidv4(),
            title: 'Website',
            details: 'https://company.com',
          },
          {
            id: uuidv4(),
            title: 'Phone',
            details: '555 8888 888',
          },
        ],
        technologies: [
          'HTML',
          'CSS',
          'JavaScript',
          'Nuxt.js',
          'TailwindCSS',
          'AdobeXD',
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
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
        title: 'Uber Social App',
        category: 'Mobile Application',
        img: '/santandrea.png',
        publishDate: 'Nov 04, 2021',
        tag: 'UI / Mobile',
        clientTitle: 'About Client',
        objectivesTitle: 'Objective',
        objectivesDetails:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
        techTitle: 'Tools & Technologies',
        detailsTitle: 'Challenge',
        socialTitle: 'Share This',
        projectImages: [
          {
            id: uuidv4(),
            title: 'Uber Social App',
            img: '/santandrea.png',
          },
          {
            id: uuidv4(),
            title: 'Uber Social App',
            img: '/santandrea.png',
          },
          {
            id: uuidv4(),
            title: 'Uber Social App',
            img: '/santandrea.png',
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: 'Name',
            details: 'Company Ltd',
          },
          {
            id: uuidv4(),
            title: 'Services',
            details: 'UI Design & Frontend Development',
          },
          {
            id: uuidv4(),
            title: 'Website',
            details: 'https://company.com',
          },
          {
            id: uuidv4(),
            title: 'Phone',
            details: '555 8888 888',
          },
        ],
        technologies: [
          'HTML',
          'CSS',
          'JavaScript',
          'Nuxt.js',
          'TailwindCSS',
          'AdobeXD',
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
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
        id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccbb',
        title: 'Apple Design System',
        category: 'Web Application',
        img: '/santandrea.png',
        publishDate: 'Nov 04, 2021',
        tag: 'UI / Mobile',
        clientTitle: 'About Client',
        objectivesTitle: 'Objective',
        objectivesDetails:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
        techTitle: 'Tools & Technologies',
        detailsTitle: 'Challenge',
        socialTitle: 'Share This',
        projectImages: [
          {
            id: uuidv4(),
            title: 'Apple Design System',
            img: '/santandrea.png',
          },
          {
            id: uuidv4(),
            title: 'Apple Design System',
            img: '/santandrea.png',
          },
          {
            id: uuidv4(),
            title: 'Apple Design System',
            img: '/santandrea.png',
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: 'Name',
            details: 'Company Ltd',
          },
          {
            id: uuidv4(),
            title: 'Services',
            details: 'UI Design & Frontend Development',
          },
          {
            id: uuidv4(),
            title: 'Website',
            details: 'https://company.com',
          },
          {
            id: uuidv4(),
            title: 'Phone',
            details: '555 8888 888',
          },
        ],
        technologies: [
          'HTML',
          'CSS',
          'JavaScript',
          'Nuxt.js',
          'TailwindCSS',
          'AdobeXD',
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
          },
          {
            id: uuidv4(),
            details:
              'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
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
    aboutMe: [
      {
        id: uuidv4(),
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
      },
      {
        id: uuidv4(),
        bio: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
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
