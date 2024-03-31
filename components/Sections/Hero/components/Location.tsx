// packages
import React from 'react';

interface PHeroLocation {
  location: string;
}

const HeroLocation: React.FC<PHeroLocation> = ({ location }) => {
  return (
    <p className='w-full max-w-sm mb-2 text-neutral-400 leading-snug select-none'>
      {location}
    </p>
  );
};

export default HeroLocation;
