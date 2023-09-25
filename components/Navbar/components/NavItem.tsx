// packages below
import React from 'react';

// types
import { NavItemProps } from '@/types';

const NavItem: React.FC<NavItemProps> = (props) => {
	const { name, onScroll } = props;

	return (
		<button
			className='text-sm lg:text-base text-neutral-700 hover:text-black hover:underline'
			onClick={onScroll}
		>
			{name}
		</button>
	);
};

export default NavItem;