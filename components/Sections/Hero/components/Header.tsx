// packages
import React from 'react';

interface PHeroHeader {
  headline: string;
}

const HeroHeader: React.FC<PHeroHeader> = ({ headline }) => {
  return (
    <h1 className='mb-2 text-white font-bold text-2xl leading-none tracking-wider select-none'>
      {headline}
    </h1>
  );
};

export default HeroHeader;
