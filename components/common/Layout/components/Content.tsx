// packages
import React from 'react';

// components
import Footer from './Footer';

const Content: React.FC<PChildren> = ({ children }) => {
  return (
    <section className='relative w-full'>
      {children}
      <Footer />
    </section>
  );
};

export default Content;
