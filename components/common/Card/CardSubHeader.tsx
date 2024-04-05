// packages
import React from 'react';

interface PCardSubHeader {
  title: string;
}

const CardSubHeader: React.FC<PCardSubHeader> = ({ title }) => {
  return (
    <h2 className='text-neutral-400 font-medium tracking-tighter select-none'>
      {title}
    </h2>
  );
};

export default CardSubHeader;
