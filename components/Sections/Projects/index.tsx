// packages
import React from 'react';

// components
import SectionUI from '@/components/UI/SectionUI';
import ProjectCard from './components/Card';

const Projects: React.FC<ProjectsProps> = props => {
  const { data } = props;

  return (
    <SectionUI headline='Projects'>
      <div className='flex flex-wrap items-stretch gap-5'>
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
