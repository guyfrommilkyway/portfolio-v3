// packages below
import { ReactNode } from 'react';

export interface ChildrenProps {
	children: ReactNode;
}

export interface NavItemProps {
	name: string;
	onScroll: () => void;
}

export interface CardProps {
	duration: string;
	title: string;
	company: string;
	link: string;
	website: string;
	description: string;
	technologies: string[];
}

export interface PillProps {
	tech: string;
}

export interface WorkCardProps {
	name: string;
	link: string;
	website: string;
	description: string;
	technologies: string[];
	image: string;
}
export interface ExperienceItem {
	duration: string;
	title: string;
	company: string;
	link: string;
	website: string;
	description: string;
	technologies: string[];
}

export interface ExperienceProps {
	data: ExperienceItem[];
}

export interface ProjectItem {
	name: string;
	link: string;
	website: string;
	description: string;
	technologies: string[];
	image: string;
}

export interface ProjectsProps {
	data: ProjectItem[];
	data2: ProjectItem[];
}

export interface Hero {
	headline: string;
	paragraphs: string[];
	technologies: string[];
}

export interface AboutProps {
	data: Hero;
}
