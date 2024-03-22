// packages
import React from 'react';

// components
import CardHeader from '@/components/common/Card/CardHeader';
import CardDuration from '../common/Card/CardDuration';
import CardSubHeader from '../common/Card/CardSubHeader';

const Education: React.FC<EducationCardProps> = props => {
  const { program, university, duration, certificate } = props;

  return (
    <div>
      <CardHeader title={program} href={certificate} />
      <CardSubHeader title={university} />
      <CardDuration duration={duration} />
    </div>
  );
};

export default Education;
