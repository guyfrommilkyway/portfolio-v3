// packages
import React from 'react';

const HeroLocation: React.FC<IHeroLocation> = props => {
  const { location } = props;

  return (
    <p className='w-full max-w-sm mb-2 text-neutral-400 leading-snug select-none'>
      {location}
    </p>
  );
};

export default HeroLocation;
