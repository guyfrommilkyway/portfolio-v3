// packages
import React from 'react';

// components
import SectionUI from '@/components/UI/SectionUI';
import Card from './components/Card';

const ContinuousLearning: React.FC<ContinuousLearningProps> = props => {
  const { data } = props;

  return (
    <SectionUI headline='Continuous Learning'>
      <p className='mb-4 text-neutral-300 select-none'>{data.description}</p>
      <div className='flex flex-col gap-4'>
        {!!data.courses &&
          Object.keys(data.courses)
            .sort()
            .reverse()
            .map(item => {
              return <Card key={item} {...data.courses[item]} />;
            })}
      </div>
    </SectionUI>
  );
};

export default ContinuousLearning;
