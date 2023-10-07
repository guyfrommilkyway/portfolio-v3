// packages below
import React from 'react';

// components below
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

const Header: React.FC = () => {
	return (
		<div className='fixed top-0 z-50 flex justify-between items-center lg:hidden w-full max-w-[1920px] min-h-[50px] mx-auto px-4 py-4 md:px-16 lg:px-20 bg-neutral-900 border-x border-neutral-900'>
			<Logo />
			<Navbar />
		</div>
	);
};

export default Header;
