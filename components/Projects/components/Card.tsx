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
    <div className='flex flex-nowrap flex-col lg:flex-row items-start gap-x-8 gap-y-4'>
      {!!image && <CardImage name={name} image={image} />}
      <div className=''>
        {link ? (
          <a
            className='inline-block w-fit mb-2 text-neutral-300 text-lg font-semibold leading-tight tracking-wide underline hover:text-white transition-colors ease-in-out delay-100 select-none'
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {name}
          </a>
        ) : (
          <h2 className='mb-2 text-neutral-300 text-lg font-semibold leading-tight tracking-wide select-none'>
            {name}
          </h2>
        )}
        <p className='mb-4 text-neutral-300 leading-snug select-none'>
          {description}
        </p>
        {teamSize !== 'hide' && (
          <div className='flex flex-wrap flex-col items-start gap-2 mb-2'>
            <Pill tech={`Team: ${teamSize}`} />
          </div>
        )}
        <div className='flex flex-wrap gap-2'>
          <Pill tech={`Deployed with ${hostingProvider}`} />
          {Object.keys(technologies).map(item => {
            return <Pill key={item} tech={technologies[item]} />;
          })}
        </div>
        {!!disclaimer && (
          <p className='mt-4 text-neutral-500 text-sm leading-tight tracking-tight select-none'>
            {disclaimer}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
