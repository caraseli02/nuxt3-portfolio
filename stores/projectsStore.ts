import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projectsHeading: 'Projects Portfolio',
    projectsDescription: 'Some of the projects I have successfully completed',
    projects: [
      {
        id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdb',
        title: 'Google Health Platform',
        category: 'Web Application',
        img: 'https://picsum.photos/336',
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
            title: 'Uber Project Management UI',
            img: 'https://picsum.photos/336',
          },
          {
            id: uuidv4(),
            title: 'Uber Project Management UI',
            img: 'https://picsum.photos/336',
          },
          {
            id: uuidv4(),
            title: 'Uber Project Management UI',
            img: 'https://picsum.photos/336',
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
        id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdc',
        title: 'Phoenix Digital Agency',
        category: 'Mobile Application',
        img: 'https://picsum.photos/336',
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
            img: '.https://picsum.photos/336',
          },
          {
            id: uuidv4(),
            title: 'Phoenix Digital Agency',
            img: 'https://picsum.photos/336',
          },
          {
            id: uuidv4(),
            title: 'Phoenix Digital Agency',
            img: '../https://picsum.photos/336',
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
        img: 'https://picsum.photos/336',
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
            img: '.https://picsum.photos/336',
          },
          {
            id: uuidv4(),
            title: 'Project Management UI',
            img: 'https://picsum.photos/336',
          },
          {
            id: uuidv4(),
            title: 'Project Management UI',
            img: '../https://picsum.photos/336',
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
        img: 'https://picsum.photos/336',
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
            img: 'https://picsum.photos/336',
          },
          {
            id: uuidv4(),
            title: 'Cloud Storage Platform',
            img: 'https://picsum.photos/336',
          },
          {
            id: uuidv4(),
            title: 'Cloud Storage Platform',
            img: '../https://picsum.photos/336',
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
        img: 'https://picsum.photos/336',
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
            img: 'https://picsum.photos/336',
          },
          {
            id: uuidv4(),
            title: 'Uber Social App',
            img: 'https://picsum.photos/336',
          },
          {
            id: uuidv4(),
            title: 'Uber Social App',
            img: '../https://picsum.photos/336',
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
        img: 'https://picsum.photos/336',
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
            img: 'https://picsum.photos/336',
          },
          {
            id: uuidv4(),
            title: 'Apple Design System',
            img: 'https://picsum.photos/336',
          },
          {
            id: uuidv4(),
            title: 'Apple Design System',
            img: '../https://picsum.photos/336',
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
})