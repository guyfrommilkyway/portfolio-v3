// packages
import React from 'react';

interface PHeroSubHeader {
  title: string;
}

const HeroSubHeader: React.FC<PHeroSubHeader> = ({ title }) => {
  return (
    <h2 className='mb-2 text-neutral-300 text-lg font-semibold select-none'>
      {title}
    </h2>
  );
};

export default HeroSubHeader;
