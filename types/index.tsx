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
	headline: string;
	subheadline: string;
	paragraphs: any;
}

export interface ExperienceProps {
	data: any;
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
	data: any;
}

export interface RecentNewsProps {
	data: any;
}

export interface DataType {
	hero: HeroProps;
	biography: AboutProps;
	whatsnew: WhatsNewProps;
	recentnews: RecentNewsProps;
	experience: ExperienceProps;
	work: any;
	personal: any;
}

export interface DataStoreType {
	data: DataType | {};
	setData: (param: any) => void;
}
