// packages
import React from 'react';

// types
import { NavItemProps } from '@/types';

const NavItem: React.FC<NavItemProps> = (props) => {
	const { name, onScroll } = props;

	return (
		<button className='text-sm text-neutral-300 hover:underline' onClick={onScroll}>
			{name}
		</button>
	);
};

export default NavItem;
