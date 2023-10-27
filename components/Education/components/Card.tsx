// packages
import React from 'react';

// components
import LinkExternal from '@/components/LinkExternal';
import Pill from '@/components/Pill';
import CardUI from '@/components/UI/CardUI';

const Card: React.FC<EducationCardProps> = props => {
  const { program, university, duration, skills, certificate } = props;

  return (
    <div className=''>
      <h2 className='text-neutral-300 font-semibold select-none'>{program}</h2>
      <h3 className='text-neutral-300 select-none'>{university}</h3>
      <p className='text-neutral-300 select-none'>{duration}</p>
      {!!certificate && (
        <LinkExternal href='certificate' name='Verified Certificate' />
      )}
    </div>
  );
};

export default Card;
