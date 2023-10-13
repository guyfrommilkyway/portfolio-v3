// packages
import React from 'react';

// utils
import useScroll from '@/hooks/useScroll';
import NavItem from './components/NavItem';

// data
const nav = [
	{ name: 'About', id: '#about' },
	{ name: 'Experience', id: '#experience' },
	{ name: 'Project', id: '#project' },
];

const Navbar: React.FC = () => {
	const { scrollHandler } = useScroll();

	return (
		<nav className='flex flex-col lg:flex-row justify-start items-start gap-2 lg:gap-4 mb-8 lg:mb-0'>
			{nav.map((item) => {
				return <NavItem key={item.id} name={item.name} onScroll={() => scrollHandler(item.id)} />;
			})}
		</nav>
	);
};

export default Navbar;
