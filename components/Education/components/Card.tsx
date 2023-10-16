// packages
import React from 'react';

// components
import Pill from '@/components/Pill';

// assets
import ArrowUpSVG from '@/assets/svg/iconoir_arrow-tr.svg';

const Card: React.FC<EducationCardProps> = props => {
  const { program, university, duration, description, skills, certificate } =
    props;

  return (
    <div className=''>
      <h2 className='text-white text-lg font-semibold select-none'>
        {program}
      </h2>
      <h3 className='mb-2 text-neutral-300 select-none'>{university}</h3>
      <p className='w-fit mb-2 text-sm text-neutral-300 uppercase leading-none tracking-tighter select-none'>
        {duration}
      </p>
      {!!certificate && (
        <a
          className='flex gap-2 w-fit mb-2 text-neutral-300 underline hover:text-white select-none cursor-pointer'
          href={certificate}
          target='_blank'
        >
          Verified Certificate <ArrowUpSVG width={14} height={14} />
        </a>
      )}
      {!!description && (
        <p className='my-4 text-neutral-300 select-none'>{description}</p>
      )}
      <div className='flex flex-wrap gap-2'>
        {!!skills &&
          Object.keys(skills).map(item => {
            return <Pill key={item} tech={skills[item]} />;
          })}
      </div>
    </div>
  );
};

export default Card;
