// packages
import React from 'react';

// components
import Course from './Course';

const Card: React.FC<ContinuousLearningCardProps> = props => {
  const { name, organization, duration, courses } = props;

  return (
    <div className=''>
      <h2 className='text-white text-lg font-semibold select-none'>{name}</h2>
      <h3 className='mb-2 text-neutral-300 text-lg select-none'>
        {organization}
      </h3>
      <p className='w-fit mb-4 text-sm text-neutral-300 uppercase leading-none tracking-tighter select-none'>
        {duration}
      </p>
      <div className='flex flex-col items-start gap-1'>
        {!!courses &&
          Object.keys(courses).map(item => {
            return <Course key={item} {...courses[item]} />;
          })}
      </div>
    </div>
  );
};

export default Card;
