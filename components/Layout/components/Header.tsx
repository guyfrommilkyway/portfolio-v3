// packages
import React from 'react';
import dynamic from 'next/dynamic';

// components
import Logo from '@/components/Logo';
const Timer = dynamic(() => import('@/components/Timer'), { ssr: false });

const Header: React.FC = () => {
  return (
    <header className='sticky top-0 z-50 flex flex-col lg:flex-row lg:justify-between lg:items-center w-full max-w-[1400px] min-h-[60px] mx-auto px-4 py-4 bg-[#080808] border-x border-b border-neutral-900'>
      <Logo />
      <Timer />
    </header>
  );
};

export default Header;
