// packages
import React from 'react';

// components
import Photo from './components/Photo';
import Link from './components/Social';

// data
import { social } from './components/data';

import { FaLocationDot } from 'react-icons/fa6';

const Hero: React.FC<HeroProps> = props => {
  const { headline, description } = props;

  return (
    <aside className='relative flex flex-col w-full md:max-w-[320px] px-4 pt-4 pb-10 md:px-8 lg:px-4 border-b md:border-none border-neutral-900'>
      <Photo />
      <div className='lg:sticky lg:top-[80px]'>
        <h1 className='mb-2 text-white font-bold text-2xl tracking-wider select-none'>
          {headline}
        </h1>
        <p className='w-full max-w-sm mb-4 text-neutral-300 leading-snug select-none'>
          {description}
        </p>
        <div className='flex flex-col gap-3'>
          <span className='flex items-center gap-3 text-neutral-400 font-medium leading-none transition-colors ease-in-out delay-100 hover:text-white'>
            <FaLocationDot size={20} />
            <span className='select-none'>Manila, Philippines</span>
          </span>
          {social.map((item: SocialProps) => {
            return <Link key={item.name} {...item} />;
          })}
        </div>
      </div>
    </aside>
  );
};

export default Hero;
