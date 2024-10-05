import React, { ReactNode } from 'react';
import { RiMenu3Fill, RiCloseFill } from 'react-icons/ri';

import useToggle from '@/hooks/useToggle';

interface Props {
    children: ReactNode;
}

const Sidebar: React.FC<Props> = ({ children }) => {
    const { toggle, handleToggle } = useToggle();

    return (
        <div className='fixed top-5 right-4 z-50'>
            <button className='relative z-50 block xl:hidden mb-2 bg-transparent' onClick={() => handleToggle(prev => !prev)}>
                <span className='sr-only'>Menu</span>
                {toggle ? <RiCloseFill size='24px' color='#e5e5e5' /> : <RiMenu3Fill size='24px' color='#e5e5e5' />}
            </button>
            <div
                className={`fixed top-0 right-0 z-40 flex xl:hidden flex-col gap-4 w-full h-screen max-w-[460px] px-4 pt-20 pb-12 bg-neutral-800 overflow-y-auto ${
                    toggle ? 'flex' : 'hidden'
                }`}
            >
                {children}
            </div>
        </div>
    );
};

export default Sidebar;
