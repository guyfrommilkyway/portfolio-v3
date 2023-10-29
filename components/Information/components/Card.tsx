// packages
import React from 'react';

// components
import CardUI from '@/components/UI/CardUI';

const InformationCard: React.FC<InformationCardProps> = props => {
  const { title, children } = props;

  return (
    <CardUI>
      <div className='p-4'>
        <h1 className='mb-2 text-white text-lg font-semibold select-none'>
          {title}
        </h1>
        <div className='flex flex-col gap-3'>{children}</div>
      </div>
    </CardUI>
  );
};
export default InformationCard;
