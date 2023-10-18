// packages
import React from 'react';

// components
import CardUI from '@/components/UI/CardUI';
import Pill from '@/components/Pill';
import CardImage from './CardImage';
import CardLinks from './CardLinks';

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
    <div className='flex flex-col lg:flex-row justify-start items-start w-full max-w-full md:max-w-[calc(50%-10px)] lg:max-w-full xl:max-w-[calc(50%-10px)]'>
      <CardUI height='h-full'>
        <div className='relative w-full px-4'>
          {!!image && <CardImage name={name} image={image} />}
          <h2 className='text-white text-lg font-semibold select-none'>
            {name}
          </h2>
          <CardLinks link={link} codebase={codebase} />
          <p className='mb-4 text-neutral-300 select-none'>{description}</p>
          <div className='flex flex-wrap items-center gap-2 mb-2'>
            <Pill tech={`Deployed with ${hostingProvider}`} />
            <Pill
              tech={`Dev Team: ${teamSize} ${
                +teamSize > 1 ? 'people' : 'person'
              }`}
            />
          </div>
          <div className='flex flex-wrap gap-2'>
            {Object.keys(technologies).map(item => {
              return <Pill key={item} tech={technologies[item]} />;
            })}
          </div>
          {!!disclaimer && (
            <p className='mt-8 text-neutral-400 text-sm leading-snug tracking-tight select-none'>
              {disclaimer}
            </p>
          )}
        </div>
      </CardUI>
    </div>
  );
};

export default ProjectCard;
