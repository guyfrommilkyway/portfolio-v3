// types below
import { ExperienceItem } from '@/types/index';

export const experience: ExperienceItem[] = [
	{
		duration: 'Nov 2022 - Jun 2023',
		title: 'Front-End Web Developer',
		company: 'Seaplane Group (Seaplane Hong Kong Limited)',
		link: 'https://seaplanegroup.com',
		website: 'seaplanegroup.com',
		description: [
			'Took ownership of developing user-facing features using React, Next.js, Zustand, Chakra UI and Tailwind for two (2) projects',
			'Refactored 90% of the UI components and functionalities to adhere industry practices, design patterns and clean coding principles',
			'Performed a 100% restructuring of files and folders for better organization and ease-of-maintenance',
			'Implemented React optimization techniques such as memoization, preventing unnecessary re-rendering and code-splitting with dynamic import that resulted in more than 40% performance increase',
			'Integrated data and API services from Node.js, Express.js and MongoDB that includes eleven (11) modules such as assets, ride-sharing, bookings, coupons, newsletters, etc.',
			' Worked with business development team and co-developers to diagnose and fix bugs and performance issues',
		],
		technologies: ['JavaScript', 'React', 'Next.js', 'Zustand', 'Chakra UI', 'Tailwind'],
	},
	{
		duration: 'Jan 2022 - Jun 2022',
		title: 'Front-End Web Developer',
		company: 'Highly Succeed Inc.',
		link: 'https://highlysucceed.com',
		website: 'highlysucceed.com',
		description: [
			'Developed and contributed to a total of eight (8) web applications for private and government clients',
			'Initiated the coding standard for React development and creation of starter kit resulting in a 30% improvement in project launch efficiency',
			'Analyzed current functionalities with regards to their performance and user experience, and recommended necessary enhancements',
			'Applied organizational abilities to assist Project Managers and the Scrum Master in tasks coordination, ticket documentation, and time estimation within Jira platform',
			'Coordinated closely with UI/UX designer to ensure balance of aesthetics and technical feasibility which reduce more than 50% delay in development and output delivery',
			'Coordinated with Project Managers, QA analysts and co-developers to fix bugs and performance issues',
		],
		technologies: [
			'JavaScript',
			'React',
			'React Router',
			'Context API',
			'Bootstrap',
			'Sass',
			'BEM',
		],
	},
];
