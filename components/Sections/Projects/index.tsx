// packages
import React from 'react';

// components
import SectionUI from '@/components/UI/SectionUI';
import ProjectCard from './components/Card';

const Projects: React.FC<IProjects> = props => {
  const { headline, data } = props;

  return (
    <SectionUI headline={headline}>
      <div className='flex flex-col gap-8'>
        {!!data &&
          Object.keys(data)
            .sort()
            .reverse()
            .map(item => {
              return <ProjectCard key={item} {...data[item]} />;
            })}
      </div>
    </SectionUI>
  );
};

export default Projects;
