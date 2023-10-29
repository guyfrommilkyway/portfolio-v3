// packages
import React from 'react';

// components
import CardHeader from './CardHeader';
import CardSubHeader from './CardSubHeader';
import CardDuration from './CardDuration';
import LinkExternal from '@/components/LinkExternal';

const ExperienceCard: React.FC<ExperienceCardProps> = props => {
  const { duration, title, company, link, website } = props;

  return (
    <div className=''>
      <CardHeader title={company} />
      <CardSubHeader title={title} />
      <CardDuration duration={duration} />
      <LinkExternal href={link} name={website} />
    </div>
  );
};

export default ExperienceCard;
