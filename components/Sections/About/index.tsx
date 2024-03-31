// packages
import React from 'react';

// components
import Section from '@/components/common/Section';

interface PSectionAbout {
  headline: string;
  paragraphs: {
    [key: string]: string;
  };
}

const SectionAbout: React.FC<PSectionAbout> = ({ headline, paragraphs }) => {
  return (
    <Section headline={headline}>
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
    </Section>
  );
};

export default SectionAbout;
