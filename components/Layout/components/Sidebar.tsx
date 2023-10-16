// packages
import React from 'react';

// components
import Navbar from '@/components/Navbar';
import WhatsNew from '@/components/News/components/WhatsNew';
import RecentNews from '@/components/News/components/RecentNews';

// utils
import useToggle from '@/hooks/useToggle';

// assets
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';

const Sidebar: React.FC = () => {
  // state
  const { toggle, toggleHandler } = useToggle();

  return (
    <div className='fixed top-7 right-4 z-50'>
      <button
        className='relative z-50 block lg:hidden mb-2 bg-transparent'
        onClick={() => toggleHandler()}
      >
        <span className='sr-only'>Menu</span>
        {toggle ? (
          <RiCloseFill size='24px' color='#e5e5e5' />
        ) : (
          <RiMenu3Fill size='24px' color='#e5e5e5' />
        )}
      </button>
      <div
        className={`fixed top-0 right-0 z-40 flex lg:hidden flex-col gap-4 w-full h-screen max-w-[480px] px-4 pt-20 pb-12 bg-neutral-800 overflow-x-auto ${
          toggle ? 'flex' : 'hidden'
        }`}
      >
        <div className='flex flex-col gap-2'>
          <span className='text-sm text-neutral-500'>NAVIGATION</span>
          <Navbar />
        </div>
        <WhatsNew />
        <RecentNews />
      </div>
    </div>
  );
};

export default Sidebar;
