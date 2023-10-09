// packages
import React from 'react';

// assets
import LogoSVG from '@/assets/svg/logo.svg';
import Link from 'next/link';

const Logo: React.FC = () => {
	return (
		<Link href='/' className='flex items-center gap-4'>
			<LogoSVG width='42px' />
			<span className='hidden lg:inline text-sm text-white hover:underline'>AFT Studio</span>
		</Link>
	);
};

export default Logo;
