// packages
import React from 'react';

interface PCardDescription {
  description: string;
}

const CardDescription: React.FC<PCardDescription> = ({ description }) => {
  return <p className='text-neutral-400 leading-snug'>{description}</p>;
};

export default CardDescription;
