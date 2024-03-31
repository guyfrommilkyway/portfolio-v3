// packages
import React from 'react';

interface PCardDisclaimer {
  disclaimer: string;
}

const CardDisclaimer: React.FC<PCardDisclaimer> = ({ disclaimer }) => {
  return (
    <p className='text-neutral-400 leading-snug tracking-tight select-none'>
      {disclaimer}
    </p>
  );
};

export default CardDisclaimer;
