// packages
import React from 'react';

const Information: React.FC<ChildrenProps> = props => {
  const { children } = props;

  return (
    <aside className='hidden xl:flex flex-col w-full max-w-[360px] h-fit my-4'>
      {children}
    </aside>
  );
};

export default Information;
