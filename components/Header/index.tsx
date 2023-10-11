// packages
import React from 'react';

// components
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

const Header: React.FC = () => {
	return (
		<header className='sticky top-0 z-50 flex justify-between items-center w-full max-w-[1920px] h-[80px] mx-auto px-4 py-4 md:px-16 lg:px-20 bg-neutral-900 border-x border-neutral-900'>
			<Logo />
			<Navbar />
		</header>
	);
};

export default Header;
