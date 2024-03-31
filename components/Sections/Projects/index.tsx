// packages
import React from 'react';

// components
import Section from '@/components/common/Section';
import ProjectCard from './components/Card';

interface PSectionProjects {
  headline: string;
  data?: {
    [key: string]: IProject;
  };
}

const SectionProjects: React.FC<PSectionProjects> = ({ headline, data }) => {
  return (
    <Section headline={headline}>
      <div className='flex flex-col gap-8'>
        {!!data &&
          Object.keys(data)
            .sort()
            .reverse()
            .map(item => {
              return <ProjectCard key={item} {...data[item]} />;
            })}
      </div>
    </Section>
  );
};

export default SectionProjects;
