// packages
import React from 'react';

// components
import OutsideLink from '@/components/Links/OutsideLink';
import Pill from '@/components/Pill';

const Card: React.FC<ExperienceCardProps> = props => {
  const { duration, title, company, link, website, location, technologies } =
    props;

  return (
    <div className=''>
      <h2 className='text-white text-xl font-semibold select-none'>{title}</h2>
      <h3 className='mb-2 text-neutral-300 text-lg select-none'>{company}</h3>
      <p className='w-fit mb-2 text-neutral-300 text-sm uppercase leading-none tracking-tighter select-none'>
        {duration}
      </p>
      <p className='my-2 text-neutral-300 select-none'>{location}</p>
      <OutsideLink href={link} name={website} />
      <div className='flex flex-wrap gap-2 mt-4'>
        {Object.keys(technologies).map(item => {
          return <Pill key={item} tech={technologies[item]} />;
        })}
      </div>
    </div>
  );
};

export default Card;
