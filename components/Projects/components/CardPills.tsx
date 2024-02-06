// packages
import React from 'react';

// packages
import Pill from '@/components/Pill';

const CardPills: React.FC<ProjectCardPills> = props => {
  const { teamSize, hostingProvider, technologies } = props;

  return (
    <>
      {teamSize !== 'hide' && (
        <div className='flex flex-wrap flex-col items-start gap-2 mb-2'>
          <Pill tech={`Team: ${teamSize}`} />
        </div>
      )}
      <div className='flex flex-wrap gap-2'>
        <Pill tech={`Deployed with ${hostingProvider}`} />
        {Object.keys(technologies).map(item => {
          return <Pill key={item} tech={technologies[item]} />;
        })}
      </div>
    </>
  );
};

export default CardPills;
