// packages
import React from 'react';

const CardHeader: React.FC<InformationCardHeaderProps> = props => {
  const { title } = props;

  return (
    <h2 className='text-neutral-300 text-sm font-semibold leading-tight tracking-wide select-none'>
      {title}
    </h2>
  );
};

export default CardHeader;
