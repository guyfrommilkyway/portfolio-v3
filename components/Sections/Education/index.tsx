// packages
import React from 'react';

// components
import SectionUI from '@/components/UI/SectionUI';
import Card from './components/Card';

const Education: React.FC<EducationProps> = props => {
  const { data } = props;

  return (
    <SectionUI id='education'>
      <h1 className='mb-4 text-white text-2xl font-semibold'>Education</h1>
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

export default Education;
