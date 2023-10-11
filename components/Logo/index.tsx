// packages
import React from 'react';

// assets
import LogoSVG from '@/assets/svg/logo-black.svg';
import Link from 'next/link';

const Logo: React.FC = () => {
	return (
		<Link href='/' className='flex items-center gap-4'>
			<LogoSVG className='animate-pulse' width={42} height={42} />
			<span className='text-lg text-white'>aft studio</span>
		</Link>
	);
};

export default Logo;
