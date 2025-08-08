import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  headline?: string;
  subtitle?: string;
}

const Section: React.FC<Props> = ({ headline, subtitle = '', children }) => {
  return (
    <section className='relative w-full mb-8'>
      {headline && <h1 className='mb-1 text-white text-lg font-semibold'>{headline}</h1>}
      {subtitle && <h2 className='mb-4 text-neutral-400 italic'>{subtitle}</h2>}
      {children}
    </section>
  );
};

export default Section;
