// packages
import React from 'react';
import Link from 'next/link';

// assets
import LogoSVG from '@/assets/svg/logo.svg';

const Logo: React.FC = () => {
  return (
    <Link href='/' className='flex items-center gap-4'>
      <span className='text-neutral-300 hover:text-white hover:underline transition-colors ease-in-out delay-100 select-none'>
        almertampus.xyz
      </span>
    </Link>
  );
};

export default Logo;
