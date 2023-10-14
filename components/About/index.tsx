// packages
import React from 'react';

// components
import ContentBox from '@/components/ContentBox';

const About: React.FC<AboutProps> = props => {
  const { headline, subheadline, paragraphs } = props;

  return (
    <ContentBox id='about'>
      <h3 className='mb-4 text-white text-2xl font-semibold'>{headline}</h3>
      <h4 className='mb-4 text-neutral-100 font-bold text-xl tracking-wide leading-normal'>
        {subheadline}
      </h4>
      {!!paragraphs &&
        Object.keys(paragraphs).map(item => {
          return (
            <p key={item} className='mb-4 leading-relaxed text-neutral-300'>
              {paragraphs[item]}
            </p>
          );
        })}
    </ContentBox>
  );
};

export default About;
