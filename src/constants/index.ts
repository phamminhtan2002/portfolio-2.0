import {
    amazon,
    backend,
    bccahs,
    creator,
    css,
    docker,
    eyephotosystems,
    financetracker,
    git,
    html,
    kubernetes,
    meta,
    mobile,
    mongodb,
    mysql,
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
        name: 'TypeScript',
        icon: typescript,
    },
    {
        name: 'React JS',
        icon: reactjs,
    },
    {
        name: 'MySQL',
        icon: mysql,
    },
    {
        name: 'nextjs',
        icon: nextjs,
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
        title: 'Full-stack Developer',
        company_name:
            'Eye Photo Systems | Industry Sponsored Student Projects at BCIT',
        company_link: 'https://www.linkedin.com/company/eye-photo-systems/',
        icon: eyephotosystems,
        iconBg: '#383E56',
        iconSize: 'w-[80%] h-[80%]',
        date: 'September - December 2023',
        points: [
            'Developed a comprehensive full-stack solution for ophthalmologists to manage patient eye data, utilizing React.js with TypeScript for the front-end and Python Flask for the back-end.',
            'Optimized offline data processing and server integration for client back-end services by leveraging Docker and Apache Kafka.',
            'Implemented dark and light mode themes using TailwindCSS to enhance user experience.',
        ],
    },
    {
        title: 'Full-stack Developer',
        company_name:
            'BC Centre for Aquatic Health Sciences Society | Industry Sponsored Student Projects at BCIT',
        company_link: 'https://www.cahs-bc.ca/',
        icon: bccahs,
        iconBg: '#383E56',
        iconSize: 'w-[64%] h-[64%]',
        date: 'Sep 2022 - Dec 2022',
        points: [
            'Conducted data-remapping on a Python Flask application with MySQL server to fix crashes during data import.',
            'Utilized R to analyze and visualize large-scale data sets for specific species, ensuring interactive and user-friendly visualizations.',
            'Standardized naming conventions across the MySQL database for consistency.',
        ],
    },
    {
        title: 'WordPress Developer',
        company_name: 'VNT Trading',
        company_link: 'https://vnttrading.com/',
        icon: vnt,
        iconBg: '#E6DEDD',
        iconSize: 'w-[80%] h-[80%]',
        date: 'June 2021 - June 2022',
        points: [
            'Constructed a full-stack e-commerce website using WordPress and WooCommerce.',
            'Managed product listings by creating categories, attributes, and variations, optimizing for SEO and user engagement.',
            'Customized themes to create a unique and responsive storefront, ensuring cross-platform compatibility.',
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
        source_code_link: 'https://github.com/tanmpham/moments-app',
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
        source_code_link: 'https://github.com/tanmpham/finance-tracker',
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
        source_code_link: 'https://github.com/tanmpham/amazon-fullstack',
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
            'https://github.com/tanmpham/Video-Streaming-System/tree/kubernetes',
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
