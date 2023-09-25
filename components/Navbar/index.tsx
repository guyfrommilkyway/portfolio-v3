// packages below
import React from 'react';

// utils below
import useScroll from '@/hooks/useScroll';
import NavItem from './components/button';

// data below
import { nav } from '@/data/nav';

const Navbar: React.FC = () => {
	const { scrollHandler } = useScroll();

	return (
		<nav className='flex gap-4 lg:gap-8 justify-center lg:justify-start'>
			{nav.map((item) => {
				return (
					<NavItem key={item.class} name={item.name} onScroll={() => scrollHandler(item.class)} />
				);
			})}
		</nav>
	);
};

export default Navbar;
