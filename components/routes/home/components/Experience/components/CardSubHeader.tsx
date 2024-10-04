// packages
import React from 'react';

interface Props {
  title: string;
}

const CardSubHeader: React.FC<Props> = ({ title }) => {
  return (
    <h2 className='text-neutral-400 font-medium select-none'>
      <span>{title}</span>
    </h2>
  );
};

export default CardSubHeader;
