// packages
import React from 'react';

// components
import CardHeader from './CardHeader';
import CardSubHeader from './CardSubHeader';
import CardDuration from './CardDuration';
import CardLocation from './CardLocation';

const ExperienceCard: React.FC<IExperience> = ({
  company,
  duration,
  link,
  location,
  title,
  setup,
}) => {
  const CardHeaderProps = { link, company };
  const CardSubHeaderProps = { title };
  const CardDurationProps = { duration, setup };
  const CardLocationProps = { location };

  return (
    <div className='flex flex-col'>
      <CardHeader {...CardHeaderProps} />
      <CardSubHeader {...CardSubHeaderProps} />
      <CardDuration {...CardDurationProps} />
      <CardLocation {...CardLocationProps} />
    </div>
  );
};

export default ExperienceCard;
