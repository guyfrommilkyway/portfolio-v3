// packages
import React from 'react';

// components
import Navbar from '@/components/Navbar';
import WhatsNewCard from '@/components/News/components/WhatsNewCard';
import RecentNewsCard from '@/components/News/components/RecentNewsCard';

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
        className={`fixed top-0 right-0 z-40 flex lg:hidden flex-col gap-4 w-full h-screen max-w-[480px] px-4 pt-20 pb-12 bg-neutral-950 overflow-x-auto ${
          toggle ? 'flex' : 'hidden'
        }`}
      >
        <WhatsNewCard />
        <RecentNewsCard />
      </div>
    </div>
  );
};

export default Sidebar;
