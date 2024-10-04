// packages
import React from 'react';

const Content: React.FC<PChildren> = ({ children }) => {
  return <section className='relative w-full'>{children}</section>;
};

export default Content;
