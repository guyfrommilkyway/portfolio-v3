// packages
import React from 'react';

const CardDescription: React.FC<IProjectCardDescription> = props => {
  const { description } = props;

  return (
    <p className='mb-4 text-neutral-300 leading-snug select-none'>
      {description}
    </p>
  );
};

export default CardDescription;
