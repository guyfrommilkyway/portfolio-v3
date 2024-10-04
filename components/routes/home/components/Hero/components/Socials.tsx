// packages
import React from 'react';

import SOCIALS from '@/data/socials';

const HeroSocials: React.FC = () => {
  return (
    <div className='flex gap-4'>
      {SOCIALS?.map(item => {
        return (
          <a
            key={item.name}
            className='flex items-center gap-4 text-neutral-400 font-medium leading-none transition-colors ease-in-out delay-100 hover:text-white'
            href={item.link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {item.icon}
            <span className='sr-only'>{item.username}</span>
          </a>
        );
      })}
    </div>
  );
};

export default HeroSocials;
