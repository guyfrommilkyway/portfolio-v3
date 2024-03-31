// packages
import React from 'react';

const SideContent: React.FC<PChildren> = ({ children }) => {
  return (
    <aside className='hidden xl:flex flex-col gap-4 w-full max-w-[340px] h-fit my-4 px-4'>
      {children}
    </aside>
  );
};

export default SideContent;
