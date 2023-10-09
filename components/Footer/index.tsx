// packages
import React from 'react';

// components
import Logo from '@/components/Logo';
import Navbar from '@/components/Navbar';
import Info from './components/Info';

const Footer: React.FC = () => {
	return (
		<footer className='static lg:fixed lg:bottom-0 lg:left-[50%] flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center gap-4 w-full max-w-[1920px] min-h-[75px] mx-auto py-4 lg:px-20 bg-neutral-900 border-x border-neutral-900 lg:translate-x-[-50%]'>
			<Logo />
			<Navbar />
			<Info />
		</footer>
	);
};

export default Footer;
