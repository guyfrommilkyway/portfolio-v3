// packages
import React from 'react';

interface PCardDuration {
  duration: string;
}

const CardDuration: React.FC<PCardDuration> = ({ duration }) => {
  return <p className='text-neutral-400 text-sm select-none'>{duration}</p>;
};

export default CardDuration;
