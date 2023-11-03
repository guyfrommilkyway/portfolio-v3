// packages
import React from 'react';

// components
import CardHeader from './CardHeader';
import CardSubHeader from './CardSubHeader';
import CardDuration from './CardDuration';
import LinkExternal from '@/components/LinkExternal';

const Education: React.FC<EducationCardProps> = props => {
  const { program, university, duration, certificate } = props;

  return (
    <div className=''>
      <CardHeader title={program} href={certificate} />
      <CardSubHeader title={university} />
      <CardDuration duration={duration} />
    </div>
  );
};

export default Education;
