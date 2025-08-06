import Link from 'next/link';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <Link
      className='text-white font-semibold tracking-widest cursor-pointer transition duration-200 ease-in-out hover:underline'
      href='/'
    >
      ALMER
    </Link>
  );
};

export default Logo;
