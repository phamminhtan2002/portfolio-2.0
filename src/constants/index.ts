import {
  aiweather,
  amazon,
  backend,
  bccahs,
  bcit,
  creator,
  css,
  docker,
  financetracker,
  git,
  html,
  javascript,
  kubernetes,
  meta,
  mobile,
  mongodb,
  nextjs,
  nodejs,
  reactjs,
  redux,
  socialmediaapp,
  tailwind,
  typescript,
  videostream,
  vnt,
  web,
} from '../assets'

const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
] as const

const jobs = [
  'Web Development',
  'Web Design',
  'Data Engineering',
  'Cloud Engineering',
  'React.js',
  'MySQL',
  'Python',
  'Docker',
  'Kubernetes',
  'Amazon Web Services',
  'CI/CD',
  'Jenkins',
  'Node.js',
  'Windows Server',
  'DNS',
  'VPN',
  'DHCP',
  'Next.js',
  'WordPress',
  'Microservices',
  'HTML',
  'CSS',
  'TailwindCSS',
  'TypeScript',
  'JavaScript',
  'Git',
  'Linux',
  'Microservices',
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Database Engineer',
    icon: mobile,
  },
  {
    title: 'Microservices Engineer',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'nextjs',
    icon: nextjs,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Kubernetes',
    icon: kubernetes,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Computer Information Technology Student',
    company_name: 'British Columbia Institute of Technology',
    icon: bcit,
    iconBg: '#383E56',
    date: 'Sep 2020 - Dec 2023',
    points: [
      'Homework Tracker App: Constructed a web application using JavaScript, Python, Flask, NPM, Node.js, and SQLite. Designed and implemented a user-friendly interface for BCIT undergrads to track their assignments and test deadlines. Successfully deployed the app on Heroku and received positive feedback from users.',
      'Microservices Architecture: Built a microservices architecture using Docker and Kubernetes for application API communication, with Jenkins CI/CD pipeline for automated deployment.',
      'Windows Server Virtual Machine: Developed and maintained a Windows Server 2022 virtual machine using VMware Workstation Pro. Set up Active Directory Domain Services, users, file servers, group policies, iSCSI, DNS, and DHCP.',
    ],
  },
  {
    title: 'WordPress Developer',
    company_name: 'VNT Trading',
    icon: vnt,
    iconBg: '#E6DEDD',
    date: 'June 2021 - Sep 2022',
    points: [
      'Constructed a full-stack e-commerce website using WordPress and WooCommerce.',
      'Implemented responsive design and ensured cross-browser compatibility.',
      'Organized and uploaded product data to the web.',
      'Implemented designs that included custom post-types & taxonomies, as well as social media integration.',
    ],
  },
  {
    title: 'Full-stack Developer',
    company_name: 'BC Centre for Aquatic Health Sciences Society',
    icon: bccahs,
    iconBg: '#383E56',
    date: 'Sep 2022 - Dec 2022',
    points: [
      'Worked as a full stack developer through BCIT’s Industry Sponsored Project.',
      'Designed and developed a statistical analysis web application using Python Flask, R, and MySQL.',
      'Deployed and established secured connections between front end application and MySQL database on Arbutus Cloud.',
      'Enabled interactive and user-friendly visualization on large-scale data sets.',
      'Tested the website prior to live deployment by performing unit testing, integration testing, and E2E testing.',
      'Followed industry best practices, including Agile methodology, DevOps, and code reviews.',
    ],
  },
]

const testimonials = [
  {
    testimonials: [
      'Completed a database engineering program taught by industry-recognized experts at Meta.',
      'Demonstrated my proficiency in different aspects of database engineering through a series of five projects that involved database normalization, stored procedures, Python applications, data modeling, and MySQL database solutions.',
    ],
    name: 'Coursera',
    date: 'May 18, 2023',
    image: meta,
  },
]

const projects = [
  {
    name: 'AI Weather App',
    description:
      'AI Weather App is a web app that chats with an ChatGPT 3.5 Turbo AI Model, forecasting about the weather using React, GraphQL, and StepZen.',
    tags: [
      {
        name: 'nextjs',
        color: 'black-text-gradient',
      },
      {
        name: 'kubernetes',
        color: 'pink-text-gradient',
      },
      {
        name: 'chatGPT',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
    ],
    image: aiweather,
    source_code_link: 'https://github.com/garenpham/AI-Weather-App',
  },
  {
    name: 'Social Media App',
    description:
      'This project is about building and deploying a social media app with the MERN stack and features like auth, pagination, and comments.',
    tags: [
      {
        name: 'mern',
        color: 'pink-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-text-gradient',
      },
      {
        name: 'expressjs',
        color: 'yellow-text-gradient',
      },
    ],
    image: socialmediaapp,
    source_code_link: 'https://github.com/garenpham/moments-app',
  },
  {
    name: 'Finance Tracker',
    description:
      'MERN stack web application that allows users to add, delete income and expenses, with an overview graph display. It is a convenient and efficient solution for managing net-income.',
    tags: [
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'pink-text-gradient',
      },
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-yellow-text-gradient',
      },
    ],
    image: financetracker,
    source_code_link: 'https://github.com/phamminhtan2002/finance-tracker',
  },
  {
    name: 'Amazon Storefront',
    description:
      'Full stack e-commerce website that replicates Amazon.ca, including user authentication, order history, and secure payment processing with debit/credit cards.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'yellow-text-gradient',
      },
      {
        name: 'tailwindcss',
        color: 'pink-text-gradient',
      },
      {
        name: 'typescript',
        color: 'orange-text-gradient',
      },
    ],
    image: amazon,
    source_code_link: 'https://github.com/phamminhtan2002/amazon-fullstack',
  },
  {
    name: 'Video Streaming System',
    description:
      'A complex microservices web application that ultilizes Kubernetes to deploy on Amazon EKS. It has Nextjs as the frontend and Express with MySQL as the backend.',
    tags: [
      {
        name: 'nextjs',
        color: 'black-text-gradient',
      },
      {
        name: 'mysql',
        color: 'green-text-gradient',
      },
      {
        name: 'docker',
        color: 'blue-text-gradient',
      },
      {
        name: 'kubernetes',
        color: 'pink-text-gradient',
      },
    ],
    image: videostream,
    source_code_link:
      'https://github.com/phamminhtan2002/Video-Streaming-System/tree/kubernetes',
  },
]

export {
  experiences,
  jobs,
  navLinks,
  projects,
  services,
  technologies,
  testimonials,
}

