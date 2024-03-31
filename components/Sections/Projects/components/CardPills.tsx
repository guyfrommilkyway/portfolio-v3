// packages
import React from 'react';

// packages
import Pill from '@/components/common/Pill';

interface PCardPills {
  technologies: {
    [key: string]: string;
  };
}

const CardPills: React.FC<PCardPills> = ({ technologies }) => {
  return (
    <div className='flex flex-wrap gap-2 mb-2'>
      {Object.keys(technologies).map(item => {
        return <Pill key={item} text={technologies[item]} />;
      })}
    </div>
  );
};

export default CardPills;
