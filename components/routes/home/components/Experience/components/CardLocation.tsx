// packages
import React from 'react';

interface Props {
  location: string;
}

const CardLocation: React.FC<Props> = ({ location }) => {
  return <p className='text-neutral-400 select-none'>{location}</p>;
};

export default CardLocation;
