// packages
import React from 'react';

const CardSubHeader: React.FC<InformationCardHeaderProps> = props => {
  const { title } = props;

  return (
    <span className='text-neutral-300 text-sm font-medium select-none'>
      {title}
    </span>
  );
};

export default CardSubHeader;
