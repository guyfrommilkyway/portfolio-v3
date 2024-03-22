// packages
import React from 'react';

// packages
import Pill from '@/components/common/Pill';

const CardPills: React.FC<IProjectCardPills> = props => {
  const { technologies } = props;

  return (
    <div className='flex flex-wrap gap-2'>
      {Object.keys(technologies).map(item => {
        return <Pill key={item} text={technologies[item]} />;
      })}
    </div>
  );
};

export default CardPills;
