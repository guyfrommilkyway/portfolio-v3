// packages
import React from 'react';

interface PSection extends PChildren {
  headline: string;
}

const Section: React.FC<PSection> = ({ headline, children }) => {
  return (
    <section className='relative w-full px-4 py-8 md:px-8 lg:px-10'>
      <h1 className='mb-4 text-white text-2xl font-semibold select-none'>
        {headline}
      </h1>
      {children}
    </section>
  );
};

export default Section;
