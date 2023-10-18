// packages
import React from 'react';

// components
import SectionUI from '@/components/UI/SectionUI';
import Card from './components/Card';

const Certifications: React.FC<CertificationsProps> = props => {
  const { data } = props;

  return (
    <SectionUI id='certifications'>
      <h1 className='mb-4 text-white text-2xl font-semibold'>Certifications</h1>
      <div className='flex flex-wrap gap-5'>
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

export default Certifications;
