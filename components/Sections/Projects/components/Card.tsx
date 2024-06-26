// packages
import React from 'react';

// components
import CardImage from './CardImage';
import CardHeader from './CardHeader';
import CardDescription from './CardDescription';
import CardPills from './CardPills';
import CardDisclaimer from './CardDisclaimer';

const ProjectCard: React.FC<IProject> = ({
  image,
  name,
  link,
  description,
  disclaimer,
  technologies,
}) => {
  return (
    <div className='flex flex-nowrap flex-col lg:flex-row items-start gap-x-8 gap-y-4'>
      {image && <CardImage name={name} image={image} />}
      <div>
        <CardHeader link={link} name={name} />
        <CardDescription description={description} />
        <CardPills technologies={technologies} />
        {disclaimer && <CardDisclaimer disclaimer={disclaimer} />}
      </div>
    </div>
  );
};

export default ProjectCard;
