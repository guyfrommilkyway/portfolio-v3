// packages
import React from 'react';

// components
import Photo from './components/Photo';
import Link from './components/Social';

// data
import { social } from './components/data';

const Hero: React.FC<HeroProps> = props => {
  const { headline, title, description } = props;

  return (
    <aside className='relative lg:sticky lg:top-[80px] flex flex-col w-full md:max-w-[320px] h-fit px-4 pt-4 pb-10 md:px-8 lg:px-4 border-b md:border-none border-neutral-900'>
      <Photo />
      <h1 className='mb-2 text-white font-bold text-3xl leading-tighter tracking-wider select-none'>
        {headline}
      </h1>
      <h2 className='mb-4 text-neutral-300 text-lg leading-tighter tracking-wider select-none'>
        {title}
      </h2>
      <div className='flex gap-4 mb-4'>
        {social.map((item: SocialProps) => {
          return <Link key={item.name} {...item} />;
        })}
      </div>
      <p className='mb-4 text-neutral-300 leading-snug select-none'>
        {description}
      </p>
    </aside>
  );
};

export default Hero;
