// packages
import React from 'react';

interface Props {
  description: string;
}

const HeroDescription: React.FC<Props> = ({ description }) => {
  return (
    <p className='w-full mb-4 text-neutral-400 leading-snug select-none'>
      {description}
    </p>
  );
};

export default HeroDescription;
