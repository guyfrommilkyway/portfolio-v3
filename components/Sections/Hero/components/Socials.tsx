// packages
import React from 'react';

interface PHeroSocials {
  data: ISocial[];
}

const HeroSocials: React.FC<PHeroSocials> = ({ data }) => {
  return (
    <div className='flex gap-4'>
      {data?.map(item => {
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
