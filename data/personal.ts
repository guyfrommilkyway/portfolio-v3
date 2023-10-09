// types below
import { ProjectItem } from '@/types';

export const personal: ProjectItem[] = [
	{
		name: 'React Notes',
		link: 'https://react-notes.almertampus.xyz/',
		website: 'react-notes.almertampus.xyz',
		description: 'Inspired by Google Keep Note',
		technologies: [
			'TypeScript',
			'React',
			'Redux',
			'Redux Toolkit',
			'Draft.js',
			'Chakra UI',
			'Vite',
		],
		image: '/images/react-notes.png',
	},
	{
		name: 'Portfolio V3',
		link: 'https://github.com/guyfrommilkyway/portfolio-v3/',
		website: 'github.com/guyfrommilkyway/portfolio-v3',
		description: 'Portfolio website by yours truly',
		technologies: ['TypeScript', 'React', 'Next.js', 'Context API', 'Tailwind'],
		image: '/images/portfolio-v3.png',
	},
	{
		name: 'DMS',
		link: 'https://github.com/guyfrommilkyway/dms-v1',
		website: 'github.com/guyfrommilkyway/dms-v1',
		description: 'Dormitory Management System',
		technologies: [
			'JavaScript',
			'Node.js',
			'Express.js',
			'Handlebars.js',
			'MongoDB',
			'Bootstrap',
			'Sass',
			'BEM',
		],
		image: '/images/dms-v1.png',
	},
];
