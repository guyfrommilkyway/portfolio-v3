// packages
import React from 'react';

// components
import OutsideLink from '@/components/Links/OutsideLink';
import Pill from '@/components/Pill';

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
        <OutsideLink href='certificate' name='Verified Certificate' />
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
