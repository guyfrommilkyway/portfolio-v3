// packages
import React from 'react';

const CardSubHeader: React.FC<ICardSubHeader> = props => {
  const { title } = props;

  return <h2 className='text-neutral-400 font-medium select-none'>{title}</h2>;
};

export default CardSubHeader;
