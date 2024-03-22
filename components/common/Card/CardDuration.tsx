// packages
import React from 'react';

const CardDuration: React.FC<ICardDuration> = props => {
  const { duration } = props;

  return <p className='text-neutral-400 text-sm select-none'>{duration}</p>;
};

export default CardDuration;
