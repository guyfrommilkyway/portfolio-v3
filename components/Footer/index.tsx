// packages below
import React from 'react';

// components below
import Navbar from '@/components/Navbar';
import Info from './components/Info';

const Footer: React.FC = () => {
	return (
		<div className='lg:fixed lg:bottom-0 lg:left-[50%] hidden lg:flex flex-col justify-center lg:flex-row lg:justify-between lg:items-center gap-4 w-full max-w-[1920px] min-h-[75px] mx-auto py-4 lg:px-20 bg-neutral-200 lg:translate-x-[-50%]'>
			<Navbar />
			<Info />
		</div>
	);
};

export default Footer;
