// packages
import React from 'react';

const HeroHeader: React.FC<IHeroHeader> = props => {
  const { headline } = props;

  return (
    <h1 className='mb-2 text-white font-bold text-2xl leading-none tracking-wider select-none'>
      {headline}
    </h1>
  );
};

export default HeroHeader;
