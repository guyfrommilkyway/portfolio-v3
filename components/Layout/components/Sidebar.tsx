// packages
import React from 'react';

// utils
import useToggle from '@/hooks/useToggle';

// assets
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';

const Sidebar: React.FC<ChildrenProps> = props => {
  const { children } = props;
  const { toggle, toggleHandler } = useToggle();

  return (
    <div className='fixed top-5 right-4 z-50'>
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
        className={`fixed top-0 right-0 z-40 flex lg:hidden flex-col w-full h-screen max-w-[460px] pt-20 pb-12 bg-neutral-950 overflow-x-scroll ${
          toggle ? 'flex' : 'hidden'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
