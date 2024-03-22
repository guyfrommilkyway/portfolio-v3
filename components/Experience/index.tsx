// packages
import React from 'react';

// components
import CardHeader from '@/components/common/Card/CardHeader';
import CardSubHeader from '@/components/common/Card/CardSubHeader';
import CardDuration from '@/components/common/Card/CardDuration';

const Experience: React.FC<ExperienceCardProps> = props => {
  const { title, company, duration } = props;

  return (
    <div>
      <CardHeader title={title} />
      <CardSubHeader title={company} />
      <CardDuration duration={duration} />
    </div>
  );
};

export default Experience;
