// packages
import React from 'react';

// components
import Photo from './components/Photo';
import Link from './components/Social';

// data
import { social } from './data';

const Hero: React.FC<HeroProps> = props => {
  const { headline, description } = props;

  return (
    <aside className='relative lg:sticky lg:top-[80px] flex flex-col gap-4 w-full md:max-w-[320px] h-fit px-4 pt-4 pb-10 border-b md:border-none border-neutral-900'>
      <Photo />
      <h3 className='text-white font-bold text-3xl leading-tighter tracking-wider'>
        {headline}
      </h3>
      <div className='flex gap-3'>
        {social.map((item: SocialProps) => {
          return <Link key={item.name} {...item} />;
        })}
      </div>
      <p className='mb-4 text-lg text-neutral-300 leading-snug'>
        {description}
      </p>
    </aside>
  );
};

export default Hero;
