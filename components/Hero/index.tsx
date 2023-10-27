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
      <h1 className='text-white font-bold text-3xl leading-tighter tracking-wider select-none'>
        {headline}
      </h1>
      <h2 className='text-neutral-300 text-lg leading-tighter select-none'>
        {title}
      </h2>
      <p className='my-2 text-neutral-300 leading-snug select-none'>
        {description}
      </p>
      <div className='flex gap-4'>
        {social.map((item: SocialProps) => {
          return <Link key={item.name} {...item} />;
        })}
      </div>
    </aside>
  );
};

export default Hero;
