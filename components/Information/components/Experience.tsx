// packages
import React from 'react';

// components
import CardHeader from './CardHeader';
import CardSubHeader from './CardSubHeader';
import CardDuration from './CardDuration';

const ExperienceCard: React.FC<ExperienceCardProps> = props => {
  const { duration, title, company, link } = props;

  return (
    <div className=''>
      <CardHeader title={company} href={link} />
      <CardSubHeader title={title} />
      <CardDuration duration={duration} />
    </div>
  );
};

export default ExperienceCard;
