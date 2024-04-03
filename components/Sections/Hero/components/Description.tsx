// packages
import React from 'react';

interface PHeroDescription {
  description: string;
}

const HeroDescription: React.FC<PHeroDescription> = ({ description }) => {
  return (
    <p className='w-full mb-4 text-neutral-400 leading-snug select-none'>
      {description}
    </p>
  );
};

export default HeroDescription;
