import React from 'react';

import SOCIALS from '@/constants/socials';

const HeroSocials: React.FC = () => {
    return (
        <div className='flex gap-4 mb-4'>
            {SOCIALS?.map(item => {
                return (
                    <a
                        key={item.name}
                        className='flex items-center gap-2 text-sm text-neutral-400 font-medium leading-none transition-colors ease-in-out delay-100 hover:text-white'
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {item.icon}
                        <span className=''>{item.name}</span>
                    </a>
                );
            })}
        </div>
    );
};

export default HeroSocials;
