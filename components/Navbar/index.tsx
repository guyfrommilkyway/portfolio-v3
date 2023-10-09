// packages
import React from 'react';

// utils
import useScroll from '@/hooks/useScroll';
import NavItem from './components/NavItem';

// data
import { nav } from '@/data/nav';

const Navbar: React.FC = () => {
	const { scrollHandler } = useScroll();

	return (
		<nav className='flex gap-4 justify-center lg:justify-start'>
			{nav.map((item) => {
				return <NavItem key={item.id} name={item.name} onScroll={() => scrollHandler(item.id)} />;
			})}
		</nav>
	);
};

export default Navbar;
