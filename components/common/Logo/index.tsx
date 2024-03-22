// packages
import React from 'react';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <Link
      className='text-neutral-300 hover:text-white hover:underline transition-colors ease-in-out delay-100 select-none'
      href='/'
    >
      almertampus.xyz
    </Link>
  );
};

export default Logo;
