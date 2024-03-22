// packages
import React from 'react';

const Information: React.FC<IChildren> = props => {
  const { children } = props;

  return (
    <aside className='hidden xl:flex flex-col gap-4 w-full max-w-[340px] h-fit my-4 px-4'>
      {children}
    </aside>
  );
};

export default Information;
