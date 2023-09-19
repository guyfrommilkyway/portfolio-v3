// packages below
import React, { ReactNode } from 'react';

// types below
import { ChildrenProps } from '@/types';

const Container: React.FC<ChildrenProps> = (props) => {
  const { children } = props;

  return (
    <div className='flex flex-col lg:flex-row justify-between items-stretch gap-10 w-full max-w-[1198px] mx-auto mt-32 px-4 border'>
      {children}
    </div>
  );
};

export default Container;
