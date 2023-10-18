// packages
import React from 'react';

// components
import Card from '@/components/Card';
import Pill from '@/components/Pill';
import CardImage from './components/CardImage';
import CardLinks from './components/CardLinks';

const ProjectCard: React.FC<ProjectCardProps> = props => {
  const {
    image,
    name,
    link,
    company,
    description,
    disclaimer,
    technologies,
    hostingProvider,
    teamSize,
    codebase,
  } = props;

  return (
    <div className='flex flex-col lg:flex-row justify-start items-start gap-8 w-full max-w-full md:max-w-[calc(50%-10px)] lg:max-w-full xl:max-w-[calc(50%-10px)]'>
      <Card height='h-full'>
        <div className='relative w-full px-4'>
          {!!image && <CardImage name={name} image={image} />}
          <h2 className='mb-2 text-white text-lg font-semibold select-none'>
            {name}
          </h2>
          <CardLinks link={link} codebase={codebase} />
          <p className='mb-4 text-neutral-300 select-none'>{description}</p>
          <div className='flex flex-wrap items-center gap-2 mb-2'>
            {!!hostingProvider && (
              <Pill tech={`Deployed with ${hostingProvider}`} />
            )}
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
      </Card>
    </div>
  );
};

export default ProjectCard;
