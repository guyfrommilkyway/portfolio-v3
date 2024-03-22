// packages
import React from 'react';

const HeroSubHeader: React.FC<IHeroSubHeader> = props => {
  const { title } = props;

  return (
    <h2 className='mb-2 text-neutral-300 text-lg font-semibold select-none'>
      {title}
    </h2>
  );
};

export default HeroSubHeader;
