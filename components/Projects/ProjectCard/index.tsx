// packages
import React from 'react';
import Image from 'next/image';

// components
import Card from '@/components/Card';
import Pill from '@/components/Pill';

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
    <div className='flex flex-col lg:flex-row justify-start items-start gap-8 w-full max-w-full xl:max-w-[calc(50%-10px)]'>
      <Card height='h-full'>
        <div className='relative w-full px-4'>
          {!!image && (
            <div className='relative bottom-0 mb-4 aspect-video rounded-xl opacity-80 hover:opacity-100 overflow-hidden select-none transition-opacity ease-in-out delay-100'>
              <Image
                src={image}
                fill={true}
                sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
                alt={name}
              />
            </div>
          )}
          <h2 className='text-white text-lg font-semibold'>{name}</h2>
          <h3 className='mb-2 text-neutral-300'>{company}</h3>
          <div className='flex flex-wrap items-center gap-2 mb-2'>
            {!!hostingProvider && (
              <span className='px-2 py-1 text-neutral-700 text-sm hover:text-neutral-900 bg-neutral-200 rounded-sm select-none'>
                Deployed with {hostingProvider}
              </span>
            )}
            {!!link && (
              <a
                className='flex gap-1 px-2 py-1 text-neutral-300 text-sm hover:text-white bg-neutral-700 rounded-sm select-none'
                href={link}
                title={link}
                target='_blank'
              >
                Visit Website
              </a>
            )}
            {!!codebase && (
              <a
                className='flex gap-1 px-2 py-1 text-neutral-300 text-sm hover:text-white bg-neutral-700 rounded-sm select-none'
                href={codebase}
                target='_blank'
              >
                View Codebase
              </a>
            )}
          </div>
          <p className='w-fit mb-4 px-2 py-1 text-neutral-300 text-sm bg-neutral-700 rounded-sm select-none'>
            Dev Team: ~{teamSize} {+teamSize > 1 ? 'people' : 'person'}
          </p>
          <p className='mb-4 text-neutral-300 leading-relaxed'>{description}</p>
          <div className='flex flex-wrap gap-2 mb-8'>
            {Object.keys(technologies).map(item => {
              return <Pill key={item} tech={technologies[item]} />;
            })}
          </div>
          {!!disclaimer && (
            <p className='text-neutral-300 text-sm leading-snug'>
              {disclaimer}
            </p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
