// packages
import React from 'react';

// components
import SectionUI from '@/components/UI/SectionUI';

const About: React.FC<AboutProps> = props => {
  const { headline, paragraphs } = props;

  return (
    <SectionUI headline={headline}>
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
