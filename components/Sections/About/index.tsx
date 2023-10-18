// packages
import React from 'react';

// components
import SectionUI from '@/components/UI/SectionUI';

const About: React.FC<AboutProps> = props => {
  const { headline, paragraphs } = props;

  return (
    <SectionUI id='summary'>
      <h3 className='mb-4 text-white text-2xl font-semibold select-none'>
        {headline}
      </h3>
      {!!paragraphs &&
        Object.keys(paragraphs).map(item => {
          return (
            <p
              key={item}
              className='mb-4 leading-relaxed text-neutral-300 select-none'
            >
              {paragraphs[item]}
            </p>
          );
        })}
    </SectionUI>
  );
};

export default About;
