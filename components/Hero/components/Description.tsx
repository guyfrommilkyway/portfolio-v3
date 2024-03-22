// packages
import React from 'react';

const HeroDescription: React.FC<IHeroDescription> = props => {
  const { description } = props;

  return (
    <p className='w-full max-w-sm mb-4 text-neutral-400 leading-snug select-none'>
      {description}
    </p>
  );
};

export default HeroDescription;
