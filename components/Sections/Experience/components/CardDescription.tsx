// packages
import React from 'react';

const CardDescription: React.FC<PChildren> = ({ children }) => {
  return (
    <ul className='mt-2 px-4 leading-snug text-neutral-400 list-disc select-none'>
      {children}
    </ul>
  );
};

export default CardDescription;
