// packages
import React from 'react';

// components
import SectionUI from '@/components/UI/SectionUI';
import Card from './components/Card';

const Certifications: React.FC<CertificationsProps> = props => {
  const { data } = props;

  return (
    <SectionUI headline='Certifications'>
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
