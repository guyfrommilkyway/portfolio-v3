// packages
import React from 'react';

// components
import Info from './components/Info';

const Footer: React.FC = () => {
	return (
		<footer className='flex flex-col justify-center items-center gap-8 lg:gap-4 w-full min-h-[75px] py-8'>
			<Info />
		</footer>
	);
};

export default Footer;
