// packages
import React from 'react';

// components
import Course from './Course';

const Card: React.FC<ContinuousLearningCardProps> = props => {
  const { name, organization, duration, courses } = props;

  return (
    <div className=''>
      <h2 className='text-white font-semibold select-none'>{name}</h2>
      <h3 className='text-neutral-300 select-none'>{organization}</h3>
      <p className='mb-2 text-neutral-300 select-none'>{duration}</p>
      <div className='flex flex-col items-start'>
        {!!courses &&
          Object.keys(courses).map(item => {
            return <Course key={item} {...courses[item]} />;
          })}
      </div>
    </div>
  );
};

export default Card;
