// packages
import React from 'react';

// components
import Logo from '@/components/common/Logo';

const Header: React.FC = () => {
  return (
    <header className='sticky top-0 z-50 flex justify-between items-center w-full max-w-[1680px] min-h-[60px] mx-auto px-4 py-4 bg-[#080808]'>
      <Logo />
    </header>
  );
};

export default Header;
