// packages
import React from 'react';

// components
import HeroPhoto from './components/Photo';
import HeroSocials from './components/Socials';

// data
import SOCIAL from '@/data/socials';
import HeroHeader from './components/Header';
import HeroSubHeader from './components/SubHeader';
import HeroLocation from './components/Location';
import HeroDescription from './components/Description';

interface PSectionHero {
  headline?: string;
  title?: string;
  description?: string;
  location?: string;
}

const SectionHero: React.FC<PSectionHero> = ({
  headline = '',
  title = '',
  description = '',
  location = '',
}) => {
  return (
    <aside className='relative flex flex-col w-full md:max-w-full lg:max-w-sm px-4 pt-4 pb-10 md:px-8 lg:px-4 border-b md:border-none border-neutral-900'>
      <HeroPhoto />
      <div className='lg:sticky lg:top-[80px]'>
        <HeroHeader headline={headline} />
        <HeroSubHeader title={title} />
        <HeroLocation location={location} />
        <HeroDescription description={description} />
        <HeroSocials data={SOCIAL} />
      </div>
    </aside>
  );
};

export default SectionHero;
