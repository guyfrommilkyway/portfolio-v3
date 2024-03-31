// packages
import React from 'react';

const Container: React.FC<PChildren> = ({ children }) => {
  return (
    <main className='relative flex flex-col lg:flex-row gap-0 w-full max-w-[1680px] h-full mx-auto transition-opacity ease-in-out delay-150 border-b border-neutral-900'>
      {children}
    </main>
  );
};

export default Container;
