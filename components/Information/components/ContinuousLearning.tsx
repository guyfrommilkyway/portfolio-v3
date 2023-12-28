// packages
import React from 'react';

// components
import CardHeader from './CardHeader';
import CardDuration from './CardDuration';

const ContinuousLearning: React.FC<ContinuousLearningCardProps> = props => {
  const { name, duration } = props;

  return (
    <div className=''>
      <CardHeader title={name} />
      <CardDuration duration={duration} />
    </div>
  );
};

export default ContinuousLearning;
