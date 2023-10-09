// packages
import React from 'react';

// assets
import LogoSVG from '@/assets/svg/logo.svg';
import Link from 'next/link';

const Logo: React.FC = () => {
	return (
		<Link href='/' className='flex items-center gap-2'>
			<LogoSVG width='42px' />
			<span className='text-white hover:underline'>AFT Studio</span>
		</Link>
	);
};

export default Logo;
