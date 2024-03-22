// packages
import React from 'react';

const CardDisclaimer: React.FC<IProjectCardDisclaimer> = props => {
  const { disclaimer } = props;

  return (
    <p className='mt-4 text-neutral-400 text-sm leading-tight tracking-tight select-none'>
      {disclaimer}
    </p>
  );
};

export default CardDisclaimer;
