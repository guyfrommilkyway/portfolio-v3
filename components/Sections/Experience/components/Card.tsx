// packages
import React from 'react';

// components
// import CardHeader from '@/components/common/Card/CardHeader';
import CardHeader from './CardHeader';
import CardSubHeader from './CardSubHeader';
import CardDuration from './CardDuration';
import CardDescription from './CardDescription';
import CardLocation from './CardLocation';

const ExperienceCard: React.FC<IExperience> = ({
  company,
  description,
  duration,
  link,
  location,
  title,
}) => {
  return (
    <div className='flex flex-col'>
      <CardHeader link={link} name={company} />
      <CardSubHeader title={title} />
      <CardDuration duration={duration} />
      <CardLocation location={location} />
      {!!description && (
        <CardDescription>
          {Object.keys(description)
            .sort()
            .map(item => {
              console.log();
              return <li key={item}>{description[item]}</li>;
            })}
        </CardDescription>
      )}
    </div>
  );
};

export default ExperienceCard;
