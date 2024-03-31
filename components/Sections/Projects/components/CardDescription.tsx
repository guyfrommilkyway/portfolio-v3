// packages
import React from 'react';

interface PCardDescription {
  description: string;
}

const CardDescription: React.FC<PCardDescription> = ({ description }) => {
  return <p className='mb-2 text-neutral-400 select-none'>{description}</p>;
};

export default CardDescription;
