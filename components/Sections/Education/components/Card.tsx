// packages
import React from 'react';

// components
import LinkExternal from '@/components/LinkExternal';
import Pill from '@/components/Pill';

const Card: React.FC<EducationCardProps> = props => {
  const { program, university, duration, description, skills, certificate } =
    props;

  return (
    <div className=''>
      <h2 className='text-white text-lg font-semibold select-none'>
        {program}
      </h2>
      <h3 className='text-neutral-300 select-none'>{university}</h3>
      <p className='text-neutral-300 select-none'>{duration}</p>
      {!!certificate && (
        <LinkExternal href='certificate' name='Verified Certificate' />
      )}
      {!!description && (
        <p className='mt-2 mb-4 text-neutral-300 select-none'>{description}</p>
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
