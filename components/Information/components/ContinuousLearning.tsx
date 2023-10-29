// packages
import React from 'react';

// components
import CardHeader from './CardHeader';
import CardDuration from './CardDuration';
import CardWrapper from './CardWrapper';

// assets
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa';

const ContinuousLearning: React.FC<ContinuousLearningCardProps> = props => {
  const { name, duration, courses } = props;

  return (
    <div className=''>
      <CardHeader title={name} />
      <CardDuration duration={duration} />
      <CardWrapper>
        {!!courses &&
          Object.keys(courses).map(item => {
            return (
              <div
                key={courses[item]}
                className='flex flex-nowrap gap-2 select-none'
              >
                {courses[item].status === 'true' ? (
                  <FaCheckCircle
                    size={12}
                    className='w-[12px] min-w-[12px] mt-[1.5px] text-green-700'
                  />
                ) : (
                  <FaRegCircle
                    size={12}
                    className='w-[12px] min-w-[12px] mt-[1.5px] text-neutral-600'
                  />
                )}
                <span className='text-neutral-300 text-sm leading-tight'>
                  {courses[item].course}
                </span>
              </div>
            );
          })}
      </CardWrapper>
    </div>
  );
};

export default ContinuousLearning;
