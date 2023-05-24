import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	nextjs,
	docker,
	bccahs,
	vnt,
	scem,
	kubernetes,
	bcit,
	meta,
	financetracker,
	amazon,
	videostream,
} from '../assets';

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
		id: 'contact',
		title: 'Contact',
	},
];

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
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'React.js Developer',
		icon: mobile,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Microservices Engineer',
		icon: creator,
	},
];

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
];

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
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Update products information and images.',
		],
	},
	{
		title: 'Industry Sponsored Student Project',
		company_name: 'BC Centre for Aquatic Health Sciences Society',
		icon: bccahs,
		iconBg: '#383E56',
		date: 'Sep 2022 - Dec 2022',
		points: [
			'Developing and maintaining web applications using Python Flask, R, and MySQL.',
			'Enabled interactive and user-friendly visualizaion on large-scale data sets.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'Website Developer',
		company_name: 'Smart Construction Equipment Management Inc.',
		icon: scem,
		iconBg: '#fff',
		date: 'Feb 2023 - Present',
		points: [
			'Designed and developed a company website that supports multiple languages and adapts to different screen sizes and devices.',
		],
	},
];

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
];

const projects = [
	{
		name: 'Finance Tracker',
		description:
			'MERN stack web application that allows users to add, delete income and expenses, with an overal graph for a convenient and efficient solution for managing net-income.',
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
			'Full stack e-commerce website that replicated Amazon.ca, including user authentication, order history, and secure payment processing with debit/credit cards.',
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
];

export {
	navLinks,
	jobs,
	services,
	technologies,
	experiences,
	testimonials,
	projects,
};
