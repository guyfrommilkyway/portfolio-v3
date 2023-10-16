// packages
import React from 'react';

// components
import Pill from '@/components/Pill';

// assets
import ArrowUpSVG from '@/assets/svg/iconoir_arrow-tr.svg';

const Card: React.FC<ExperienceCardProps> = props => {
  const { duration, title, company, description, link, website, technologies } =
    props;

  return (
    <div className=''>
      <h2 className='text-white text-xl font-semibold select-none'>{title}</h2>
      <h3 className='mb-2 text-neutral-300 text-lg select-none'>{company}</h3>
      <p className='w-fit mb-2 text-neutral-300 text-sm uppercase leading-none tracking-tighter select-none'>
        {duration}
      </p>
      <a
        className='flex gap-2 w-fit mb-4 text-neutral-300 underline hover:text-white select-none'
        href={link}
        target='_blank'
      >
        {website}
        <ArrowUpSVG width={14} height={14} />
      </a>
      {!!description && (
        <p className='mb-2 text-neutral-300 text-lg select-none'>
          {description}
        </p>
      )}
      <div className='flex flex-wrap gap-2'>
        {Object.keys(technologies).map(item => {
          return <Pill key={item} tech={technologies[item]} />;
        })}
      </div>
    </div>
  );
};

export default Card;
