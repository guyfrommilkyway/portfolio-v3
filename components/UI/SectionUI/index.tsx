// packages
import React from 'react';

const SectionUI: React.FC<SectionUIProps> = props => {
  const { id, children } = props;

  return (
    <section
      id={id}
      className='relative w-full px-4 py-8 md:px-8 lg:px-10 border-b border-neutral-900'
    >
      {children}
    </section>
  );
};

export default SectionUI;
