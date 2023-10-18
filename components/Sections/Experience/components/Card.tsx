// packages
import React from 'react';

// components
import LinkExternal from '@/components/LinkExternal';
import Pill from '@/components/Pill';

const Card: React.FC<ExperienceCardProps> = props => {
  const { duration, title, company, link, website, location, technologies } =
    props;

  return (
    <div className='w-full'>
      <h2 className='text-white text-lg font-semibold select-none'>{title}</h2>
      <h3 className='text-neutral-300 select-none'>{company}</h3>
      <p className='w-fit text-neutral-300 select-none'>{duration}</p>
      <p className='text-neutral-300 select-none'>{location}</p>
      <LinkExternal href={link} name={website} />
      <div className='flex flex-wrap gap-2 mt-4'>
        {Object.keys(technologies).map(item => {
          return <Pill key={item} tech={technologies[item]} />;
        })}
      </div>
    </div>
  );
};

export default Card;
