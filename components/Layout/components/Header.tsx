// packages
import React from 'react';

// components
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

const Header: React.FC = () => {
  return (
    <header className='sticky top-0 z-50 flex justify-between items-center w-full max-w-[1400px] h-[60px] mx-auto px-4 py-4 bg-[#080808] border-x border-b border-neutral-900'>
      <Logo />
    </header>
  );
};

export default Header;
