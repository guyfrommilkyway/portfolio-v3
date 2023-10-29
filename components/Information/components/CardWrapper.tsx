// packages
import React from 'react';

const CardWrapper: React.FC<ChildrenProps> = props => {
  const { children } = props;

  return (
    <div className='flex flex-wrap flex-col items-start mt-1 gap-2'>
      {children}
    </div>
  );
};

export default CardWrapper;
