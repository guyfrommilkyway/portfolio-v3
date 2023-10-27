// packages
import React from 'react';

// components
import SectionUI from '@/components/UI/SectionUI';
import Card from './components/Card';

const Education: React.FC<EducationProps> = props => {
  const { data } = props;

  return (
    <SectionUI headline='Education'>
      <div className='flex flex-col gap-5'>
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
