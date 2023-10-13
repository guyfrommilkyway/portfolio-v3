// packages
import React from 'react';
import Link from 'next/link';

// assets
import LogoSVG from '@/assets/svg/logo.svg';

const Logo: React.FC = () => {
	return (
		<Link href='/' className='flex items-center gap-3'>
			<LogoSVG width={28} height={28} />
		</Link>
	);
};

export default Logo;
