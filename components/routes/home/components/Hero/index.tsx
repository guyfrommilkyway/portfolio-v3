// packages
import React from 'react';

// components
import HeroPhoto from './components/Photo';
import HeroSocials from './components/Socials';

// data
import HeroHeader from './components/Header';
import HeroLocation from './components/Location';
import HeroDescription from './components/Description';

interface Props {
  headline?: string;
  title?: string;
  description?: string;
  location?: string;
}

const SectionHero: React.FC<Props> = ({
  headline = '',
  description = '',
  location = '',
}) => {
  return (
    <aside className='relative flex flex-col w-full max-w-full lg:max-w-[300px] px-4 pt-4 pb-10 md:px-8 lg:px-4 border-b md:border-none border-neutral-900'>
      <HeroPhoto />
      <div className='lg:sticky lg:top-[80px]'>
        <HeroHeader headline={headline} />
        <HeroLocation location={location} />
        <HeroDescription description={description} />
        <HeroSocials />
      </div>
    </aside>
  );
};

export default SectionHero;
