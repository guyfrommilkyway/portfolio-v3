// packages
import React from 'react';
import Image from 'next/image';

// components
import Card from '@/components/Card';
import Pill from '@/components/Pill';

// assets
import ArrowUpSVG from '@/assets/svg/iconoir_arrow-tr.svg';

const ProjectCard: React.FC<ProjectCardProps> = props => {
  const { image, name, link, description, technologies } = props;

  return (
    <div className='flex flex-col lg:flex-row justify-start items-start gap-8 w-full max-w-full xl:max-w-[calc(50%-10px)]'>
      <Card height='h-full'>
        <div className='relative w-full p-4'>
          {!!image && (
            <div className='relative bottom-0 mb-4 aspect-video rounded-xl opacity-80 hover:opacity-100 overflow-hidden transition-opacity ease-in delay-100'>
              <Image
                src={image}
                fill={true}
                sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
                alt={name}
              />
            </div>
          )}
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
