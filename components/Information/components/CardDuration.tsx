// packages
import React from 'react';

const CardDuration: React.FC<InformationCardDurationProps> = props => {
  const { duration } = props;

  return <p className='text-neutral-300 text-sm select-none'>{duration}</p>;
};

export default CardDuration;
