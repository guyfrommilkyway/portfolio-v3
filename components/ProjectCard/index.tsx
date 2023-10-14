// packages
import React from 'react';

// components
import Pill from '@/components/Pill';

// assets
import ArrowUpSVG from '@/assets/svg/iconoir_arrow-tr.svg';
import Card from '../Card';

const ProjectCard: React.FC<ProjectCardProps> = props => {
  const { name, link, description, technologies } = props;

  return (
    <div className='flex flex-col lg:flex-row justify-start items-start gap-8 w-full max-w-full xl:max-w-[calc(50%-10px)]'>
      <Card height='h-full'>
        <div className='w-full p-4'>
          <h4 className='mb-2 text-white text-lg font-semibold'>{name}</h4>
          <a
            className='flex gap-1 w-fit mb-2 text-neutral-300 underline hover:text-white select-none'
            href={link}
            target={`${link === '#' ? '_self' : '_blank'}`}
          >
            <span>{link !== '#' ? 'visit-website' : 'for-internal-use'}</span>
            <ArrowUpSVG width={12} height={12} />
          </a>
          <p className='mb-4 text-neutral-300 leading-relaxed'>{description}</p>
          <div className='flex flex-wrap gap-2'>
            {Object.keys(technologies).map(item => {
              return <Pill key={item} tech={technologies[item]} />;
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
