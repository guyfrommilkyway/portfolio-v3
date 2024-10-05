import SOCIALS from '@/data/socials';
import React from 'react';

const HeroSocials: React.FC = () => {
    return (
        <div className='flex flex-col gap-2'>
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
                        <span className=''>{item.username}</span>
                    </a>
                );
            })}
        </div>
    );
};

export default HeroSocials;
