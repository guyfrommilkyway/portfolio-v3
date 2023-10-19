// packages
import React from 'react';

const SectionUI: React.FC<SectionUIProps> = props => {
  const { children, headline } = props;

  return (
    <section className='relative w-full px-4 py-8 md:px-8 lg:px-10 border-b border-neutral-900'>
      <h1 className='mb-4 text-white text-2xl font-semibold select-none'>
        {headline}
      </h1>
      {children}
    </section>
  );
};

export default SectionUI;
