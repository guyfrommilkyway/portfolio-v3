// packages
import React from 'react';

const NavItem: React.FC<NavItemProps> = (props) => {
	const { name, onScroll } = props;

	return (
		<button
			className='text-neutral-300 hover:underline hover:text-white transition-colors ease-in-out delay-100'
			onClick={onScroll}
		>
			{name}
		</button>
	);
};

export default NavItem;
