import Link from 'next/link';
import React from 'react';

const Logo: React.FC = () => {
    return (
        <Link
            className='text-neutral-300 hover:text-white hover:underline transition-colors ease-in-out delay-100 select-none'
            href='/'
        >
            almertampus.space
        </Link>
    );
};

export default Logo;
