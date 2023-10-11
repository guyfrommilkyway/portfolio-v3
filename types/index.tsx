// packages below
import { ReactNode } from 'react';

export interface ChildrenProps {
	children: ReactNode;
}

export interface NavItemProps {
	name: string;
	onScroll: () => void;
}

export interface PillProps {
	tech: string;
}

export interface LayoutProps {
	renderHero: () => ReactNode;
	renderContent: () => ReactNode;
	renderNews: () => ReactNode;
}

export interface HeroProps {
	headline: string;
	title: string;
	social: any;
}

// types
export interface SocialProps {
	name: string;
	link: string;
}

export interface HomeProps {
	staticData: any;
}

export interface AboutProps {
	staticData: any;
}

export interface ExperienceProps {
	staticData: any;
}

export interface ExperienceCardProps {
	duration: string;
	title: string;
	company: string;
	link: string;
	website: string;
	technologies: any;
}

export interface ProjectsProps {
	work: any;
	personal: any;
}

export interface ProjectCardProps {
	name: string;
	link: string;
	website: string;
	description: string;
	technologies: any;
}

export interface WhatsNewProps {
	staticData: any;
}

export interface RecentNewsProps {
	staticData: any;
}

export interface DataType {
	hero: any;
	biography: any;
	whatsnew: any;
	recentnews: any;
	experience: any;
	work: any;
	personal: any;
}

export interface DataStoreType {
	data: DataType | {};
	dataHandler: (param: any) => void;
}
