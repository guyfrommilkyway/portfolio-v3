// packages
import React from 'react';

// components
import CardUI from '@/components/UI/CardUI';
import CardImage from './CardImage';
import CardLinks from './CardLinks';
import Pill from '@/components/Pill';

const ProjectCard: React.FC<ProjectCardProps> = props => {
  const {
    image,
    name,
    link,
    description,
    disclaimer,
    technologies,
    hostingProvider,
    teamSize,
    codebase,
  } = props;

  return (
    <div className='flex flex-col lg:flex-row justify-start items-start w-full'>
      <CardUI height='h-full'>
        {!!image && <CardImage name={name} image={image} />}
        <div className='relative w-full p-4'>
          <h2 className='text-white text-lg font-semibold select-none'>
            {name}
          </h2>
          <p className='mb-2 text-neutral-300 select-none'>{description}</p>
          <CardLinks link={link} codebase={codebase} />
          <div className='flex flex-wrap flex-col items-start gap-2 mb-2'>
            <Pill tech={`Deployed with ${hostingProvider}`} />
            {teamSize !== 'hide' && <Pill tech={`Team: ${teamSize}`} />}
          </div>
          <div className='flex flex-wrap gap-2'>
            {Object.keys(technologies).map(item => {
              return <Pill key={item} tech={technologies[item]} />;
            })}
          </div>
          {!!disclaimer && (
            <p className='mt-4 text-neutral-400 text-sm leading-tight tracking-tight select-none'>
              {disclaimer}
            </p>
          )}
        </div>
      </CardUI>
    </div>
  );
};

export default ProjectCard;
