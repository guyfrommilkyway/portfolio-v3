// packages
import React from 'react';

// assets
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Course: React.FC<ContinuousLearningCourseProps> = props => {
  const { course, status } = props;

  return (
    <div className='flex items-center gap-2 select-none'>
      {status === 'true' ? (
        <FaCheckCircle size={14} className='text-green-700' />
      ) : (
        <FaTimesCircle size={14} className='text-red-900' />
      )}
      <span className='text-neutral-300'>{course}</span>
    </div>
  );
};

export default Course;
