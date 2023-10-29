// packages
import React from 'react';

const CardSubHeader: React.FC<InformationCardHeaderProps> = props => {
  const { title } = props;

  return (
    <h3 className='text-neutral-300 text-sm font-medium select-none'>
      {title}
    </h3>
  );
};

export default CardSubHeader;
