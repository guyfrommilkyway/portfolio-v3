// packages
import React from 'react';

// components
import Footer from './Footer';

const Content: React.FC<ChildrenProps> = props => {
  const { children } = props;

  return (
    <section className='relative w-full'>
      {children}
      <Footer />
    </section>
  );
};

export default Content;
