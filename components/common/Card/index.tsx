// packages
import React from 'react';

interface PCard extends PChildren {
  title: string;
  height?: string | number;
}

const Card: React.FC<PCard> = ({ title, height, children }) => {
  return (
    <div className={`w-full bg-neutral-900 rounded-3xl ${height ?? ''}`}>
      <div className='p-5'>
        <h1 className='mb-2 text-white text-xl font-semibold select-none'>
          {title}
        </h1>
        <div className='flex flex-col gap-2'>{children}</div>
      </div>
    </div>
  );
};
export default Card;
