// packages
import React from 'react';

// components
import SectionUI from '@/components/UI/SectionUI';
import Card from './components/Card';

const Experience: React.FC<ExperienceProps> = props => {
  const { data } = props;

  return (
    <SectionUI headline='Experience'>
      <div className='flex flex-col gap-8'>
        {!!data &&
          Object.keys(data)
            .sort()
            .reverse()
            .map(item => {
              return <Card key={item} {...data[item]} />;
            })}
      </div>
    </SectionUI>
  );
};

export default Experience;
