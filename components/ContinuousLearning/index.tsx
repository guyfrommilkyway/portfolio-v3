// packages
import React from 'react';

// components
import ContentBox from '@/components/ContentBox';
import Card from './components/Card';

const ContinuousLearning: React.FC<ContinuousLearningProps> = props => {
  const { data } = props;

  return (
    <ContentBox id='learning'>
      <h1 className='mb-2 text-white text-2xl font-semibold'>
        Continuous Learning
      </h1>
      <p className='mb-4 text-neutral-300 select-none'>{data.description}</p>
      <div className='flex flex-col gap-5'>
        {!!data.courses &&
          Object.keys(data.courses)
            .sort()
            .reverse()
            .map(item => {
              return <Card key={item} {...data.courses[item]} />;
            })}
      </div>
    </ContentBox>
  );
};

export default ContinuousLearning;
