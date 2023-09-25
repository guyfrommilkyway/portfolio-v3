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
