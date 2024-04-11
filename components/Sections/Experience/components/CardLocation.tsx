// packages
import React from 'react';

interface PCardLocation {
  location: string;
}

const CardLocation: React.FC<PCardLocation> = ({ location }) => {
  return <p className='text-neutral-400 select-none'>{location}</p>;
};

export default CardLocation;
