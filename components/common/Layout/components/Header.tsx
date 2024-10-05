import React from 'react';

import Logo from '@/components/common/Logo';

const Header: React.FC = () => {
    return (
        <header className='sticky top-0 z-50 flex justify-center items-center w-full min-h-[60px] mx-auto px-4 py-4 bg-[#080808] border-b border-neutral-900'>
            <Logo />
        </header>
    );
};

export default Header;
