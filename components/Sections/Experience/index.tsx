// packages
import React from 'react';

// components
import Section from '@/components/common/Section';
import ExperienceCard from './components/Card';

interface PSectionExperience {
  data?: {
    [key: string]: IExperience;
  };
}

const SectionExperience: React.FC<PSectionExperience> = props => {
  const { data } = props;

  return (
    <Section headline='Work Experience'>
      <div className='flex flex-col gap-8'>
        {!!data &&
          Object.keys(data)
            .sort()
            .reverse()
            .map(item => {
              return <ExperienceCard key={item} {...data[item]} />;
            })}
      </div>
    </Section>
  );
};

export default SectionExperience;
