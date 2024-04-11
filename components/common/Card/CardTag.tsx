// packages
import React from 'react';

interface CardTag {
  tag: string;
}

const CardTag: React.FC<CardTag> = ({ tag }) => {
  return (
    <span className='text-neutral-300 text-xs font-bold uppercase tracking-tighter select-none'>
      [{tag}]
    </span>
  );
};

export default CardTag;
