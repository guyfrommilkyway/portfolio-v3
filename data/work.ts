// types below
import { ProjectItem } from '@/types';

export const work: ProjectItem[] = [
	{
		name: 'Operator Portal',
		link: 'https://operator.seaplanegroup.com',
		website: 'operator.seplanegroup.com',
		description:
			'An application designed and developed to help the company management and its partners, the operators, manage and monitor their assets such as private jets, helicopters, yachts and supercars, as well as events, bookings, transactions, coupons, etc..',
		technologies: ['JavaScript', 'React', 'Next.js', 'Chakra UI', 'Zustand'],
		image: '/images/operator.portal.png',
	},
	{
		name: 'Mile High Roller Club',
		link: 'https://mhrc.io',
		website: 'mhrc.io',
		description:
			"Mile High Roller Club is a collection of non-fungible tokens built on the ethereum network. It's the official loyalty program of Seaplane Group. It consists of five tiers: Voyager, Silver, Gold, Diamond and Platinum, with each tier offering different real-life utility values.",
		technologies: ['JavaScript', 'React', 'Next.js', 'Context API', 'Tailwind'],
		image: '/images/mhrc.png',
	},
	{
		name: 'APTI',
		link: 'https://apti.com.ph',
		website: 'apti.com.ph',
		description:
			'APTI is a business website of Accel Prime Technologies, a computer parts retailer based in the Philippines.',
		technologies: [
			'JavaScript',
			'React',
			'React Router',
			'Context API',
			'Bootstrap',
			'Sass',
			'BEM',
		],
		image: '/images/apti.png',
	},
];
