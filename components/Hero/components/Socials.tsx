// packages
import React from 'react';

const HeroSocials: React.FC<ISocials> = props => {
  const { data } = props;

  return (
    <div className='flex gap-4'>
      {data?.map((item: ISocial) => {
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
