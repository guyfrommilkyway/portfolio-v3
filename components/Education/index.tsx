// packages
import React from 'react';

// components
import SectionUI from '@/components/UI/SectionUI';
import Card from './components/Card';
import CardUI from '@/components/UI/CardUI';

const Education: React.FC<EducationProps> = props => {
  const { data } = props;

  return (
    <div className='py-4 border-b border-neutral-900'>
      <h1 className='mx-4 mb-2 text-white text-lg font-semibold select-none'>
        Academic Profile
      </h1>
      <div className='flex flex-col gap-3 px-4'>
        {!!data &&
          Object.keys(data)
            .sort()
            .reverse()
            .map(item => {
              return <Card key={item} {...data[item]} />;
            })}
      </div>
    </div>
  );
};

export default Education;
