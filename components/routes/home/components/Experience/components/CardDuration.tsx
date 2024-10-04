// packages
import React from 'react';

interface Props {
  duration: string;
  setup: string;
}

const CardDuration: React.FC<Props> = ({ duration, setup }) => {
  return (
    <p className='text-neutral-400 select-none'>
      {duration} &#x2022; {setup}
    </p>
  );
};

export default CardDuration;
