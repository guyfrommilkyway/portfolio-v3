// packages
import React from 'react';

// components
import CardHeader from './CardHeader';
import CardDuration from './CardDuration';

const ContinuousLearning: React.FC<ContinuousLearningCardProps> = props => {
  const { name, duration, courses } = props;

  return (
    <div className=''>
      <CardHeader title={name} />
      <CardDuration duration={duration} />
    </div>
  );
};

export default ContinuousLearning;
