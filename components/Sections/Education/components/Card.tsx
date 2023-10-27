// packages
import React from 'react';

// components
import LinkExternal from '@/components/LinkExternal';
import Pill from '@/components/Pill';

const Card: React.FC<EducationCardProps> = props => {
  const { program, university, duration, skills, certificate } = props;

  return (
    <div className=''>
      <h2 className='text-white font-semibold select-none'>{program}</h2>
      <h3 className='text-neutral-300 select-none'>{university}</h3>
      <p className='text-neutral-300 select-none'>{duration}</p>
      {!!certificate && (
        <LinkExternal href='certificate' name='Verified Certificate' />
      )}
      <div className='flex flex-wrap gap-2 mt-2'>
        {!!skills &&
          Object.keys(skills).map(item => {
            return <Pill key={item} tech={skills[item]} />;
          })}
      </div>
    </div>
  );
};

export default Card;
