/// <reference path="types.ts" />

type Component = (() => JSX.Element | JSX.Element[]) | JSX.Element | JSX.Element[] | MyReactNode;

interface ChildrenProps {
	children: Component;
}

interface NavItemProps {
	name: string;
	onScroll: () => void;
}

interface LayoutProps {
	renderHero: Component;
	renderContent: Component;
	// renderNews: Component;
}

interface ContentBoxProps {
	id: string;
	children: Component;
}
