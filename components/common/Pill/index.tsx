// packages
import React from 'react';

interface PPill {
  text: string;
}

const Pill: React.FC<PPill> = ({ text }) => {
  return (
    <span className='px-2 py-1 text-neutral-300 text-sm font-medium select-none bg-neutral-900 rounded-md cursor-pointer'>
      {text}
    </span>
  );
};

export default Pill;
